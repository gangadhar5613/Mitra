import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
                
            }
        }
    }

     ValidateEmail = (mail) =>{
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
           return true
        }
           return false
        }

    handleInput = (event) => {
        let { name, value } = event.target
        let errors = this.state.errors
        switch (name) {
            case 'email':
                errors.email = (this.ValidateEmail(value) ? '' : "Please enter valid email")
                this.setState({
                    email:value
                })
                break;
            case 'password':
                errors.password = ((value.length >= 6) ? '' : 'Password should be min 6 characters')
                this.setState({
                    password:value
                })
            default:
                break;
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        let user = {
            "user": {
                "email": this.state.email,
                "password":this.state.password
            }
        }

      await  fetch(`/api/v1/user/login`, { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(user) })
        .then((res) => res.json())
        .then((data) => localStorage.setItem('token',data.user.token) )
    }

    render(){
        return(
            <section className='flex items-center justify-center relative flex-row w-screen container mx-auto  h-screen'>
                <div className='  flex flex-row items-center justify-center py-20 h-96   shadow-2xl    '>
                    <div>
                       <img className=' h-96' src='https://images.unsplash.com/photo-1552452380-4137214f33b6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='nature' ></img>
                    </div>
                    <div className='px-10'>
                            <form className='flex flex-col items-center justify-center' >
                                    <h2 className='text-3xl  text-shadow-lg font-bold'>User Login</h2>
                                    <div className='flex flex-col mt-2'>
                                        <div className='flex flex-col ml-2'>
                                            <label htmlFor='email' className='text-md font-semibold text-shadow-md'>Email</label>
                                            <input onChange={this.handleInput} type='text' id='email' name='email' className='email w-96 mt-1 block   outline-none border-2 border-red-800  h-10  shadow-lg hover:bg-red-700  focus:ring-0' placeholder='Enter your email'></input>
                                           <span className='text-sm font-light text-red-500'>{this.state.errors.email ? this.state.errors.email : ''}</span>
                                        </div>
                                        <div className='flex flex-col ml-2'>
                                            <label htmlFor='password' className='text-md font-semibold text-shadow-md'>Password</label>
                                            <input onChange={this.handleInput} type='text' id='password' name='password' className='password w-96 mt-1 block   outline-none border-2 border-red-800  h-10  shadow-lg hover:bg-red-700  focus:ring-0' placeholder='Enter your password'></input>
                                            <span className='text-sm font-light text-red-500'>{this.state.errors.password ? this.state.errors.password : ''}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={this.handleSubmit}  id='register' className='text-xl bg-red-700 text-white px-6 py-2 my-2'>Login</button>
                                    </div>
                                    <span className=' text-shadow-xl font-semibold'>Not Registered Yet ? <a href='#' className='text-red-800'>Register</a> Now</span>
                            </form>
                    </div>
                </div>
             </section>
        )
    }
}

export default Login