import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Welcome to first react-express app</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
