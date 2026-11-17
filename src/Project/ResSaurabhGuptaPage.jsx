import ProjectDetailPage from '../pages/ProjectDetailPage'
import img1 from '../../assets/projects/SaurabhGuptaResidentialHero.png'
import img2 from '../../assets/projects/SaurabhGuptaResidential2.jpg'

export default function ResSaurabhGuptaPage({ onNavigate, onSelectProject }) {
  return (
    <ProjectDetailPage
      onNavigate={onNavigate}
      onSelectProject={onSelectProject}
      backTo="/services/residential"
      backLabel="Residential"
      title="Saurabh Gupta Residential"
      location="Rohtak"
      category="Residential"
      size="500 SQYD"
      year="2025"
      overview="A contemporary residential design combining modern aesthetics with functional living spaces. The design focuses on creating well-proportioned spaces that balance privacy and openness with a modern architectural expression."
      overview2="Thoughtful design execution balancing aesthetics with practical living requirements, featuring contemporary materials and finishes that create a clean, modern residential character."
      images={[img1, img2]}
    />
  )
}
