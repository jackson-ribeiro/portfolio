import AboutImage from '../../assets/about.jpg';
import './about.css';

const About = ()  => {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_left">
          <div className='about_portrait'>
            <img src = {AboutImage} alt = "" />
          </div>
          <div className="about_right">
            <h2>Sobre Mim</h2>
            <div className="about_cards">

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
