import React from "react";
import { numbers } from '../../../data'


//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file


export const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {numbers.map((currentNum, index) => {
        return (
          <button>{currentNum}</button>
        )
      })}
    </div>
  );
};


