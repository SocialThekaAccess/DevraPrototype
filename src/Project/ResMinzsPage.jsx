import ProjectDetailPage from '../pages/ProjectDetailPage'
import img1 from '../../assets/projects/res-minzs.webp'
import img2 from '../../assets/projects/res-minzs-2.webp'
import img3 from '../../assets/projects/res-minzs-3.webp'
import img4 from '../../assets/projects/res-minzs-4.webp'
import img5 from '../../assets/projects/res-minzs-5.webp'
import img6 from '../../assets/projects/res-minzs-6.webp'
import img7 from '../../assets/projects/res-minzs-7.webp'
import img8 from '../../assets/projects/res-minzs-8.webp'
import img9 from '../../assets/projects/res-minzs-9.webp'

export default function ResMinzsPage() {
  return (
    <ProjectDetailPage
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
