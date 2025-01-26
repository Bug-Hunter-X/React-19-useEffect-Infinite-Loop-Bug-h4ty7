```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: Use an external variable or a condition to prevent the infinite loop
    let mounted = true; //Using a mounted flag to handle cleanup
    const interval = setInterval(() => {
      if (mounted) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000); //Update every 1 second

    return () => {
      mounted = false; 
      clearInterval(interval); //Clean up on unmount
    };
  }, []); // Empty dependency array means the effect only runs once

  return <div>Count: {count}</div>;
}

export default MyComponent;
```