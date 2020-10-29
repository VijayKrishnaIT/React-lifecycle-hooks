import React, { Component } from "react";

export default class Child extends React.Component {
  constructor() {
    super();
    console.log("child constructor");
  }
  UNSAFE_componentWillMount() {
    console.log("child componentWillMount");
  }
  render() {
    console.log("child render function");
    return <div>{this.props.key1}</div>;
  }
  componentDidMount() {
    console.log("child componentDidMount");
  }
  UNSAFE_componentWillReceiveProps() {
    console.log("child componentWillReceiveProps");
  }
  shouldComponentUpdate() {
    console.log("child shouldComponentUpdate");
    return true;
  }
}
