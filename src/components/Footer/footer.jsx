import './Footer.scss'
import logo from '../../assets/images/logoFooter.png'
import { Link } from 'react-router-dom';

// The code for the footer component
function Footer() {
    return (
        <footer>
            <Link to="/">
                <img src={logo} alt="Logo de Kasa"/>
            </Link>

            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;