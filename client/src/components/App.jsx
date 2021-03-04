import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
    };
  }

  async componentDidMount() {
    const response = await fetch("/api");
    const { title } = await response.json();
    this.setState({
      title,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
