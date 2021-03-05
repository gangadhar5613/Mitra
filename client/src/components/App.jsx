<<<<<<< HEAD
import React from "react";
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
      </div>
    );
  }
}

export default App;
=======
import React from "react";
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
      </div>
    );
  }
}

export default App;
>>>>>>> 9b178a01dd66ee7a2051a9dfd71f1c12216ce76f
