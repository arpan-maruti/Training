export default function Counter({ count, handleCount, children, color="red"}) {
    return (
      <>
        <div style={{color:color, border:"1px solid green"}}>
           {children}
        </div>
        
        <hr />
        <h1>Count: {count}</h1>
        <button onClick={() => handleCount(count + 1)}>Increment Count</button>
      </>
    );
  }
  