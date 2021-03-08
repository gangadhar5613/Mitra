import React from "react";
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      picList: ["blood.jpg"],
    };
  }
  onClickNext = () => {
    if (this.state.index + 1 === this.state.picList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };
  onClickPrevious = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.picList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <img src={this.state.picList[this.state.index]} />
          <button onClick={this.onClickPrevious}> Previous </button>
          <button onClick={this.onClickNext}> Next </button>
        </div>
      </div>
    );
  }
}

export default Gallery;
