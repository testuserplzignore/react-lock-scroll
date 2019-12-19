import React, { useState, useRef } from 'react';
import lockScroll from "../lib"

const LockDiv = () => {
  lockScroll();
  return (
    <div>
      locked
    </div>
  )
}


const App = () => {
  const ref = useRef();
  const [lock, setLock] = useState(false)
  lockScroll(lock);
  
  return (
    <div ref={ref}>
      <div style={{ height: "300vh" }}>
        <button onClick={() => setLock(!lock)}>Lock</button>
        {/* {lock &&
        <LockDiv />
      } */}
      </div>
    </div>
  )
};

export default App;
