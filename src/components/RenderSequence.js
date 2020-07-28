import React, { Component } from 'react';
import { _env, setEnv } from '../common/contants';

console.log('_env in RenderSequence: ', _env);

class ChildA extends Component {
  componentDidMount() {
    console.log('child a');
  }

  render() {
    return (
      <div>A
        <ChildC />
      </div>
    )
  }
}

class ChildB extends Component {
  componentDidMount() {
    console.log('child b');
  }

  render() {
    return (
      <div>B</div>
    )
  }
}

class ChildC extends Component {
  componentDidMount() {
    console.log('child c');
  }

  render() {
    return (
      <div>C</div>
    )
  }
}

class Container extends Component {
  componentDidMount() {
    console.log('container');
    console.log(_env)
  }
  
  render() {
    return (
      <>
        <ChildA />
        <ChildB />
      </>
    )
  }
}

export default Container;