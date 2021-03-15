import React from "react";

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
      <div className="wrap">
        <div className="ques" onClick={this.toggleVisible}>
          {this.props.question}
        </div>
        <div className={`ans ${this.state.isAnsVisible ? "visible" : ""}`}>
          {this.props.answer}
        </div>
      </div>
    );
  }
}

export default FAQs;
