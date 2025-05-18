import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>ERP POC</h2>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/hr">HR</Link></li>
        <li><Link to="/cms">CMS</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
