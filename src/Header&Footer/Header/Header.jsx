// Header.js
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './header.css';
import Logo from '../../assets/logo.png';

function Header() {
  const [isSticky, setSticky] = useState(false);
  const [isShrunk, setShrunk] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setSticky(currentScrollY > 0);

    // Adjust the threshold as needed
    setShrunk(currentScrollY > 50);
  };

  const handleSearchClick = () => {
    setSearchOpen(!isSearchOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`all ${isSticky ? 'sticky' : ''} ${isShrunk ? 'shrink' : ''}`}>
      <div className='container'>
        <div className='navbar navbar-expand-lg font-weight-bold '>
          <div className="container-fluid ml-3">
            <ul className='navbar-nav logos'>
              <li>
                <NavLink to="/">
                  <img src={Logo} alt="Logo" />
                </NavLink>
              </li>
            </ul>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className='navbar-nav all-nav'>
                <li className='nav-item'>
                  <NavLink to="/" exact className='nav-link'>
                    Home
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/services" className='nav-link'>
                    Services
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/products" className='nav-link'>
                    Products
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/about-us" className='nav-link'>
                    About Us
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/contact-us" className='nav-link'>
                    Contact Us
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink to="/blog" className='nav-link'>
                    Export
                  </NavLink>
                </li>
                <li className='nav-item'>
                  <span className='nav-link' onClick={handleSearchClick}>
                     <i className="fa-solid fa-magnifying-glass"></i>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {isSearchOpen && (
          <div className="search-box">
           
            <input type="text" placeholder="Search..." className="search-input"/>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
