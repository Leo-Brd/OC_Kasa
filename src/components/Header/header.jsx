import './header.scss'
import logo from '../../assets/logoHeader.svg'
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();

    return (
        <header>
            <Link to="/" className='header__logo'>
                <img src={logo} alt="Logo de Kasa"/>
            </Link>

            <nav className='header__nav'>
                <ul>
                    <li>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/About" className={location.pathname === '/About' ? 'active' : ''}>
                            A Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;