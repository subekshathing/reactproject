import {Link} from 'react-router-dom'
import Logo from '../images/logo3.png'
import { FaLinkedinIn} from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'


const Footer = () => {
  return (
    
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt='Footer Logo'/>
                </Link>
                <p>
                We are a trusted leader in agriculture, livestock, and veterinary services. With a team of dedicated professionals, we provide a comprehensive range of products and expert guidance to support the well-being of animals and the success of farming communities. Our commitment to quality, sustainability, and ethical practices drives everything we do. Whether you're a farmer, livestock professional, or involved in agriculture, we're here to empower your journey towards prosperity and sustainability.
                </p>
                 <div className="footer__socials">
                    <a href='https://linkden.com/' target='_blank' rel='noreferrer nooopener'><FaLinkedinIn/></a>
                    <a href='https://facebook.com/' target='_blank' rel='noreferrer nooopener'><FaFacebookF/></a>
                    <a href='https://twitter.com/' target='_blank' rel='noreferrer nooopener'><AiOutlineTwitter/></a>
                    <a href='https://instagram.com/' target='_blank' rel='noreferrer nooopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="plans">Plans</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Case studies</Link>
                <Link to="/s">Events</Link>
                <Link to="/s">Communities</Link>
                <Link to="/s">FAQs</Link>
            </article>
            <article>
                <Link to="/contact">Contact us</Link>
                <Link to="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022nSUBE &copy; All rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer