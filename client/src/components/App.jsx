import React from "react";
import Register from './auth/Register';
import Header from "./Header";
import Footer from "./Footer";

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
