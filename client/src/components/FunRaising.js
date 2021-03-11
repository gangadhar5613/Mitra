import React from "react";
import EventSection from "./EventSection";
import Update from "./Update";

class FunRaising extends React.Component {

  constructor(props){
    super(props)
    this.state= {
      images : ['https://images.unsplash.com/photo-1597764690523-15bea4c581c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHBhdGllbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1576765607924-3f7b8410a787?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHBhdGllbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60','https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF0aWVudHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'],
     imageId:0
    }

  }

  componentDidUpdate(){
    console.log('hello')
    setInterval(() => {
         if((this.state.images.length ) < this.state.imageId){
             this.setState((prevState) => {
                    return{
                        imageId:0
                    }
             })
         }else{
            this.setState((prevState) => {
                return{
                    imageId:prevState.imageId+1
                }
         })
         }
    }, 7000);
}
  render(){
    return (
      <div className='py-20'>
        <div className="flex">
          <EventSection imgUrl={this.state.images[this.state.imageId]} />
          <Update />
        </div>
        <div>{/* <FundsGallery /> */}</div>
      </div>
    )
  }
 
}

export default FunRaising;
