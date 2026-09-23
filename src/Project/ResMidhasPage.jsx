import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/MIDHAJiHome.png'
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
      overview="A warm contemporary home defined by its pitched roofline, clean geometry, and tropical landscape setting. Natural materials, deep overhangs, and generous glazing create a balanced façade — modern in expression yet grounded in earthy simplicity."
      overview2="Inside, the home blends artistry and comfort — textured walls, crafted partitions, and soft lighting shaping calm, expressive spaces. Every room reflects a warm, personal character, bringing together elegance, detail, and an inviting lived-in charm."
      heroImage={heroImg}
      heroAspectRatio="1548 / 1016"
      heroObjectPosition="center center"
      images={[img1, img2, img3]}
    />
  )
}
