import React from 'react'
import Header from  '../Header'
import Chart from '../Chart'
import Aside from './Aside'

class UserDashboard extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
          <>
            <main className='h-screen container mx-auto  '>
                <section className=' '>
                    <h2 className='text-center text-3xl mt-5 text-shadow-md font-semibold'>User Dashboard</h2>
                    <section className='flex flex-row'>
                            <section className='flex flex-row ml-5 flex-1'>
                                <section className='mt-5 '>
                                    <div className='bloodRequests-data  flex flex-row items-center justify-center'>
                                        <div className='shadow-md p-2  mr-4 w-48 h-48 flex flex-col items-center justify-center text-center'>
                                            <h3 className='text-md font-semibold '>Blood Requests Raised</h3>
                                            <span className='text-5xl  font-semibold text-shadow-md'>10</span>
                                        </div>
                                        <div>
                                            <Chart />
                                        </div>
                                    </div>
                                </section>
                                <section className='mt-5'>
                                    <div className='bloodRequests-data flex flex-row items-center justify-center'>
                                        <div className='shadow-md p-2 mr-4 w-48 h-48 flex flex-col items-center justify-center text-center'>
                                            <h3 className='text-md  font-normal'>BloodRequests Accepted</h3>
                                            <span className='text-5xl font-semibold text-shadow-md'>2</span>
                                        </div>
                                    </div>
                                </section>
                                <section className='mt-5'>
                                    <div className='bloodRequests-data flex flex-row items-center justify-center'>
                                        <div className='shadow-md p-2 mr-4 w-48 h-48 flex flex-col items-center justify-center text-center'>
                                            <h3 className='text-md  font-normal'>FundRasing Request </h3>
                                            <span className='text-5xl font-semibold text-shadow-md'>5</span>
                                        </div>
                                    </div>
                                </section>
                                <section className='mt-5'>
                                    <div className='bloodRequests-data flex flex-row items-center justify-center'>
                                        <div className='shadow-md p-2 mr-4 w-48 h-48 flex flex-col items-center justify-center text-center'>
                                            <h3 className='text-md  font-normal'>Funds Donated</h3>
                                            <span className='text-3xl font-semibold text-shadow-md'>Rs 10,000/-</span>
                                        </div>
                                    </div>
                                </section>
                            </section>
                            <section className=' h-96 p-5 shadow-2xl bg-yellow-300  items-start w-96 mr-5  mt-10'>
                                <Aside />
                            </section>
                    </section>
                </section>
            </main>
          </>
        )
    }
}




export default UserDashboard