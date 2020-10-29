import React from "react";
import Child from "./Child";
export default class App extends React.Component {
  state = {
    name: "react",
  };
  //constructor will execute at booting time of component --constructor will execute only once
  //define state in constructor
  //js is schronous - code will execute line by line
  constructor() {
    console.log("parent constructor");
    super();
    this.state = {
      name: "reactjs",
    };
  }
  //After constructor component componentWillMount will execute
  componentWillMount() {
    //componentWillMount() will execute after constructor
    //componentWillMount() will execute only once
    //in general we will do the initial modifications in state
    //in general we will set global parameters like   width, height
    console.log("componentWillMount");
    if (window.innerWidth < 600) {
      this.setState({
        innerWidth: window.innerWidth,
      });
    }
  }
  render() {
    //after componentWillMount() automatically render() function will execute
    //render() is mandatory lifecycle hook(main lifecycle hook)
    //in general, we will place presentation logic in render()
    //when ever change detected in state or props automatically this lifecycle hooks will execute
    console.log("parent render function");
    return (
      <div>
        {this.state.name}
        <br></br>
        <br></br>
        inner width: {this.state.innerWidth}
        <br></br>
        <br></br>
        <Child key1={this.state.name} />
        <br></br>
        <br></br>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }

  changeState = () => {
    this.setState({
      name: "Vuejs",
    });
  };

  componentDidMount() {
    //after render function immediately componentDidMount() life cycle hook will execute
    //in general we will make asynchronous calls in ComponentWillMount()
    //this is recommended state to change the state of component
    console.log("parent componentDidMount");
  }

  UNSAFE_componentWillReceiveProps() {
    //when component will recieve props from redux
    console.log("parent componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    //if we want to update the state return true else false
    console.log("parent shouldComponentUpdate");
    return true;
  }

  //killing methods
  UNSAFE_componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    //if we integrate third party elements
    //plugin logic will write here
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillMount");
  }
}
