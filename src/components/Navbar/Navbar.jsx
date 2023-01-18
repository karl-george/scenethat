import { Link } from 'react-router-dom';
import logo from '../../assets/scenethat-logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='container'>
          <Link to='/'>
            <img src={logo} className='nav__logo' />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
