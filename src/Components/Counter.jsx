import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../store/slices/CountSlice';
import Child from './Child';

const Counter = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => {
        return state.counter
    })
    
    console.log(data);
    return (
        <div>
            <h1>Counter</h1>
            <h1>{data?.value}</h1>
            <Child />
        </div>
    );
}

export default Counter;
