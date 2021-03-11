import React from 'react'

import {Bar,Line,Pie,Bubble} from '@reactchartjs/react-chart.js'
const rand = () => Math.floor(Math.random() * 255)

class Chart extends React.Component{
    constructor(props){
        super(props)
        this.state={
            chartData:{
                labels: ['Blood Requests','Blood Donated','Funds Raised','Funds Donated'],
                datasets:[
                    {
                        
                        label: 'Number of Requests Raised',
                        backgroundColor: `rgb(255, 0, 0)`,
                        data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
                        borderColor: 'white',
                        borderWidth: 2,
                    },
                ]
            }
        }
    }

    render(){
        return(
            <section>
                <div className='w-96'>
                    <Bar
                     data={this.state.chartData} 
                     width={100} 
                     height={200}
                     options={{
                         maintainAspectRatio:false
                     }}
                      />
                </div>
            </section>
        )
    }
}

export default Chart
