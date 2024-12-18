
function Card({ id, title }) {
    // On peut maintenant accéder à id et title via props

    return (
        <div>
            {console.log(id, title)}
            <h2>{title}</h2>
        </div>
    );
}

export default Card;
