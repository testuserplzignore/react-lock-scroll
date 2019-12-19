This project was bootstrapped with [Create React Library](https://github.com/dimimikadze/create-react-library).

# Install

`npm i react-lock-scroll`

es6
`import lockScroll from "react-lock-scroll;"`

es5
`const lockScroll = require("react-lock-scroll");`

# Usage

## default

By default, react-lock-scroll will lock the document body when the component where it is called is mounted, and unlock the document body when that component is dismounted.

ex:
```
export default (props) => {
  lockScroll();
  return (
    <div>I lock the bodys scroll when mounted</div>
```

## First argument: toggle (default=true)

lockScroll can also be passed a boolean state value, and will lock the screen on true and unlock it on false.

ex:
```
export default (props) => {
  [toggle, setToggle] = useState(false);
  lockScroll(toggle)
  return <button onClick={()=>setToggle(!toggle}>Lock Scrolling</button>
}
```

## Second argument: target (default=false)

LockScroll can be passed the ref of a target div to lock scrolling on. This also supports passing of a boolean state value for a toggle, however if you simply want it to lock on mount/dismount, pass `true` as the first argument. Note that this will likely require the use of [forwardRef](https://reactjs.org/docs/forwarding-refs.html) to construct this component if the DOM node is outside of the component where lockScroll is called.

ex.
```
export default (props) => {
  const ref = useRef();
  const [lock, setLock] = useState(false)
  lockScroll(lock, ref);
  
  return (
    <div className="divThatScrolls" ref={ref}>
      <div>
        <button onClick={() => setLock(!lock)}>Lock</button>
      </div>
    </div>
  )
};
```
## last argument: styles default={false}

include a valid style object with styles you want to be applied to the locked div when it's locked. Useful for adjusting for scroll bars.

```
export default (props) => {
  lockScroll(true, false, {margin: "15px"});
  
  return (
    <div>
      I lock when mounted, and add 15px of margin to the body
    </div>
  )
};
```