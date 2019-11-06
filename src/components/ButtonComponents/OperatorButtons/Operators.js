import React from "react";
import {operators} from '../../../data'

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  return (
    <div className='operator-buttons'>
      {operators.map((currentOperator, index) => {
        return (
          <button>{currentOperator.char}</button>
        )
      })}
    </div>
  )}

export default Operators