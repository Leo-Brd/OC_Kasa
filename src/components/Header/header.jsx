import './header.scss'
import logo from '../../assets/logoHeader.svg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/" className='header__logo'>
                <img src={logo} alt="Logo de Kasa"/>
            </Link>

            <nav className='header__nav'>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/About">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;