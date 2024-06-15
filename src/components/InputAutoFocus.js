import { useRef, useEffect } from "react";

const InputAutoFocus = () => {
  const ref = useRef(null);

  useEffect(() => {
    console.log(ref);
    ref.current.focus();
    ref.current.addEventListener("mouseover", (e) => {
      e.target.style.border = "4px solid red";
    });
  }, []);

  return <input ref={ref} />;
};

export default InputAutoFocus;
