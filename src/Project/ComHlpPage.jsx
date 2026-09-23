import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/HPL.png'

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
      heroAspectRatio="1540 / 1021"
      heroObjectPosition="center center"
      images={[heroImg]}
    />
  )
}
