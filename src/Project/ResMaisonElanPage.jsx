import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../public/assets/projects/MaisonElanHeroimage.png'
import heroImgMobile from '../../assets/projects/MaisonElanMobilerisponsive.png'
import img2 from '../../assets/projects/MaisonElan2.webp'

export default function ResMaisonElanPage({ onNavigate, onSelectProject }) {
  return (
    <ProjectDetailPage
      onNavigate={onNavigate}
      onSelectProject={onSelectProject}
      backTo="/services/residential"
      backLabel="Residential"
      title="Maison Élan"
      location="Omaxe, New Chandigarh"
      category="Residential"
      size=""
      year="2025"
      overview="A classical residential masterpiece where timeless European elegance meets refined contemporary living. Maison Élan is defined by ornate detailing, grand proportions, and a warm, gracious character that feels both stately and deeply personal."
      heroImage={heroImg}
      heroImageMobile={heroImgMobile}
      heroObjectPosition="center center"
      images={[heroImg, img2]}
    />
  )
}
