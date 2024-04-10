// var arrayOfNames = [];
// arrayOfNames[0] = 'Ron Franklin';
// arrayOfNames.push('Sam Costa');
// arrayOfNames[2] = 'Amber Hudson';
// console.log(arrayOfNames);
// // when running, compiles to JS: 
// // var arrayOfNames = [];
// // arrayOfNames[0] = 'Ron Franklin';
// // arrayOfNames.push('Sam Costa');
// // arrayOfNames[2] = 'Amber Hudson';
// // console.log(arrayOfNames);


// PresentationalComponent.js
import React, { Component } from 'react';

class PresentationalComponent extends Component {
  render() {
    const { message } = this.props;
    return (
      <div>
        <h1>Presentational Component</h1>
        <p>{message}</p>
      </div>
    );
  }
}

export default PresentationalComponent;


// ContainerComponent.js
import React, { Component } from 'react';
import PresentationalComponent from './PresentationalComponent';

class ContainerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from Container!'
    };
  }

  handleButtonClick = () => {
    this.setState({ message: 'Updated message from Container!' });
  };

  render() {
    return (
      <div>
        <h1>Container Component</h1>
        <button onClick={this.handleButtonClick}>Update Message</button>
        <PresentationalComponent message={this.state.message} />
      </div>
    );
  }
}

export default ContainerComponent;
