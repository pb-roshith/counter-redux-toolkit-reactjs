import React from 'react'
import { increment, decrement, reset, incrementByAmount } from './counterslice'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);
    const add = Number(incrementAmount) || 0
    const resetall = () => {
      setIncrementAmount(0)
      dispatch(reset())
    }
  return (
    <>
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={resetall}>reset</button>
            <input type="text" value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)}/>
            <button onClick={() => dispatch(incrementByAmount(add))}>add amount</button>
        </div>
    </>
  )
}

export default Counter