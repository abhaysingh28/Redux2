import React from 'react';
import { memo } from 'react';
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../store/slices/CountSlice';

const Child = () => {
    const dispatch = useDispatch();
    const increments = () => {
        dispatch(increment());
    }
    const decrements = () => {
        dispatch(decrement());
    }
    return (
        <>
            <h1>child</h1>
            <button onClick={() => increments()}>+</button>
            <button onClick={() => decrements()}>-</button>
        </>
    );
}

export default memo(Child);
