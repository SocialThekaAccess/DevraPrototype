import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/TheKangs2.png'

export default function ResKangsPage() {
  return (
    <ProjectDetailPage
      backTo="/services/residential"
      backLabel="Residential"
      title="The Kangs"
      location="Punjab Border"
      category="Residential"
      size="8,000 sq. ft."
      year="2023"
      overview="A sprawling luxury farmhouse designed as a series of connected low-slung pavilions that frame views of the surrounding organic farms and lush landscapes."
      heroImage={heroImg}
      heroAspectRatio="16 / 9"
      heroObjectPosition="center center"
      images={[heroImg]}
    />
  )
}
