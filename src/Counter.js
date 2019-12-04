import React, { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  function handleDecrease() {
    setCount(count - 1)
  }

  function handleIncrease() {
    setCount(count + 1)
  }

  function handleReset() {
    setCount(0)
  }

  return (
    <div>
      <p>A single independent React component using just one React hook 👇</p>
      <div>
        <p>{count}</p>
        <button onClick={handleDecrease}>-1</button>
        <button onClick={handleIncrease}>+1</button>
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
