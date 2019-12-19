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
  lockScroll(lock, ref, {backgroundColor: "blue", margin: "200px"});
  
  return (
    <div className="divThatScrolls" ref={ref}>
      <div style={{height: "300vh"}}>
        <button onClick={() => setLock(!lock)}>Lock</button>
      </div>
    </div>
  )
};

export default App;
