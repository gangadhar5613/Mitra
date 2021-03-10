import React from 'react'



function BloodDonated(props){
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
                            <th  className='w-96 border-l border-2 border-white text-xl'>Date Of Donated</th>
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
            <h3 className='cursor-pointer text-xl hover:underline  hover:text-red-700'>Emergency B+ required for small children</h3>
        </td>
        <td className='border-l border-2 border-black'>
           <div className='flex flex-row items-center justify-center'>
             <i className="fas text-2xl text-yellow-500 fa-user"></i>
              <h3 className='text-2xl ml-2 hover:underline hover:text-red-700  cursor-pointer'>Dummy</h3>
           </div>
        </td>
        <td className='border-l border-2 border-black'>
           <div className='flex flex-row items-center justify-center'>
               <i className="fas text-2xl ml-5 text-blue-600  fa-hospital"></i>
               <span className='text-xl ml-2 cursor-pointer hover:text-red-700 hover:underline'>Harisha Chandrar Hospital</span>
           </div>
        </td>
        <td className='border-l border-2 border-black'>
            <div className='flex flex-row items-center justify-center'>
             <i className="fas text-2xl text-green-600 mr-2 fa-user"></i>
              <h3 className='text-2xl cursor-pointer hover:text-red-700 hover:underline'>Dummy</h3>
           </div>
        </td>
        <td className='border-l border-2 border-black'>
            <span className='bg-black text-white p-2  rounded'>02/03/2021</span>
        </td>
        <td className='border-l border-2 border-black'>
            <button className='bg-green-600 rounded mr-2 text-white px-4 py-1'>Details</button>
            <button className='bg-red-700 text-white px-4 py-1 rounded'>Delete</button>
        </td>
    </tr>
    )
}

export default BloodDonated