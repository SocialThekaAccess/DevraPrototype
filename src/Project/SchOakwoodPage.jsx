import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/TheOakwoodSchool.png'
import img1 from '../../assets/projects/sch-jp-1.avif'
import img2 from '../../assets/projects/sch-jp-2.avif'
import img3 from '../../assets/projects/sch-jp-3.avif'

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
      images={[img1, img2, img3]}
    />
  )
}
