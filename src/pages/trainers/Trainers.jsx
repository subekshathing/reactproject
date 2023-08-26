import Header from '../../components/Header'
import HeaderImage from '../../images/about2.jpg'
import {trainers} from '../../data'
import { FaLinkedinIn} from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './trainers.css'
const Trainers = () => {
  return (
  <>
  <Header title="Our Members" image={HeaderImage}>
  At Raksirang Krishi and Pashu frim pvt. ltd., we're a dedicated team of professionals passionate about advancing agriculture and livestock health through cutting-edge pharmacy and related services. Our mission is to empower farmers and ranchers with the tools and knowledge they need to thrive in a sustainable and responsible manner.

  </Header>
  <section className="trainers">
    <div className="container trainers__container">
      {
        trainers.map(({id, image, name, job, socials})=>{
         return <Trainer key={id} image={image} name={name} job={job} socials={
            [
              {icon: <AiFillInstagram/>,link: socials[0]},
              {icon: <AiOutlineTwitter/>,link: socials[1]},
              {icon: <FaFacebookF/>,link: socials[2]},
              {icon: <FaLinkedinIn/>,link: socials[3]}
            ]
            }>

          </Trainer>
        })
      }
    </div>
  </section>
  </>
  )
}

export default Trainers