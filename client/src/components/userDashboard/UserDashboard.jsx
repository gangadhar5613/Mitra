import React from 'react'
import Header from  '../Header'
import Chart from '../Chart'
import img from '../../../public/images/user.png'
import BloodDonated from './BloodDonated';
import FundsRaised from './FundsRaised'

class UserDashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            status:'4',
        }
    }


    renderStatus = () => {
          let step = this.state.status
        switch (step) {
            case '1':
                  return <OverAllStatus />
                break;
            case '2':
                return <BloodRequestsRaised />
                break;
            case '3':
                return <BloodDonated />
                break;
            case '4':
                return <FundsRaised />
                break;
            default:
                return <OverAllStatus />
                break;
                
        }

    }

    handleStep = (event) => {
           let id = event.target.id

           this.setState({
               status:id
           })
    }


    render(){
        return(
          <>
            <main className='h-screen dashboard container py-20 mx-auto  '>
                  <h3 className='text-3xl font-semibold text-center'>Dashboard</h3>
                  <section className='mt-2 mx-20'>
                      <div className='container  '>
                         <div className='flex flex-row  border-l-4 border-r-4 rounded-md   border-red-500  justify-around py-4 items-center  shadow-md'>
                             <button onClick={this.handleStep} id='1' className={this.state.status == '1' ? ' shadow  px-6 text-xl bg-red-800  text-white rounded    hover:scale-110 focus:outline-none py-2' : 'shadow bg-yellow-500 rounded hover:scale-110  px-6 text-xl py-2'}>Overall Status</button>
                             <button onClick={this.handleStep} id='2' className={this.state.status == '2' ? ' shadow  px-6 text-xl bg-red-800  text-white rounded    hover:scale-110 focus:outline-none py-2' : 'shadow bg-yellow-500 rounded hover:scale-110  px-6 text-xl py-2'}>Blood Requests Raised</button>
                             <button onClick={this.handleStep} id='3' className={this.state.status == '3' ? ' shadow  px-6 text-xl bg-red-800  text-white rounded    hover:scale-110 focus:outline-none py-2' : 'shadow bg-yellow-500 rounded hover:scale-110  px-6 text-xl py-2'}>Blood Donated</button>
                             <button onClick={this.handleStep} id='4' className={this.state.status == '4' ? ' shadow  px-6 text-xl bg-red-800  text-white rounded    hover:scale-110 focus:outline-none py-2' : 'shadow bg-yellow-500 rounded hover:scale-110  px-6 text-xl py-2'}>Funds Raised</button>
                         </div>
                      </div>
                      <div className='border-r-2 my-5 border-l-2 border-b-2 border-dashed border-red-600  w-full'>
                          {
                              this.renderStatus()
                          }
                      </div>
                  </section>
            </main>
          </>
        )
    }
}


function OverAllStatus(props){
    return(
        <div className='flex  container rounded   border-r-2 border-b-2 pb-5 border-l-2 border-red-500 border-dashed    pl-20 flex-row'>
        <div className='flex flex-col'>
            <StatusCard title={'Blood Requests Raised'} value={10} />
            <StatusCard title={'Blood Donated'} value={2} />
            <StatusCard title={'Funds Donated'} value={`Rs 10,000`} />
        </div>
        <div className='flex justify-center items-end ml-20'>
            <Chart />
        </div>
        <div className='flex items-center justify-center mx-40'>
            <img className='w-96 h-40 ' src={img} alt='user' ></img>
        </div>
</div>
    )
}

function BloodRequestsRaised(props){
    return(
        <section className='w-full px-5 my-4   container'>
            <div>
                <table className='border-l border-r border-2 border-red-800 rounded'>
                    <thead className='border-2  bg-red-800 text-white '>
                        <tr className=''>
                            <th className='w-96  py-4 text-xl border-l border-2 border-white mx-2'>Title</th>
                            <th  className='w-96 border-l border-2 border-white text-xl'>Requested By</th>
                            <th  className='w-96 border-l border-2 border-white text-xl'>Hospital</th>
                            <th  className='w-96 border-l border-2 border-white text-xl'>Donated By</th>
                            <th  className='w-96 border-l border-2 border-white text-xl'>Status</th>
                            <th  className='w-96 border-l border-2 border-white text-xl'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center  items-center'>
                            <TableData />
                            <TableData />
                    </tbody>
                </table>
            </div>
        </section>
    )
}


function TableData(props){
    return(
        <tr >
        <td className='border-l border-2 border-black'>
            <h3 className='cursor-pointer'>Emergency B+ required for small children</h3>
        </td>
        <td className='border-l border-2 border-black'>
           <div className='flex flex-row items-center justify-center'>
             <i className="fas text-2xl text-yellow-500 fa-user"></i>
              <h3 className='text-2xl ml-2 hover:underline  cursor-pointer'>Dummy</h3>
           </div>
        </td>
        <td className='border-l border-2 border-black'>
           <div className='flex flex-row items-center justify-center'>
               <i className="fas text-2xl text-blue-600  fa-hospital"></i>
               <span className='text-xl ml-2 cursor-pointer hover:underline'>Harisha Chandrar Hospital</span>
           </div>
        </td>
        <td className='border-l border-2 border-black'>
            <div className='flex flex-row items-center justify-center'>
             <i className="fas text-2xl text-green-600 mr-2 fa-user"></i>
              <h3 className='text-2xl cursor-pointer hover:underline'>Dummy</h3>
           </div>
        </td>
        <td className='border-l border-2 border-black'>
            <span className='bg-yellow-300 p-2  rounded'>Not Fulfilled</span>
        </td>
        <td className='border-l border-2 border-black'>
            <button className='bg-green-600 rounded mr-2 text-white px-4 py-1'>Details</button>
            <button className='bg-red-700 text-white px-4 py-1 rounded'>Delete</button>
        </td>
    </tr>
    )
}



function StatusCard(props){
    return(
        <section className='mt-5  '>
            <div className='bloodRequests-data  flex flex-row items-center'>
                <div className='shadow-md p-2 bg-yellow-400  mr-4 w-36 h-32 flex flex-col items-center justify-center text-center'>
                    <h3 className='text-md  text-white font-semibold '>{props.title}</h3>
                    <span className='text-3xl text-red-800  font-bold text-shadow-md'>{props.value}</span>
                </div>
            </div>
        </section>
    )
}



export default UserDashboard