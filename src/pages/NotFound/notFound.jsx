import './NotFound.scss'
import { Link } from 'react-router-dom';

// The code for the 404 error page component
function notFound() {
    return (
        <main id="notFound">
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='notFound__link'>Retourner sur la page d'accueil</Link>
        </main>
    );
}

export default notFound;