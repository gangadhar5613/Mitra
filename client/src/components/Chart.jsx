import React from 'react';

import { Bar } from '@reactchartjs/react-chart.js';
// const rand = () => Math.floor(Math.random() * 255)

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		chartData: {
			labels: ["Blood Requests", "Blood Donated", "Request Sent"],
			datasets: [
				{
					label: "Number of Requests Raised",
					backgroundColor: `rgb(255, 0, 0)`,
					data: [props.raisedRequests, props.donated, props.sendedDonateRequest],
					borderColor: "white",
					borderWidth: 2,
				},
			],
		},
	};
  }

  render () {
    return (
      <section>
        <h2 className='text-center text-2xl mb-5 text-red-800'>Live status of all your requests</h2>
        <div className='w-96'>
          <Bar
            data={this.state.chartData}
            width={100}
            height={300}
            options={{
              maintainAspectRatio: false
            }}
          />
        </div>
      </section>
    );
  }
}

export default Chart;
