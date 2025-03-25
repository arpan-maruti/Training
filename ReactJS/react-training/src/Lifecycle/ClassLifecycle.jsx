import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');
    console.log('  props:', props);
    this.state = {
      count: 0,
      prevName: props.name, 
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('2. static getDerivedStateFromProps()');
    console.log('  nextProps:', nextProps);
    console.log('  prevState:', prevState);

    if (nextProps.name !== prevState.prevName) {
      return { prevName: nextProps.name }; 
    }
    return null;
  }

  componentDidMount() {
    console.log('4. componentDidMount()');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('6. shouldComponentUpdate()');
    console.log('  nextProps:', nextProps);
    console.log('  nextState:', nextState);
    return true; 
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('8. getSnapshotBeforeUpdate()');
    console.log('  prevProps:', prevProps);
    console.log('  prevState:', prevState);
    

    return { prevCount: prevState.count, prevName: prevProps.name };
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('9. componentDidUpdate()');
    console.log('  prevProps:', prevProps);
    console.log('  prevState:', prevState);
    console.log('  snapshot:', snapshot);

    if (snapshot) {
      console.log(`Previous count was ${snapshot.prevCount}, new count is ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('10. componentWillUnmount()');
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('3. render()');
    return (
      <div>
        <h1>Name: {this.props.name}</h1> 
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
