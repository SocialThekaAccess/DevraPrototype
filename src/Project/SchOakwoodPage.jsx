import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/OAKWODDSCHOOL1.png'
import img2 from '../../assets/projects/OAKWODDSCHOOL2.png'
import img3 from '../../assets/projects/OAKWODDSCHOOL3.png'

export default function SchOakwoodPage() {
  return (
    <ProjectDetailPage
      backTo="/services/schools"
      backLabel="Schools"
      title="The Oakwood School"
      location="Punjab"
      category="Schools"
      size="24,000 sq. ft."
      year="2020"
      overview="An institutional environment that redefines classroom layouts by surrounding them with interactive courtyard corridors, passive light scoops, and robust, maintenance-free finishes."
      heroImage={heroImg}
      heroAspectRatio="16 / 9"
      heroObjectPosition="center center"
      images={[heroImg, img2, img3]}
    />
  )
}
