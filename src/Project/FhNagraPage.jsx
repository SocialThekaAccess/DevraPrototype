import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '/assets/projects/NagraFarmhouseHeroImage.jpg'
import img2 from '../../assets/projects/fh-nagra-2.avif'
import img3 from '../../assets/projects/fh-nagra-3.avif'

export default function FhNagraPage({ onNavigate, onSelectProject }) {
  return (
    <ProjectDetailPage
      onNavigate={onNavigate}
      onSelectProject={onSelectProject}
      backTo="/services/farm-houses"
      backLabel="Farm Houses"
      title="Nagra Farmhouse"
      location="Punjab"
      category="Farm Houses"
      size=""
      year="2023"
      overview="A serene farmhouse retreat that blends contemporary design with natural surroundings."
      heroImage={heroImg}
      heroAspectRatio="16 / 9"
      heroObjectPosition="center 30%"
      images={[heroImg, img2, img3]}
    />
  )
}
