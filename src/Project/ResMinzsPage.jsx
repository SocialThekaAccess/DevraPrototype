import ProjectDetailPage from '../pages/ProjectDetailPage'
import img1 from '../../assets/projects/TheMinzHero.png'
import img2 from '../../assets/projects/TheMinz1.png'
import img3 from '../../assets/projects/TheMinz2.png'
import img4 from '../../assets/projects/TheMinz3.png'
import img5 from '../../assets/projects/TheMinz4.png'
import img6 from '../../assets/projects/TheMinz5.png'
import img7 from '../../assets/projects/TheMinz6.png'
import img8 from '../../assets/projects/TheMinz7.png'
import img9 from '../../assets/projects/TheMinz8.png'

export default function ResMinzsPage({ onNavigate, onSelectProject }) {
  return (
    <ProjectDetailPage
      onNavigate={onNavigate}
      onSelectProject={onSelectProject}
      backTo="/services/residential"
      backLabel="Residential"
      title="The Minz's"
      location="PH-3 Cassia, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2024"
      overview="A warm contemporary home defined by its pitched roofline, clean geometry, and tropical landscape setting. Natural materials, deep overhangs, and generous glazing create a balanced façade — modern in expression yet grounded in earthy simplicity."
      overview2="Inside, the home blends artistry and comfort — textured walls, crafted partitions, and soft lighting shaping calm, expressive spaces. Every room reflects a warm, personal character, bringing together elegance, detail, and an inviting lived-in charm."
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
    />
  )
}
