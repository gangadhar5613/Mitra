import React from 'react'
import feedImg from '../../../public/images/feed.png'
import BloodRequestFeed from './BloodRequestFeed'
import FundRaisingFeed from './FundRaisingFeed'
import Filters from './Filters'
import { Link } from 'react-router-dom'

class Feed extends React.Component{
    constructor(props){
        super(props)
        this.state={
            bloodRequestFeed :true,
            fundRaisingFeed:false
        }
    }


    handleFeed = (event) => {
        
        if(event.target.id == 'bloodRequest'){
            this.setState({
                bloodRequestFeed:true,
                fundRaisingFeed:false
            })
        }else{
            this.setState({
                fundRaisingFeed:true,
                bloodRequestFeed:false
            })
        }
    }

    render(){
        return (
            <>
                    <div className='fixed cursor-pointer  z-20  bottom-10 bg-red-600 w-15 flex items-center justify-center h-15 rounded-full right-40'>
                        <Link to='/bloodrequest/create'>
                           <button className='text-7xl outline-none cursor-pointer  text-white  font-bold'>+</button>
                        </Link>
                    </div>
            <section className='py-20 container relative mx-auto'>
                   <div className='text-center relative flex flex-row items-center justify-center  font-semibold'>
                       <div>
                         <h2 className=' text-3xl mb-5'>Live Feed</h2>
                         <h3 className=' font-light'>Live feed of both all Blood Requests & Fund Raising through our platform</h3>
                       </div>
                       <div className='flex fixed items-center justify-end   right-40  top-28 '>
                            <img src={feedImg} className='  w-60 h-60' alt='feed'></img>
                        </div>
                        <span class="flex h-12 w-12  right-64 fixed  top-64">
                              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-800 opacity-75"></span>
                             <span class="relative inline-flex rounded-full h-3 w-3"></span>
                        </span>
                   </div>
                   <div className='flex flex-col '>
                        <div className='mt-5  w-96 border-b-2  border-yellow-500  border-dashed  ml-32'>
                            <button onClick={this.handleFeed}  id='bloodRequest' className={this.state.bloodRequestFeed ? 'bg-yellow-400 text-black    mx-2  underline px-4 py-2' : 'bg-red-700   mx-2 text-white px-4 py-2'}>Blood Requests</button>
                            {/* <button onClick={this.handleFeed} id='fundRaising'className={this.state.fundRaisingFeed ? 'bg-yellow-400 text-black    mx-2  underline px-4 py-2' : 'bg-red-700   mx-2 text-white px-4 py-2'}>Fund Raising</button> */}
                        </div>
                        <div className='flex flex-row'>
                            <div className='ml-20 '>
                                {
                                    this.state.bloodRequestFeed ? <BloodRequestFeed /> : <FundRaisingFeed />
                                }
                            </div>
                            <div className=''>
                                <Filters />
                            </div>
                        </div>
                </div>
                </section>
        </>
        )
    }
}


export default Feed