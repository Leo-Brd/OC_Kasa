import './Home.scss'
import background from '../../assets/images/background.png'
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner'
import accomodations from '../../assets/accomodations.json';

function Home() {   

    return (
        <main id="home">
            <Banner 
                background={background}
                alt= "Paysage brumeux de côtes océaniques rocheuses"
                text= "Chez vous, partout et ailleurs"
            />
            
            <section className='home__grid'>
                {accomodations.map((accomodation) => (
                    <Card 
                        key={accomodation.id} 
                        id={accomodation.id} 
                        title={accomodation.title}
                        cover={accomodation.cover}
                    />
                ))}
            </section>
        </main>
    );
}

export default Home;