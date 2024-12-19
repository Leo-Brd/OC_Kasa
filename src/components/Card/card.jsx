import './card.scss';
import { Link } from 'react-router-dom';

function Card({ id, title }) {
    return (
        <Link to={`/accomodation/${id}`} className="card-link">
            <article className="card">
                <h2>{title}</h2>
            </article>
        </Link>
    );
}

export default Card;
