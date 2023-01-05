import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function useCustomHook (initializer, ComponentName) {
  const [Count, setCount] = useState(initializer)

  function resetCounter () {
    setCount(Count + 1)
  }
  useEffect(() => {
    alert(`Button of ${ComponentName} is clicked ${Count} times`)
  },[Count, ComponentName]
  );

  return resetCounter;
}

export default useCustomHook;
