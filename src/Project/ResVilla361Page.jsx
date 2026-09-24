import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/villa361PDHero20.png'
import img1 from '../../assets/projects/villa361PD1.png'
import img2 from '../../assets/projects/villa361PD2.png'
import img3 from '../../assets/projects/villa361PD3.png'
import img4 from '../../assets/projects/villa361PD4.png'
import img5 from '../../assets/projects/villa361PD5.png'
import img6 from '../../assets/projects/villa361PD6.png'
import img7 from '../../assets/projects/villa361PD7.png'
import img8 from '../../assets/projects/villa361PD8.png'
import img9 from '../../assets/projects/villa361PD9.png'
import img10 from '../../assets/projects/villa361PD10.png'
import img11 from '../../assets/projects/villa361PD11.png'
import img12 from '../../assets/projects/villa361PD12.png'
import img13 from '../../assets/projects/villa361PD13.png'
import img14 from '../../assets/projects/villa361PD14.png'
import img15 from '../../assets/projects/villa361PD15.png'
import img16 from '../../assets/projects/villa361PD16.png'
import img17 from '../../assets/projects/villa361PD17.png'
import img18 from '../../assets/projects/villa361PD18.png'
import img19 from '../../assets/projects/villa361PD19.png'
import img20 from '../../assets/projects/villa361PD20.png'
import img21 from '../../assets/projects/villa361PD21.png'
import img22 from '../../assets/projects/villa361PD22.png'
import img23 from '../../assets/projects/villa361PD23.png'
import img24 from '../../assets/projects/villa361PD24.png'
import img25 from '../../assets/projects/villa361PD25.png'

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
