import './App.css';
import Screen from './Components/Screen'
import Button from './Components/Button';
import ClearButton from './Components/ClearButton';
import CalculatorLogo from './Image/Calculator logo.png';
import { useState } from 'react';
import {evaluate } from 'mathjs';
function App() {

  const [input, setInput] = useState<string>('');

  const addInput = (value:string) => {
    setInput(input + value);
  }

  const result = () => {
    if(input){
      setInput(evaluate(input));
    }
    else{
      alert("Input values to calculate");
    }
  }

  return (
    <div className='App'>
    <div className='calculator-logo-container'>
      <h1>Calculadora!</h1>
      <img src={CalculatorLogo} className='calculator-logo' alt='Calculator logo' />
    </div>

    <div className='main-container'>
    <Screen input= {input}/>
      <div className='row'>
        <Button handleClic={addInput}>1</Button>
        <Button handleClic={addInput}>2</Button>
        <Button handleClic={addInput}>3</Button>
        <Button handleClic={addInput}>+</Button>
      </div>
      <div className='row'>
        <Button handleClic={addInput}>4</Button>
        <Button handleClic={addInput}>5</Button>
        <Button handleClic={addInput}>6</Button>
        <Button handleClic={addInput}>-</Button>
      </div>
      <div className='row'>
        <Button handleClic={addInput}>7</Button>
        <Button handleClic={addInput}>8</Button>
        <Button handleClic={addInput}>9</Button>
        <Button handleClic={addInput}>*</Button>
      </div>
      <div className='row'>
        <Button handleClic={result}>=</Button>
        <Button handleClic={addInput}>0</Button>
        <Button handleClic={addInput}>.</Button>
        <Button handleClic={addInput}>/</Button>
      </div>
      <div className='row'>
        <ClearButton handleClic={() => setInput('')}>Clear</ClearButton>
      </div>
    </div>
  </div>
  );
}

export default App;
