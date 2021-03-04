import React from 'react'
import Steps from './Steps'
import Form from './Form'
import Loader from '../Loader'


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            step:1,
            mobileVerify:false,
            otpSent:false,
            mobileVerifiedSuccessfull:false,
            mobile:'',
            mobileResponse:null,
            authForm:'register'
            

        }
    }

    handleMobileVerify = () => {
        this.setState((prevState) =>{
           return{
            mobileVerifiedSuccessfull:true,
            step:prevState.step + 1
           }
        
        })
 
    }

    handleInput = (event) => {
       let {name,value} = event.target
       switch (name) {
           case 'mobile':
                  this.setState({
                      mobile:value
                  })
               break;
       
           default:
               break;
       }
    }

  async  sendOtp(){
        let mobile = {
            "mobile":this.state.mobile
        }
     await   fetch(`/api/v1/user/mobile`,{method:'POST',headers:{"Content-Type": "application/json"},body:JSON.stringify(mobile)})
        .then((res) => res.json())
        .then((data) => this.setState({mobileResponse:data}) )
    }

    handleOtp = async () => {
       this.sendOtp()
        this.setState(() => {
            return{
                otpSent:true
            }
        })
       

    }

    handlePrevForm = (event) => {
        this.setState((prevState) => {
            return{
                step:prevState.step -1
            }
        })
    }

    handleForm = (event) => {
       console.log(event.target.id)
        if(event.target.id == 1){
            this.setState((prevState) => {
                return{
                    mobileVerify:true,
                    
                }
           })
            this.handleMobileVerify()

        }else if(event.target.id >= 2){
            this.setState((prevState) => {
                return{
                    step:prevState.step+1
                }
           })
        }
    }

    handleAuthForm = (event) => {

        if(event.target.id == 'register'){
            this.setState({
                authForm:'register'
            })
        }else{
            this.setState({
                authForm:'login'
            })
        }

    }

    render(){
        return(
           <>
             <section className='flex items-center relative  w-screen container mx-auto  h-screen'>
                <section className='w-full bg-yellow-500    shadow-md mx-40 md:w-full   '>
                    <div className='heading flex  flex-row justify-between'>
                        <div className='flex  bg-red-500 cursor-pointer  shadow-md py-2 border-r border-gray-300 w-full items-center justify-center'>
                          <button onClick={this.handleForm} id='register' className='text-xl'>Register</button>
                        </div>
                        <div className='flex bg-red-500 cursor-pointer  shadow-md py-2  w-full items-center justify-center'>
                          <button onClick={this.handleForm} id='login' className='text-xl'>Login</button>
                        </div>
                    </div>
                    <div className='flex flex-row h-96 '>
                        <div className='steps w-96 h-96 '>
                          <Steps step={this.state.step}  />
                        </div>
                        <div className='form   flex-1'>
                           <Form handleOtp={this.handleOtp} state={this.state} mobile={this.state.mobile} handleInput={this.handleInput} otpSent={this.state.otpSent} handleForm={this.handleForm} handlePrevForm={this.handlePrevForm} step={this.state.step} />
                        </div>
                    </div>
                    <div className={ (this.state.otpSent && !this.state.mobileResponse) ? 'absolute  left-96 top-96' : 'hidden'}>
                       <Loader />
                    </div>
                </section>
             </section>
           </>
        )
    }
}

export default Register