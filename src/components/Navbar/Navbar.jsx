import { Link } from 'react-router-dom';
import { BsFilter } from 'react-icons/bs';
import logo from '../../assets/scenethat-logo.png';
import './navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='container'>
          <div className='nav__wrapper'>
            <Link to='/'>
              <img src={logo} className='nav__logo' />
            </Link>
            <button className='nav__filter'>
              <BsFilter fontSize={16} />
              Filter
            </button>
            <input
              type='text'
              placeholder='Search...'
              className='nav__search'
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
