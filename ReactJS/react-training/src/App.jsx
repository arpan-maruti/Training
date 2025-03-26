import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JSXExample from './JSX/JSXExample';
import StateAndProps from './stateAndProps/StateAndProps';
import ListAndKeys from './listAndKeys/ListAndKeys';
import ClassLifecycle from './Lifecycle/ClassLifecycle';
import FunctionalLifecycle from './Lifecycle/FunctionalLifeCycle';
import Header from './Header';
import UseStateHook from './hooks/UseState';
import UseEffect from './hooks/UseEffect';
import UseContext from './hooks/UseContext';
import UseRef from './hooks/UseRef';
import UseReducer from './hooks/UseReducer';
import UseId from './hooks/UseId';
import  UseLayoutEffect from './hooks/useLayoutEffect';
import UseMemo from './hooks/UseMemo';
import UseCallback from './hooks/UseCallback';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>React Examples</h1>} />
        <Route path="/jsxexample" element={<JSXExample />} />
        <Route path="/stateandprops" element={<StateAndProps />} />
        <Route path="/listandkeys" element={<ListAndKeys />} />
        <Route path="/classlifecycle" element={<ClassLifecycle name="arpan" />} />
        <Route path="/functionlifecycle" element={<FunctionalLifecycle />} />
        <Route path="/hooks/usestate" element={<UseStateHook />} />
        <Route path="/hooks/useeffect" element={<UseEffect />} />
        <Route path="/hooks/usecontext" element={<UseContext />} />
        <Route path="/hooks/useref" element={<UseRef />} />
        <Route path="/hooks/usereducer" element={<UseReducer />} />
        <Route path="/hooks/useid" element={<UseId />} />
        <Route path="/hooks/useLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/hooks/useMemo" element={<UseMemo />} />
        <Route path="/hooks/useCallback" element={<UseCallback />} />
        <Route path="*" element={<h1> No page Found </h1>} />
      </Routes>
    </Router>
  );
}

export default App;
