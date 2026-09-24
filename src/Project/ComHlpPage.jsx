import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/HPL.webp'
import img1 from '../../assets/projects/HCL1.webp'
import img2 from '../../assets/projects/HCL2.webp'
import img3 from '../../assets/projects/HCL3.webp'

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
      images={[img1, img2, img3]}
    />
  )
}
