import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

class Calculator extends Component {

  state= {
    displayValue: '0',
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'],
    operators: ['/', 'x', '-', '+'],
    selectedOperator: '',
    storedValue: '',
  }

  callOperator = () => {
    console.log('call operation');
  }

  setOperator = () => {
    console.log('set operation');
  }

  updateDisplay = () => {
    console.log('update display');
  }

  render = () => {
    const { displayValue, numbers, operators } = this.state;
    const { callOperator, setOperator, updateDisplay } = this;
    return (
      <div className="calculator-container">
        <Display displayValue={displayValue}/>
        <Keypad 
          callOperator={callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={setOperator}
          updateDisplay={updateDisplay}
        />
      </div>
    );
  }

}

export default Calculator;