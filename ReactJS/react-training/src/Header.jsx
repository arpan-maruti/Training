import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
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
          <li 
            className="dropdown" 
            onMouseEnter={() => setShowDropdown(true)} 
            onMouseLeave={() => setShowDropdown(false)}
          >
            <Link to="#">Hooks ▼</Link>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li><Link to="/hooks/usestate">useState</Link></li>
                <li><Link to="/hooks/useeffect">useEffect</Link></li>
                <li><Link to="/hooks/usecontext">useContext</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
