import './Home.scss';
import background from '../../assets/images/background.png';
import Card from '../../components/Card/Card';
import Banner from '../../components/Banner/Banner'
import apartments from '../../assets/apartments.json';

function Home() {   

    return (
        <main id="home">
            <Banner 
                background={background}
                alt= "Paysage brumeux de côtes océaniques rocheuses"
                text= "Chez vous, partout et ailleurs"
            />
            
            <section className='home__grid'>
                {apartments.map((apartment) => (
                    <Card 
                        key={apartment.id} 
                        id={apartment.id} 
                        title={apartment.title}
                        cover={apartment.cover}
                    />
                ))}
            </section>
        </main>
    );
}

export default Home;