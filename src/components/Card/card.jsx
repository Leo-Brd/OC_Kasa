import './card.scss'

function Card({ id, title }) {

    return (
        <article className="card">
            <h2>{title}</h2>
        </article>
    );
}

export default Card;
