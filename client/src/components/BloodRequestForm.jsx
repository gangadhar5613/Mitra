import React from 'react'

class BloodRequestForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
               step:1
        }

    }

    handleStep = (event) => {
        event.preventDefault();
        if(this.state.step <6){
            this.setState((prevState) => {
                return{
                    step:prevState.step+1
                }
           })
        } 
    }

    handleBackStep = (event) => {
        event.preventDefault();
        if(this.state.step > 0){
            this.setState((prevState) => {
                return{
                    step:prevState.step - 1
                }
           })
        } 
    }

    render(){
        return(
            <section className='pt-20 absolute container  h-screen w-full  flex items-center z-9  top-0 '>
                 <div className=' shadow-2xl p-10 bg-red-600  '>
                       <form className='flex flex-col' >
                           <div className='text-center py-5'>
                               <h2 className='text-2xl text-yellow-200 font-bold'>Blood Request Form</h2>
                           </div>
                           <div className={this.state.step == 1 ? 'flex flex-col' : 'hidden'}>
                               <label className='text-xl font-semibold mb-1 text-white'>Do you need whole blood or platelets?</label>
                               <select className='py-1 my-3 border-2 border-yellow-500 outline-none' placeholder='Choose request type'>
                               <option placeholder='enter'>Choose blood type</option>
                                   <option>Whole Blood</option>
                                   <option>Platelets</option>
                                   <option>Double Red Cell</option>
                                   <option>AB Plasma</option>
                               </select>
                           </div>
                           <div className={this.state.step == 2 ? 'flex flex-col' : 'hidden'}>
                               <label className='text-xl font-semibold mb-1 text-white'>What blood group do you need ?</label>
                               <select className='py-1 my-3 border-2 border-yellow-500 outline-none' placeholder='Pick a blood group'>
                                   <option>A+</option>
                                   <option>A-</option>
                                   <option>B+</option>
                                   <option>B-</option>
                                   <option>AB+</option>
                                   <option>AB-</option>
                                   <option>O+</option>
                                   <option>O-</option>
                                   <option>OH+</option>
                               </select>
                           </div>
                           <div className={this.state.step == 3 ? 'flex flex-col' : 'hidden'}>
                               <label className='text-xl font-semibold mb-1 text-white'>What is the reason of this blood request ?</label>
                               <select required className='py-1 my-3 border-2 border-yellow-500 outline-none' placeholder='Choose request type'>
                                   <option>Accident</option>
                                   <option>Surgery</option>
                                   <option>Pregnancy</option>
                                   <option>Cancer</option>
                                   <option>Transplant</option>
                                   <option>Thalassemla</option>
                                   <option>Low HB (Hemoglobin)</option>
                               </select>
                           </div>
                           <div className={this.state.step == 4 ? 'flex flex-col' : 'hidden'}>
                               <label className='text-xl font-semibold mb-1 text-white'>At which hospital you need a blood donor ?</label>
                               <input required className='py-1 my-3 border-2 border-yellow-500 outline-none' type='text' name='hospital' placeholder='Search hospital name and select'></input>
                           </div>
                           <div className={this.state.step == 5 ? 'flex flex-col' : 'hidden'}>
                               <label className='text-xl font-semibold mb-1 text-white'>Please Upload medical report which is assested by hospital</label>
                               <input required className='py-1 my-3 border-2 border-yellow-500 outline-none' type='file' name='hospital' placeholder='Search hospital name and select'></input>
                           </div>
                           <div className={this.state.step == 6 ? 'flex flex-col' : 'hidden'}>
                               <label className='text-xl font-semibold mb-1 text-white'>Write a message to donor about the requriement briefly</label>
                               <textarea required className='py-1 my-3 border-2 border-yellow-500 outline-none' placeholder='Explain donors why you need blood and how urgent' name='description'></textarea>
                           </div>
                           <div className='flex flex-row justify-between items-center' >
                             <button onClick={this.handleBackStep} id='1' className={(this.state.step > 1) ? 'bg-yellow-500 text-white px-6 py-2' : 'hidden'}><i className="fas text-3xl text-white fa-arrow-left"></i></button>                         
                               <button onClick={this.handleStep} id='1' className='bg-yellow-500 text-white px-6 py-2'><i className="fas text-3xl text-white fa-arrow-right"></i></button>
                           </div>
                           <div className='text-center  my-3'>
                               <span className='text-2xl text-white font-light'>{this.state.step}/6</span>
                           </div>
                       </form>
                 </div>
            </section>
        )
    }
}

export default BloodRequestForm