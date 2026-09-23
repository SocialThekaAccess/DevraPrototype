import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/MaisonElan1.png'
import img2 from '../../assets/projects/MaisonElan2.png'

export default function ResMaisonElanPage() {
  return (
    <ProjectDetailPage
      backTo="/services/residential"
      backLabel="Residential"
      title="Maison Élan"
      location="Omaxe, New Chandigarh"
      category="Residential"
      size=""
      year="2025"
      overview="A classical residential masterpiece where timeless European elegance meets refined contemporary living. Maison Élan is defined by ornate detailing, grand proportions, and a warm, gracious character that feels both stately and deeply personal."
      heroImage={heroImg}
      heroObjectPosition="center center"
      images={[heroImg, img2]}
    />
  )
}
