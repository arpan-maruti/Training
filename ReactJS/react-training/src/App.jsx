
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import JSXExample from './JSX/JSXExample'
import ImportExport from './ImportExport/ImportExport' // Assuming you have this component
import StateAndProps from './stateAndProps/StateAndProps'
import ListAndKeys from './listAndKeys/ListAndKeys'
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
              <Link to="/importexport">Import-Export</Link>
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
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<h1>React Example</h1>} />
        <Route path="/importexport" element={<ImportExport />} />
        <Route path="/jsxexample" element={<JSXExample />} />
        <Route path="/stateandprops" element={<StateAndProps />} />
        <Route path="/listandkeys" element={<ListAndKeys />} />
      </Routes>
    </Router>
  )
}

export default App
