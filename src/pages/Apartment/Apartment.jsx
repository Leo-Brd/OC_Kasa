import './Apartment.scss';
import apartments from '../../assets/apartments.json';
import Slideshow from '../../components/Slideshow/Slideshow';
import Collapse from '../../components/Collapse/Collapse';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

function Apartment() {
    const { id } = useParams();
    const navigate = useNavigate();
    const apartment = apartments.find((acc) => acc.id === id);

    useEffect(() => {
        if (!apartment) {
            navigate('*', { replace: true });
        }
    }, [apartment, navigate]);

    if (!apartment) {
        return null;
    }

    return (
        <main id="apartment">
            <Slideshow pictures={apartment.pictures} />

            <section className="apartment__infos">
                <div className="apartment__details">
                    <div className="apartment__left">
                        <h1>{apartment.title}</h1>
                        <p>{apartment.location}</p>
                        <div className="apartment__tags">
                            {apartment.tags.map((tag, index) => {
                                return <span key={index}>{tag}</span>;
                            })}
                        </div>
                    </div>

                    <div className="apartment__right">
                        <div className="apartment__host">
                            <p>{apartment.host.name}</p>
                            <img src={apartment.host.picture} alt={apartment.host.name} />
                        </div>
                        <div className="apartment__rating">
                            {[...Array(5)].map((_, index) => (
                                <FontAwesomeIcon
                                    key={index}
                                    icon={faStar}
                                    className={index < apartment.rating ? 'active' : 'inactive'}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="apartment__collapses">
                    <Collapse title="Description">
                        <p className="collapse__text">{apartment.description}</p>
                    </Collapse>

                    <Collapse title="Équipements">
                        <ul>
                            {apartment.equipments.map((equipement, index) => {
                                return <li key={index}>{equipement}</li>;
                            })}
                        </ul>
                    </Collapse>
                </div>
            </section>
        </main>
    );
}

export default Apartment;
