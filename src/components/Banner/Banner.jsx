import './Banner.scss'

// The code for the banner component
function Banner( {background, alt, text} ) {
    return(
        <div className='home__banner'>
            <img src={background} alt={alt} />
            <h1>{text}</h1>
        </div>
    )
}

export default Banner;