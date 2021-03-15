import React from "react";

const data = [
  {
    question: "What is Mitra ?",
    answer:
      "Mitra is an online platform to raise blood request locally and those who are interested to donate they can send request and can send locally.Many can find blood after a couple of hours ,but our platform will make donors available within a mean time,so that no life will loose.",
  },
  {
    question: "How can I raise the blood request ?",
    answer:
      "For raising blood request you need to register in our platform with all required information,after successful verification,you will get a dashboard with request option.",
  },
  {
    question: "How can I donate blood?",
    answer:
      "For donating blood you need to register with our platform with all required information.And user have to submit medical/blood report ,after successful verification,you can check all blood request near by your location in the feed section and can click on donate button.",
  },
];

class FAQs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAnsVisible: false,
    };
  }
  toggleVisible = () => {
    this.setState({
      isAnsVisible: !this.state.isAnsVisible,
    });
  };
  render() {
    return (
      <div className="pt-8">
        <div className="App">
          {data.map((item) => (
            <div className="wrap">
              <div
                className="ques flex justify-between items-center"
                onClick={this.toggleVisible}
              >
                <p>{item.question}</p>
                <i
                  className={
                    this.state.isAnsVisible === true
                      ? "far fa-hand-point-up"
                      : "far fa-hand-point-down"
                  }
                ></i>
              </div>
              <div
                className={`ans ${this.state.isAnsVisible ? "visible" : ""}`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FAQs;
