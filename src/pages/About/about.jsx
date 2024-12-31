import background from '../../assets/images/background_2.png'
import Banner from '../../components/Banner/Banner'
import Collapse from '../../components/Collapse/Collapse';
import './About.scss'

function About() {
    return (
        <main id="about">
            <Banner
                background={background}
                alt= "Vallée de montagnes enneigées"
                text = ""
            />

            <div className='about__collapses'>
                <Collapse title="Fiabilité">
                    <p className="collapse__text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations
                        sont régulièrement vérifiées par nos équipes.</p>
                </Collapse>

                <Collapse title="Respect">
                    <p className="collapse__text">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </Collapse>

                <Collapse title="Service">
                    <p className="collapse__text">La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires
                        , soit empreinte de respect et de bienveillance.</p>
                </Collapse>

                <Collapse title="Sécurité">
                    <p className="collapse__text">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également 
                        des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </Collapse>
            </div>
        </main>
    );
}

export default About;