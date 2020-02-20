import { useEffect } from 'react';

export default (...args) => {
  let bool = true;
  let ref = false;
  let style = false;

  args.forEach(arg => {
    if (typeof arg === "boolean") {
      bool = arg;
    } else if (arg.hasOwnProperty("current")) {
      ref = arg;
    } else if (typeof arg == "object") {
      style = arg;
    }
  })
  
  useEffect(() => {

    const target = ref ? ref.current : document.body;

    if (!!target) {
      target.style.overflow = bool ? "hidden" : "";
      if (style) {
        const properties = Object.keys(style);
        properties.forEach((prop)=>{
          target.style[prop] = bool ? style[prop] : "";
        })
      }
      return () => {
        target.style.overflow = "";
        if (style) {
          const properties = Object.keys(style);
          properties.forEach((prop) => {
            target.style[prop] = "";
          })
        }
      };
    }
  }, [bool, target, style]);
}