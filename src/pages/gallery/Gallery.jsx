import Header from '../../components/Header'
import HeaderImage from '../../images/about2.jpg'

import './gallery.css'
const Gallery = () => {
  const galleryLength=15;
  const images=[]
  for(let i=1;i<=galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }


  return (
  <>
  <Header title="Our Gallery" image={HeaderImage}>
  The gallery of photos showcases the heart and soul of our journey. From vibrant, thriving crops to healthy, happy animals, each image tells a story of our commitment to excellence in agriculture and veterinary care. It's a visual journey through our dedication to sustainable practices, the quality of our products, and the wellbeing of both farmers and livestock. Explore these snapshots to see the essence of what we do, captured in every frame.
  </Header>
    <section className="gallery">
      <div className="container gallery__container">
        {
          images.map((image,index) => {
            return <article key={index}>
              <img src={image} alt={`gallery ${index + 1}`}/>
            </article>
          })
        }
      </div>
    </section>
  </>
  )
}

export default Gallery