import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    console.log('1. constructor()');
    console.log('  props:', props); // Logging props
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('2. static getDerivedStateFromProps()');
    console.log('  nextProps:', nextProps);
    console.log('  nextState:', nextState);
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
    return null;
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('9. componentDidUpdate()');
    console.log('  prevProps:', prevProps);
    console.log('  prevState:', prevState);
    console.log('  snapshot:', snapshot);
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
        <h1>Name: {this.props.name}</h1> {/* Display the name prop */}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default LifecycleDemo;
