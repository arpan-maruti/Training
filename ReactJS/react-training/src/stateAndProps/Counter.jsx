export default function Counter({ count, handleCount, children, color="red"}) {
    return (
      <>
        <div style={{color:color, border:"1px solid green"}}>
           {children}
        </div>
        
        <hr />
        <h1>Count: {count}</h1>
        {
          count === 0 ? <div>we are at 0</div> :
          count === 1 ? <div>we are at 1</div> :
          count === 2 ? <div>we are at 2</div> :
          count === 3 ? <div>we are at 3</div> :
          <div>count more than 3</div>
        }
        <button onClick={() => handleCount(count + 1)}>Increment Count</button>
      </>
    );
  }
  