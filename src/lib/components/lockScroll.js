import { useEffect } from 'react';

export default (bool = true, ref = false, style = false) => {
  const target = ref ? ref.current : document.body;
  
  useEffect(() => {
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