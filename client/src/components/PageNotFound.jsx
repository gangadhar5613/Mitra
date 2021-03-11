import React from 'react'
import PageNotFoundImg from '../../public/images/404.png'


function PageNotFound(props){
    return(
        <section className='py-20 flex flex-col items-center justify-center'>
              <div className='mt-20'>
                  <img className=' w-96 h-96' src={PageNotFoundImg} alt='Page not found' ></img>
              </div>
        </section>
    )
}


export default PageNotFound