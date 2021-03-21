import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState (false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick();
    const showButton = () => {
        if(window.innerWidth <= 960) {
        setButton(false)
        } else {
        setButton(true)
        }
    };
    useEffect(() => {
        showButton();
    }, [])
    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    {/* <i class="fas fa-bold"/>eny Ntb  */}
                </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className="nav-item">
                    <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                        About Me
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to ='/skills' className='nav-links' onClick={closeMobileMenu}>
                        Skills
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to ='/gallery' className='nav-links' onClick={closeMobileMenu}>
                        Gallery
                    </Link>
                </li>   
            </ul>
            {button && <Button buttonStyle='btn--outline' style={{'white-space' : `nowrap`}}> Contact </Button>}
            </div>
        </nav>
    </>
    );
}

export default Navbar;