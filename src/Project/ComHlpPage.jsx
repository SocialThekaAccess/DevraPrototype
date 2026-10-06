import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/HPL.webp'
import img1 from '../../assets/projects/HCL1.webp'
import img2 from '../../assets/projects/HCL2.webp'
import img3 from '../../assets/projects/HCL3.webp'
import img4 from '../../assets/projects/hlp1.png'
import img5 from '../../assets/projects/hlp2.png'
import img6 from '../../assets/projects/hlp3.png'
import img7 from '../../assets/projects/hlp5.png'
import img8 from '../../assets/projects/hlp6.png'
import img9 from '../../assets/projects/hlp7.png'
import img10 from '../../assets/projects/hlp8.png'
import img11 from '../../assets/projects/hlp9.png'
import img12 from '../../assets/projects/hlp10.png'
import img13 from '../../assets/projects/hlp11.png'
import img14 from '../../assets/projects/hlp12.png'

export default function ComHlpPage() {
  return (
    <ProjectDetailPage
      backTo="/services/commercial"
      backLabel="Commercial"
      title="HLP Project"
      location="Punjab"
      category="Commercial"
      size="TBD"
      year="2024"
      overview="A contemporary commercial project blending functional efficiency with refined architectural expression."
      heroImage={heroImg}
      heroObjectPosition="center center"
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]}
    />
  )
}
