import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/THEMidhasHero.png'
import img1 from '../../assets/projects/MIDHAJI1.png'
import img2 from '../../assets/projects/MIDHAJI2.png'
import img3 from '../../assets/projects/MIDHAJI3.png'

export default function ResMidhasPage() {
  return (
    <ProjectDetailPage
      backTo="/services/residential"
      backLabel="Residential"
      title="The Midha's"
      location="PH-3 Cassia, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2025"
      overview="A bold contemporary residence defined by its dark material palette, clean geometry, and warm illuminated volumes. The façade balances privacy and openness, with deep frames, lush landscaping, and a sculpted balcony that adds depth, character, and a distinctly modern edge."
      heroImage={heroImg}
      heroFit="contain"
      heroObjectPosition="center center"
      images={[img1, img2, img3]}
    />
  )
}
