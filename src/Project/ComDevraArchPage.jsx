import ProjectDetailPage from '../pages/ProjectDetailPage'
import img1 from '../../assets/projects/DevraArchitects.png'
import img2 from '../../assets/projects/DevraArchitects1.png'
import img3 from '../../assets/projects/DevraArchitects2.png'
import img4 from '../../assets/projects/DevraArchitects3.png'
import img5 from '../../assets/projects/DevraArchitects4.png'
import img6 from '../../assets/projects/DevraArchitects5.png'
import img7 from '../../assets/projects/DevraArchitects6.png'

export default function ComDevraArchPage() {
  return (
    <ProjectDetailPage
      backTo="/services/commercial"
      backLabel="Commercial"
      title="Devra Architects"
      location="PH-1 Cassia, New Chandigarh"
      category="Commercial"
      size=""
      year="2025"
      overview="A refined workspace crafted with soft lighting, curved forms, and a calm neutral palette—shaping an environment that feels inviting, efficient, and elevated. Every zone is designed for comfort and flow, offering a modern workplace experience that blends functionality with quiet luxury."
      overview2="From reception to work bays, meeting rooms, and lounges, the interiors express a unified design language of warm textures, seamless lines, and ambient lighting. Thoughtful spatial planning brings clarity and comfort to daily operations, creating a workspace that inspires focus, collaboration, and a sense of effortless sophistication."
      images={[img1, img2, img3, img4, img5, img6, img7]}
    />
  )
}
