import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/Lt.ColSupreetSinghHome.png'
import img1 from '../../assets/projects/Lt.ColSupreetSingh.png'
import img2 from '../../assets/projects/Lt.ColSupreetSingh1.png'

export default function ResSupreetPage() {
  return (
    <ProjectDetailPage
      backTo="/services/residential"
      backLabel="Residential"
      title="Col. Supreet Ji"
      location="Eco City, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2025"
      overview="A sleek modern villa defined by strong horizontal lines, deep overhangs, and a warm palette of wood, glass, and stone. The façade sits low and confident, blending minimal geometry with rich natural textures to create a refined, contemporary presence surrounded by greenery."
      heroImage={heroImg}
      heroAspectRatio="1565 / 1005"
      heroObjectPosition="center center"
      images={[img1, img2]}
    />
  )
}
