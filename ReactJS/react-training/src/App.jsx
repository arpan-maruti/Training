
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import JSXExample from './JSX/JSXExample'
import StateAndProps from './stateAndProps/StateAndProps'
import ListAndKeys from './listAndKeys/ListAndKeys'
import ClassLifecycle from './Lifecycle/ClassLifecycle'
import FunctionalLifecycle from './Lifecycle/FunctionalLifeCycle'
function App() {

  return (
    <Router>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jsxexample">JSX</Link>
            </li>
            <li>
              <Link to="/stateandprops">State & Props</Link>
            </li>
            <li>
              <Link to="/listandkeys">List & Keys</Link>
            </li>
            <li>
              <Link to="/classlifecycle">Lifecycle-Class</Link>
            </li>
            <li>
              <Link to="/functionlifecycle">Lifecycle-Function</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<h1>React Example</h1>} />
        <Route path="/jsxexample" element={<JSXExample />} />
        <Route path="/stateandprops" element={<StateAndProps />} />
        <Route path="/listandkeys" element={<ListAndKeys />} />
        <Route path="/classlifecycle" element={<ClassLifecycle name="arpan" />} />
        <Route path="/functionlifecycle" element={<FunctionalLifecycle />} />
      </Routes>
    </Router>
  )
}

export default App
