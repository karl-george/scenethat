import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFilter } from 'react-icons/bs';
import Sidebar from '../Sidebar/Sidebar';
import logo from '../../assets/scenethat-logo.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <nav>
        <div className='container'>
          <div className='nav__wrapper'>
            <Link to='/'>
              <img src={logo} className='nav__logo' />
            </Link>
            <button className='nav__filter' onClick={() => setToggleMenu(true)}>
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
        {toggleMenu && <Sidebar />}
      </nav>
    </header>
  );
};

export default Navbar;
