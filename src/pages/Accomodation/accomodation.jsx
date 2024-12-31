import './Accomodation.scss'
import accomodations from '../../assets/accomodations.json';
import Carousel from '../../components/Carousel/Carousel'
import Collapse from '../../components/Collapse/Collapse';
import activeStar from '../../assets/images/icons/active_star.svg';
import inactiveStar from '../../assets/images/icons/inactive_star.svg';
import { useParams } from 'react-router-dom';

function Accomodation() {
    const { id } = useParams();
    const accomodation = accomodations.find((acc) => acc.id === id);

    if (!accomodation) {
        return <div>Accommodation not found</div>;
    }

    return (
        
        <main id="accomodation">
            <Carousel pictures={accomodation.pictures} />

            <section className="accomodation__infos">

                <div className="accomodation__details">
                    <div className="accomodation__left">
                        <h1>{accomodation.title}</h1>
                        <p>{accomodation.location}</p>
                        <div className="accomodation__tags">
                            {accomodation.tags.map((tag, index) => {
                                return <span key={index}>{tag}</span>
                            })}
                        </div>
                    </div>

                    <div className="accomodation__right">
                        <div className="accomodation__host">
                            <p>{accomodation.host.name}</p>
                            <img src={accomodation.host.picture} alt={accomodation.host.name}/>
                        </div>   
                        <div className="accomodation__rating">
                            {[...Array(5)].map((_, index) => (
                                <img
                                    key={index}
                                    src={index < accomodation.rating ? activeStar : inactiveStar}
                                    alt={index < accomodation.rating ? "Étoile active" : "Étoile inactive"}
                                />
                            ))}
                        </div>

                    </div>

                </div>

                <div className="accomodation__collapses">
                    <Collapse title="Description">
                        <p>{accomodation.description}</p>
                    </Collapse>

                    <Collapse title="Équipements">
                        <ul>
                            {accomodation.equipments.map((equipement, index) => {
                                return <li key={index}>{equipement}</li>
                            })}
                        </ul>
                    </Collapse>
                </div>
            </section>
        </main>
    )          
}

export default Accomodation;