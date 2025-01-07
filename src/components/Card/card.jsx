import './Card.scss';
import { Link } from 'react-router-dom';

// The code for the card component
function Card({ id, title, cover }) {
    return (
        <Link to={`/accomodation/${id}`} className="card-link">
            <article className="card">
                <img src={cover} alt="Image de l'appartement"></img>
                <h2>{title}</h2>
            </article>
        </Link>
    );
}

export default Card;
