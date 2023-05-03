import { useState } from 'react';
import calculate from '../logic/calculate';
import '../App.css';

const Calculator = () => {
  const [state, addNewState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const calc = (event) => {
    const newState = calculate(state, event.target.textContent);
    addNewState(newState);
  };

  return (
    <div className="calculator">
      <input className="input-area" value={state.next || state.total || 0} disabled />
      <div className="row-one">
        <button className="col-one" type="button" value="clear-all" onClick={calc}>AC</button>
        <button className="col-one" type="button" value="plus-minus" onClick={calc}>+/-</button>
        <button className="col-one" type="button" value="modulus" onClick={calc}>%</button>
        <button className="col-one orange" type="button" value="divide" onClick={calc}>÷</button>
      </div>
      <div className="row-two">
        <button className="col-two" type="button" value="7" onClick={calc}>7</button>
        <button className="col-two" type="button" value="8" onClick={calc}>8</button>
        <button className="col-two" type="button" value="9" onClick={calc}>9</button>
        <button className="col-two orange" type="button" value="*" onClick={calc}>x</button>
      </div>
      <div className="row-three">
        <button className="col-three" type="button" value="4" onClick={calc}>4</button>
        <button className="col-three" type="button" value="5" onClick={calc}>5</button>
        <button className="col-three" type="button" value="6" onClick={calc}>6</button>
        <button className="col-three orange" type="button" value="minus" onClick={calc}>-</button>
      </div>
      <div className="row-four">
        <button className="col-four" type="button" value="1" onClick={calc}>1</button>
        <button className="col-four" type="button" value="2" onClick={calc}>2</button>
        <button className="col-four" type="button" value="3" onClick={calc}>3</button>
        <button className="col-four orange" type="button" value="minus" onClick={calc}>+</button>
      </div>
      <div className="row-five">
        <button className="col-five zero" type="button" value="0" onClick={calc}>0</button>
        <button className="col-five" type="button" value="." onClick={calc}>.</button>
        <button className="col-five orange" type="button" value="equal-to" onClick={calc}>=</button>
      </div>
    </div>
  );
};

export default Calculator;