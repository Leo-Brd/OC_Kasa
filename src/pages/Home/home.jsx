import { useState, useEffect } from 'react';
import './home.scss'
import background from '../../assets/images/background.png'
import Card from '../../components/Card/card';

function Home() {   
    const [accomodations, setAccomodations] = useState([]); 

    useEffect(() => {
        const storedAccomodations = localStorage.getItem('accomodations');
        if (storedAccomodations) {
            setAccomodations(JSON.parse(storedAccomodations));
        }
    }, []);

    return (
        <main>
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
                    />
                ))}
            </section>
        </main>
    );
}

export default Home;