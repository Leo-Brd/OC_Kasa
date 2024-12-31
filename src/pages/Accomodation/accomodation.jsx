import './Accomodation.scss'
import accomodations from '../../assets/accomodations.json';
import Carousel from '../../components/Carousel/Carousel'
import Collapse from '../../components/Collapse/Collapse';
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
                <div>

                </div>
                <div>
                    <Collapse title={accomodation.title}>
                        <p></p>
                    </Collapse>

                    <Collapse title={accomodation.title}>
                        <p></p>
                    </Collapse>
                </div>
            </section>
        </main>
    )          
}

export default Accomodation;