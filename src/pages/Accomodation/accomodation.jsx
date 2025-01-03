import './Accomodation.scss';
import accomodations from '../../assets/accomodations.json';
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from '../../components/Collapse/Collapse';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function Accomodation() {
    const { id } = useParams();
    const navigate = useNavigate();
    const accomodation = accomodations.find((acc) => acc.id === id);

    useEffect(() => {
        if (!accomodation) {
            navigate('*', { replace: true }); // Redirect to 404
        }
    }, [accomodation, navigate]);

    if (!accomodation) {
        return null;
    }

    return (
        <main id="accomodation">
            <Slideshow pictures={accomodation.pictures} />

            <section className="accomodation__infos">
                <div className="accomodation__details">
                    <div className="accomodation__left">
                        <h1>{accomodation.title}</h1>
                        <p>{accomodation.location}</p>
                        <div className="accomodation__tags">
                            {accomodation.tags.map((tag, index) => {
                                return <span key={index}>{tag}</span>;
                            })}
                        </div>
                    </div>

                    <div className="accomodation__right">
                        <div className="accomodation__host">
                            <p>{accomodation.host.name}</p>
                            <img src={accomodation.host.picture} alt={accomodation.host.name} />
                        </div>
                        <div className="accomodation__rating">
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    className={index < accomodation.rating ? 'active' : 'inactive'}
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
                                return <li key={index}>{equipement}</li>;
                            })}
                        </ul>
                    </Collapse>
                </div>
            </section>
        </main>
    );
}

export default Accomodation;
