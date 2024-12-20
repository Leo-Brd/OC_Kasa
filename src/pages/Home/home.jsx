import './Home.scss'
import background from '../../assets/images/background.png'
import Card from '../../components/Card/Card';
import accomodations from '../../assets/accomodations.json';

function Home() {   

    return (
        <main id="home">
            <div className='home__banner'>
                <img src={background} alt="Paysage brumeux de côtes océaniques rocheuses " />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            
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