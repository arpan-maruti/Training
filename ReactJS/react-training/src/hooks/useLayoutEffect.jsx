import React, {
  useEffect,
  useLayoutEffect,
  useInsertionEffect,
  useState,
  useRef,
} from "react";

export default function UseEffectVsUseLayoutEffectVsUseInsertionEffect() {
  const [toggle, setToggle] = useState(false);

  const effectRef = useRef();
  const layoutEffectRef = useRef();
  const insertionEffectRef = useRef();

  useInsertionEffect(() => {
    console.log(
      `useInsertionEffect executed at: ${performance.now().toFixed(2)}ms`
    );
  }, [toggle]);

  useLayoutEffect(() => {
    if (layoutEffectRef.current) {
      layoutEffectRef.current.style.paddingTop = "20px";
      console.log(
        `useLayoutEffect executed at: ${performance.now().toFixed(2)}ms`
      );
    }
  }, [toggle]);

  useEffect(() => {
    if (effectRef.current) {
      effectRef.current.style.paddingTop = "20px";
      console.log(`useEffect executed at: ${performance.now().toFixed(2)}ms`);
    }
  }, [toggle]);

  return (
    <>
      <h1>useEffect vs useLayoutEffect vs useInsertionEffect</h1>
      <hr />
      <button onClick={() => setToggle(!toggle)}>Toggle Box</button>

      {toggle && (
        <div
          ref={insertionEffectRef}
          style={{
            backgroundColor: "green",
            padding: "10px",
            margin: "10px",
          }}
        >
          Box (useInsertionEffect)
        </div>
      )}

      {toggle && (
        <div
          ref={effectRef}
          style={{
            backgroundColor: "lightcoral",
            padding: "10px",
            margin: "10px",
          }}
        >
          Box (useEffect)
        </div>
      )}

      {toggle && (
        <div
          ref={layoutEffectRef}
          style={{
            backgroundColor: "blue",
            padding: "10px",
            margin: "10px",
          }}
        >
          Box (useLayoutEffect)
        </div>
      )}
    </>
  );
}
