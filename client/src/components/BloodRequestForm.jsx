import React from 'react'
import requestBloodImg from '../../public/images/requestBlood.png'

class BloodRequestForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            step: 4,
            bloodType: '',
            bloodGroup: '',
            reason: '',
            hospital: '',
            medicalReport: '',
            description: '',
            searchingHospital: false,
            hospitalsList: null,
            lat: '',
            lng: '',
            suggestedHospital: '',
            suggestedHospitalsList: null,
            finalHospitalSelection:''
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

    fetchingLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
              this.setState({
                  lat: position.coords.latitude,
                  lng:position.coords.longitude
            })
          }, () => {
            console.log("not supported")
          })
        }
    
      };

    handleInput = (event) => {
        let { name, value } = event.target
        
        switch (name) {
            case 'bloodType':
                this.setState({
                      bloodType:value
                  })
                break;
            case 'bloodGroup':
                this.setState({
                    bloodGroup: value
                })
                break;
            case 'reason':
                this.setState({
                    reason: value
                })
                break;
            case 'hospital':
                this.fetchingLocation()
                this.setState({
                    hospital: value
                })
                let location = {
                    "location": {
                        "place": value,
                        "lat": this.state.lat,
                        "lng": this.state.lng
                    }
                }
                fetch(`/api/v1/location/search`, { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(location) })
                    .then((res) => res.json())
                    .then((data) => this.setState({
                     suggestedHospitalsList:data.predictions
                }))
                
                
                break;
            case 'medicalReport':
                this.setState({
                    medicalReport: value
                })
                break;
            case 'description':
                this.setState({
                    description:value
                })
                break
            case 'finalHospitalSelection':
                console.log('hello')
                this.setState({
                    finalHospitalSelection:value
                })
                break
            default:
                break;
        }
    }


    handleHospitalSelect = () => {

        
    }

    render(){
        return(
            <section className='pt-20  container  h-screen w-full mx-auto flex items-center  justify-center'>
                <div className=' shadow-2xl flex justify-center relative left-20 p-10 w-full flex-1   bg-red-600  '>
                       <form className='flex flex-col' >
                           <div className='text-center py-5'>
                               <h2 className='text-2xl text-yellow-200 font-bold'>Blood Request Form</h2>
                           </div>
                           <div className={this.state.step == 1 ? 'flex flex-col' : 'hidden'}>
                               <label className='text-xl font-semibold mb-1 text-white'>Do you need whole blood or platelets?</label>
                               <select onChange={this.handleInput} name='bloodType' value={this.state.bloodType} className='py-1 my-3 border-2 border-yellow-500 outline-none' placeholder='Choose request type'>
                               <option placeholder='enter'>Choose blood type</option>
                                   <option>Whole Blood</option>
                                   <option>Platelets</option>
                                   <option>Double Red Cell</option>
                                   <option>AB Plasma</option>
                               </select>
                           </div>
                           <div className={this.state.step == 2 ? 'flex flex-col' : 'hidden'}>
                               <label className='text-xl font-semibold mb-1 text-white'>What blood group do you need ?</label>
                               <select onChange={this.handleInput}  name='bloodGroup' value={this.state.bloodGroup} className='py-1 my-3 border-2 border-yellow-500 outline-none' placeholder='Pick a blood group'>
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
                               <select onChange={this.handleInput}  name='reason' value={this.state.reason} required className='py-1 my-3 border-2 border-yellow-500 outline-none' placeholder='Choose request type'>
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
                            <input onChange={this.handleInput} name='hospital' value={this.state.hospital} required className='py-1 my-1 border-2 border-yellow-500 outline-none' type='text' name='hospital' placeholder='Search hospital name and select'></input>
                            <div onChange={this.handleHospitalSelect}  className={this.state.hospital ? 'w-96 h-full px-4 py-2 shadow-md my-2': 'hidden'}>
                                <span className='text-md text-white'>Select hospital from this list</span>   
                                <select onChange={this.handleInput} name='finalHospitalSelection'>
                                    <option>{this.state.hospital}</option>
                                    {
                                        !this.state.suggestedHospitalsList ? null :
                                            this.state.suggestedHospitalsList.map((hospital) =>
                                            {
                                                return <option >{hospital.description }</option>
                                            })
                                    }
                                    </select>
                               </div>
                           </div>
                           <div className={this.state.step == 5 ? 'flex flex-col' : 'hidden'}>
                               <label className='text-xl font-semibold mb-1 text-white'>Please Upload medical report which is assested by hospital</label>
                               <input onChange={this.handleInput}  name='medicalReport' value={this.state.medicalReport} required className='py-1 my-3 border-2 border-yellow-500 outline-none' type='file' name='hospital' placeholder='Search hospital name and select'></input>
                            </div>
                           <div className={this.state.step == 6 ? 'flex flex-col' : 'hidden'}>
                               <label className='text-xl font-semibold mb-1 text-white'>Write a message to donor about the requriement briefly</label>
                               <textarea onChange={this.handleInput} rows='10' cols='20'  name='description' value={this.state.description} required className='py-1 my-3 border-2 border-yellow-500 outline-none' placeholder='Explain donors why you need blood and how urgent' name='description'></textarea>
                           </div>
                           <div className='flex flex-row my-2 justify-between items-center' >
                             <button onClick={this.handleBackStep} id='1' className={(this.state.step > 1) ? 'bg-yellow-500 text-white  px-6 py-2' : 'hidden'}><i className="fas text-3xl text-white fa-arrow-left"></i></button>                         
                            <button onClick={this.handleStep} id='1' className='bg-yellow-500 text-white px-6 py-2'>{ this.state.step == 6 ? 'Submit' : <i className="fas text-3xl text-white fa-arrow-right"></i>}</button>
                           </div>
                           <div className='text-center  my-3'>
                               <span className='text-2xl text-white font-light'>{this.state.step}/6</span>
                           </div>
                       </form>
                </div>
                <div className=' flex-1 flex justify-center mx-10 '>
                    <img className=' w-96 h-96' src={requestBloodImg} alt='request blood illustration' ></img>
                </div>
            </section>
        )
    }
}

export default BloodRequestForm