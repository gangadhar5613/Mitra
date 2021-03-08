import React from 'react'
import Steps from './Steps'
import Form from './Form'
import Loader from '../Loader'
import Header from '../Header'


class Register extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            step:3,
            mobileVerify:false,
            otpVerified:false,
            otpSent:false,
            mobileVerifiedSuccessfull:true,
            mobile:'',
            mobileResponse:null,
            authForm:'register',
            errors:{
                mobile:''
            },
            mobileOtp:[],
            otp:null,
            otpResponse:null,
           fullname:'',
           email:'',
           bloodgroup:'',
           dateofbirth:'',
           pincode:null,
           locationFetching:'',
           location:null

            

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
    handleVerifyOtp = async (event) => {
       let finalOtp = await this.state.mobileOtp.reduce((acc,cv) => {
           let otp = acc+cv
           return otp
       },[])
       this.setState({
           otp:finalOtp
        })

        let body = {
            "user":{
                "mobile":this.state.mobileResponse.to,
                "code":this.state.otp
            }
        }
        await  fetch(`/api/v1/user/mobile/verify`,{method:'POST',headers:{"Content-Type": "application/json"},body:JSON.stringify(body)})
                .then((res) => res.json())
                .then((data) => 
                   ((data.status == 'approved') ? this.setState({mobileVerifiedSuccessfull:true}) : this.setState({mobileVerifiedSuccessfull:false}))
                )
        await (this.state.mobileVerifiedSuccessfull ? this.setState((prevState) => {
            return{
                  step:prevState.step + 1
            }
        }): '')
    
    }

    handleOtpInput = (event) => {
        let {name,value} = event.target
        console.log(value)
        switch (name) {
            case 'first': 
              this.setState((prevState) => {
                  return{
                      mobileOtp:prevState.mobileOtp.concat([(value)])
                  }
              })
                break;
            case 'second':
                this.setState((prevState) => {
                    return{
                        mobileOtp:prevState.mobileOtp.concat([(value)])
                    }
                })
            break;
            case 'third':
                this.setState((prevState) => {
                    return{
                        mobileOtp:prevState.mobileOtp.concat([(value)])
                    }
                })
            break;
            case 'fourth':
                this.setState((prevState) => {
                    return{
                        mobileOtp:prevState.mobileOtp.concat([(value)])
                    }
                })
            break;
            case 'fifth':
                this.setState((prevState) => {
                    return{
                        mobileOtp:prevState.mobileOtp.concat([(value)])
                    }
                })
            break;
            case 'sixth':
                this.setState((prevState) => {
                    return{
                        mobileOtp:prevState.mobileOtp.concat([(value)])
                    }
                })
                break;
            default:
                break;
        }
    }

    countDigits = (n) => {    
            var count = 0;
            if (n >= 1) ++count;         
            while (n / 10 >= 1) {
              n /= 10;
              ++count;
            }         
            return count;     
    }

    handleChangingForm = () => {

    }

    handleInput = (event) => {
       let {name,value} = event.target
       let errors = this.state.errors

       if(name == 'pincode'){
           console.log(value)
           if(value.length > 6){
               return
           }
           this.setState({
               locationFetching:'yes'
           })
           let body = {
               "location":{
                   "pincode":value
               }
           }
            if(this.countDigits(value) == 6){
                 fetch(`/api/v1/location/pincode`,{method:'POST',headers:{"Content-Type": "application/json"},body:JSON.stringify(body)})
                 .then((res) => res.json())
                 .then((data) => this.setState({
                     location:data,
                     locationFetching:'no'
                 }))
            }
       }
       
       switch (name) {
           case 'mobile':
           errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
                  this.setState({
                      mobile:Number(value)
                  })
               break;
           case 'email':
            // errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
                       this.setState({
                           mobile:value
                       })
            break;
             case 'fullname':
                // errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
                       this.setState({
                           fullname:value
                       })
            break;
           case 'bloodgroup':
            // errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
                       this.setState({
                           bloodgroup:value
                       })
            break;
            case 'dateofbirth':
                // errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
                           this.setState({
                               dateofbirth:value
                           })
                break;
             case 'profileimage':
                // errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
                       this.setState({
                           mobile:value
                       })
            break;
            case 'medicalReport':
        //    errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
                  this.setState({
                      mobile:value
                  })
               break;
            case 'pincode':
                    this.setState({
                        pincode:value
                    })

                    

                       break;
           case 'location':
            // errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
                       this.setState({
                           mobile:value
                       })
            break;
             case 'password':
                // errors.mobile = ( this.countDigits(value) >=10 ) ? '' : 'Please enter valid 10 digit mobile number'
                       this.setState({
                           mobile:value
                       })
            break;
       
           default:
               break;
       }
    }

  async  sendOtp(){
        let user = {
            "user":{
                "mobile":this.state.mobile
            }
        }
     await   fetch(`/api/v1/user/mobile`,{method:'POST',headers:{"Content-Type": "application/json"},body:JSON.stringify(user)})
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

    fetchingLocation = () =>{
    
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition(locationSuccess.bind(e), locationFailure)
        // }
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(() => console.log('succes'), console.log('failed'))
    }
    
    }

    handleUserSubmit = () => {
        let user ={
            "user":{
                fullname:this.state.fullname,
                email:this.state.email,
                mobile:this.state.mobile,
                bloodgroup:this.state.bloodgroup,
                dob:this.state.dateofbirth,
               isVerified:true,
               medicalReport:'/localhost',

            }
        }
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
            console.log(event.target.id)
            if(event.target.id == 3){
                this.fetchingLocation()
            }
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
             <section className='flex items-center register relative flex-row w-screen container mx-auto  h-screen'>
                <section className='w-full bg-white    shadow-xl mx-40 md:w-full   '>
                    <div className='heading flex  flex-row justify-between'>
                        <div className='flex  bg-red-500 cursor-pointer  shadow-md py-2 border-r border-gray-300 w-full items-center justify-center'>
                          <button onClick={this.handleForm} id='register' className='text-xl'>Register</button>
                        </div>
                        <div className='flex bg-red-500 cursor-pointer  shadow-md py-2  w-full items-center justify-center'>
                          <button onClick={this.handleForm} id='login' className='text-xl'>Login</button>
                        </div>
                    </div>
                    <div className='flex flex-row md:flex-shrink-0 h-96 '>
                        <div className='steps w-96 h-96 '>
                          <Steps step={this.state.step}  />
                        </div>
                        <div className='form   flex-1'>
                           <Form handleOtp={this.handleOtp} handleVerifyOtp={this.handleVerifyOtp} handleOtpInput={this.handleOtpInput} state={this.state} mobile={this.state.mobile} handleInput={this.handleInput} otpSent={this.state.otpSent} handleForm={this.handleForm} handlePrevForm={this.handlePrevForm} step={this.state.step} />
                        </div>
                    </div>
                    <div className={ (this.state.otpSent && !this.state.mobileResponse || this.state.otpResponse) ? 'absolute  left-96 top-96' : 'hidden'}>
                       <Loader />
                    </div>
                </section>
             </section>
           </>
        )
    }
}

export default Register;