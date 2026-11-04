import ProjectDetailPage from '../pages/ProjectDetailPage'
import img2 from '../../assets/projects/fh-nagra-2.avif'
import img3 from '../../assets/projects/fh-nagra-3.avif'

// Import statement se better reliability in production
import heroImgJpg from '/assets/projects/NagraFarmhouseHeroImage.jpg'
import heroImgMobileJpg from '/assets/projects/NagraFarmhouseMobilerisponsiveimage.png'

const heroImg = heroImgJpg
const heroImgMobile = heroImgMobileJpg

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
      heroImageMobile={heroImgMobile}
      heroAspectRatio="16 / 9"
      heroObjectPosition="center 0%"
      images={[heroImg, img2, img3]}
    />
  )
}