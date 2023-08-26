import Header from '../../components/Header'
import HeaderImage from '../../images/about2.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'
const Contact = () => {
  return (
<>
<Header title="Get In Touch" image={HeaderImage}>
<h3>with Raksirang Krishi and Pashu Firm pvt. ltd.:</h3>
<br/>
<h4>Company Name: <br/>Raksirang Krishi and Pashu Firm pvt. ltd.</h4>
<h4>Address:<br/>Manahari-7,Ramantar,Mane Dada</h4>
<h4>Phone Number:<br/> 9855070362</h4>
<h4>Email Address: <br/>raksirangkrishiandpashufirm@gmail.com</h4>

</Header>
<br/>
{/* <p class="animated-text">You can visit our company through this google map.</p> */}

{/* <div class="animated-text">You can visit our company through this Google Map.</div> */}
<div class="moving-text">
    You can visit our company through this Google Map. 
</div>

<br/>
<div class="mapouter">
  <div class="gmap_canvas">
    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1739&amp;height=432&amp;hl=en&amp;q=raksirang krishi and pashu firm Pvt ltd, Ramauli-7, Manahari 44106ford&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" title="Google Map of Our Location">
    </iframe>
  <a href="https://gachanox.io/">
    Gacha Nox Download</a></div>
    </div>
<section className="contact">
  <div className="container contact__container">
    <div className="contact__wrapper">
      <a href="mailto:ssss@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail/></a>
      <a href="http://m.me/ernest_achiever" target="_blank" rel="noopener noreferrer"><BsMessenger/></a>
      <a href="https://wa.me/+977" target="_blank" rel="noopener noreferrer"><IoLogoWhatsapp/></a>
    </div>
  </div>
</section>
</>
  )
}

export default Contact