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
    let { storedValue, displayValue, selectedOperator } = this.state;
    displayValue = Number(displayValue);
    storedValue = Number(storedValue);
    switch (selectedOperator) {
      case '+':
        displayValue = storedValue + displayValue;
        break;
      case '-':
        displayValue = storedValue - displayValue;
        break;
      case 'x':
        displayValue = storedValue * displayValue;
        break;
      case '/':
        displayValue = storedValue / displayValue;
        break;
      default:
        displayValue = '0';
    }
    displayValue = displayValue.toString();
    if (displayValue === "NaN" || displayValue === "Infinity") displayValue = "0";
    storedValue = displayValue;
    selectedOperator = '';
    this.setState({ displayValue, storedValue, selectedOperator });
  }

  setOperator = value => {
    let { selectedOperator, storedValue, displayValue } = this.state;
    console.log('set operation');
    if (selectedOperator === '') {
      storedValue = displayValue
      selectedOperator = value;
      displayValue = '0';
    } else {
      selectedOperator = value;
    }
    this.setState({ selectedOperator, storedValue, displayValue });
  }

  updateDisplay = value => {
    let { displayValue } = this.state;
    console.log('update display');
    if (value === '.' && displayValue.includes('.')) value = '';
    if (value === 'ce') {
      displayValue = displayValue.substring(0,displayValue.length - 1);
      if (displayValue === '') displayValue = '0';
    } else {
      displayValue === '0' ? displayValue = value : displayValue += value;
    }
    this.setState({ displayValue });
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