import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import FunRaising from "./FunRaising";

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
        <FunRaising />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
