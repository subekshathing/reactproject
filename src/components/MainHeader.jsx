import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'
const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <br/>
        
          <h1>Raksirang Krishi and Pashu firm pvt. ltd.</h1>
          <p>
          "Fostering Agriculture, Nurturing Livestock, Cultivating Prosperity"
          </p>
           <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt='Main Header'/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader