import * as React from 'react';
// import React, { Component } from 'react';

export interface CounterProps {
}

export interface CounterState {
  counter: number;
}

class Counter extends React.Component<CounterProps, CounterState> {

  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    console.log('increment');
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>counter at: {this.state.counter}</h1>
        <button onClick={this.incrementCounter}>Click</button>
      </div>
    );
  }
}

export default Counter;