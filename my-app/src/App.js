import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1 className='text-info bg-light text-center p-4'>Welcome to Redux</h1>
        <div className='container'>
          <h2 className='text-center mt-5 text-light bg-dark p-4 border rounded'>Increment/Decrement counter</h2>
          <h4 className='text-center mt-4 text-primary'><i>Using React and Redux</i></h4>
          <div className='quantity text-center bg-light text-primary mt-5 p-4 border rounded border-primary'>
            <a className='quantity-minus mr-3' title='Decrement' onClick={ () => dispatch(decNumber())}><span className='bg-danger text-white pr-3 pl-3 pb-1 pt-1' >-</span></a>
            <input className='quantity-input' type="text" value={myState}></input>
            <a className='quantity-plus ml-3' title='Increment' onClick={ () => dispatch(incNumber(5))}><span className='bg-primary text-white pr-3 pl-3 pb-1 pt-1'>+</span></a>
          </div>
        </div>
      </div>
    </>
    );
}
 
export default App;