import HeaderImage from '../../assets/header.jpg'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img src = {HeaderImage} alt="Header" />
        </div>
        <h3>Jackson Ribeiro</h3>
        <p>
          Me envie os detalhes do seu projeto e vamos conversar sobre como
          podemos trabalhar juntos.
        </p>
        <div className="header_cta">
          <a href="#contato" className='btn primary'>Contato</a>
          <a href="#portfolio" className='btn light'>Meus Projetos</a>
        </div>
        <div className="header_socials">
          {
            data.map(item => <a key={item.id} href={item.link} target= "_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header
