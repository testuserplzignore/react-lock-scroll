import React, {useEffect} from 'react';

export default (bool = true, ref = false) => {
  const target = ref ? ref.current : document.body;
  

  useEffect(() => {
    if (!!target) {
      target.style.overflow = bool ? "hidden" : "unset";
      return () => {
        target.style.overflow = "unset";
      };
    }
  }, [bool, target]);
}