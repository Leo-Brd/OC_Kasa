import './Banner.scss'

function Banner( {background, text} ) {
    return(
        <div className='home__banner'>
            <img src={background} alt="Paysage brumeux de côtes océaniques rocheuses " />
            <h1>{text}</h1>
        </div>
    )
}

export default Banner;