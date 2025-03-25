import { useContext, createContext } from "react";

const UserContext = createContext();

export default function UseContext() {
  const name = "arpan";

  return(
  <>
    <UserContext.Provider value={name}>
      <A />
    </UserContext.Provider>
  </>
  );
}

function A() {
  return (
    <>
      <B />
    </>
  );
}

function B() {
  const name = useContext(UserContext);
  return(
   <>User Name: {name}</>
  );
  
}
