import Header from '../../components/Header'
import HeaderImage from '../../images/about2.jpg'
import './about.css'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
    It is established in B.S.2067.The main goal of the firm is to provide proper guidance to the farmers for their good agriculture & livestock.Besides,the firm is providing qualitative seeds of grass,grain of livestock ,artificial insemination,fecal test,goat sterilization,treatment of livestock as well as livestock insurance.

This firm is maintained & run by the veterinary professional with an experience of more than decade.This firm is exclusively focused on agriculture,veterinary and its related factors.We give the help & support that is essential for developing agriculture and veterinary.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt='our story'/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
          We started our journey back in B.S. 2067 with a simple goal - to help farmers and animal experts. Our team, with more than ten years of experience, wanted to make a difference. We knew that by providing good advice and the right tools, we could change things for the better. Plus, we have a special place - a veterinary pharmacy - where we can help even more.
           </p>
        </div>
      </div>
    </section>

    <section className="about__vision">
    <div className="container about__vision-container">
          
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
          Our dream goes beyond just doing well; it's about making the future brighter. We imagine farms where people grow things in a smart and caring way. We want to be there for farmers and animal experts, supporting them in all the right ways. We aim to be the friendly guide that helps everyone succeed, including our veterinary pharmacy.
           </p>
          
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt='our vision'/>
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
      <div className="about__section-image">
          <img src={MissionImage} alt='our mission'/>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
          Our mission is like our promise to everyone. We work hard to give great help. We share good seeds, look after animals, and even have a special pharmacy for animals. Our job is to make life better for people who work with animals and farms. We believe in a future where farming and animals thrive, and we're here to help make it happen.
            </p>
        
        </div>
      </div>
    </section>
    </>
  )
}

export default About
