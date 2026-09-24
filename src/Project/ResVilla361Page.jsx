import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/villa361PDHero20.webp'
import img1 from '../../assets/projects/villa361PD1.webp'
import img2 from '../../assets/projects/villa361PD2.webp'
import img3 from '../../assets/projects/villa361PD3.webp'
import img4 from '../../assets/projects/villa361PD4.webp'
import img5 from '../../assets/projects/villa361PD5.webp'
import img6 from '../../assets/projects/villa361PD6.webp'
import img7 from '../../assets/projects/villa361PD7.webp'
import img8 from '../../assets/projects/villa361PD8.webp'
import img9 from '../../assets/projects/villa361PD9.webp'
import img10 from '../../assets/projects/villa361PD10.webp'
import img11 from '../../assets/projects/villa361PD11.webp'
import img12 from '../../assets/projects/villa361PD12.webp'
import img13 from '../../assets/projects/villa361PD13.webp'
import img14 from '../../assets/projects/villa361PD14.webp'
import img15 from '../../assets/projects/villa361PD15.webp'
import img16 from '../../assets/projects/villa361PD16.webp'
import img17 from '../../assets/projects/villa361PD17.webp'
import img18 from '../../assets/projects/villa361PD18.webp'
import img19 from '../../assets/projects/villa361PD19.webp'
import img20 from '../../assets/projects/villa361PD20.webp'
import img21 from '../../assets/projects/villa361PD21.webp'
import img22 from '../../assets/projects/villa361PD22.webp'
import img23 from '../../assets/projects/villa361PD23.webp'
import img24 from '../../assets/projects/villa361PD24.webp'
import img25 from '../../assets/projects/villa361PD25.webp'

export default function ResVilla361Page() {
  return (
    <ProjectDetailPage
      backTo="/services/residential"
      backLabel="Residential"
      title="Villa 361"
      location="PH-3 Cassia, New Chandigarh"
      category="Residential"
      size="500 SQYD"
      year="2021"
      overview="This home blends warm stone, clean modern lines, and generous glazing to create a calm, contemporary atmosphere. Inside, earthy materials and soft lighting shape inviting spaces that feel both refined and effortlessly livable."
      overview2="Defined by crisp architectural geometry and natural textures, the residence offers a seamless transition from sunlit exteriors to warm, understated interiors — balancing modern sophistication with a quiet sense of comfort."
      heroImage={heroImg}
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25]}
    />
  )
}
