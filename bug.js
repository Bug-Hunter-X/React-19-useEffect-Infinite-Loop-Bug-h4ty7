```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: This will cause an infinite loop
    setCount(count + 1);
  }, [count]); // count is included in the dependency array, causing the infinite loop

  return <div>Count: {count}</div>;
}

export default MyComponent;
```