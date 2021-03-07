import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className='flex items-center justify-center relative flex-row w-screen container mx-auto  h-screen'>
                <div className=' bg-yellow-500 flex flex-row items-center justify-center py-20 h-96   shadow-md    '>
                    <div>
                       <img className=' h-96' src='https://images.unsplash.com/photo-1552452380-4137214f33b6?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='nature' ></img>
                    </div>
                    <div className='px-10'>
                            <form className='flex flex-col items-center justify-center' >
                                    <h2 className='text-3xl text-white text-shadow-lg font-bold'>User Login</h2>
                                    <div className='flex flex-col mt-2'>
                                        <div className='flex flex-col ml-2'>
                                            <label htmlFor='email' className='text-md font-semibold text-shadow-md'>Email</label>
                                            <input type='text' id='email' name='email' className='email w-96 mt-1 block   outline-none border-2 border-red-800  h-10  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your email'></input>
                                        </div>
                                        <div className='flex flex-col ml-2'>
                                            <label htmlFor='password' className='text-md font-semibold text-shadow-md'>Password</label>
                                            <input type='text' id='password' name='password' className='password w-96 mt-1 block   outline-none border-2 border-red-800  h-10  text-white shadow-lg hover:bg-red-700 focus:bg-black focus:ring-0' placeholder='Enter your password'></input>
                                        </div>
                                    </div>
                                    <div>
                                        <button  id='register' className='text-xl bg-red-700 text-white px-6 py-2 my-2'>Login</button>
                                    </div>
                                    <span className='text-white text-shadow-xl font-semibold'>Not Registered Yet ? <a href='#' className='text-red-800'>Login</a> Now</span>
                            </form>
                    </div>
                </div>
             </section>
        )
    }
}

export default Login