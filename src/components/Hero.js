import sketch from '../img/sketch.avif'
import '../styles/components/Hero.css'


const Hero = () => {
  return (
    <header className="Hero">
        <div className="hero__title">
            <h1>Learn Sketch everywhere</h1>
            <h2>Create interactive and realistic design with the best digital product in the market. Ideal for designers who want unleash their skills.</h2>
            <a href="https://cyrilgouv.com" target="__blank" rel="noopener noreferrer">Discover for Free</a>
        </div>

        <div className="hero__img">
            <img src={ sketch } alt="Sketch App from sketch.com" />
        </div>
    </header>
  )
}

export default Hero