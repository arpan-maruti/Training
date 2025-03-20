import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import JSXExample from './JSX/JSXExample'
import ImportExport from './ImportExport/ImportExport' // Assuming you have this component
import State from './state/State'
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
              <Link to="/state">State</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<h1>React Example</h1>} />
        <Route path="/importexport" element={<ImportExport />} />
        <Route path="/jsxexample" element={<JSXExample />} />
        <Route path="/state" element={<State />} />
      </Routes>
    </Router>
  )
}

export default App
