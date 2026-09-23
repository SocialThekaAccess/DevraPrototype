import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/TheKangs2.png'

export default function ResKangsPage() {
  return (
    <ProjectDetailPage
      backTo="/services/residential"
      backLabel="Residential"
      title="The Kangs"
      location="DLF, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2025"
      overview="A Mediterranean heritage villa distinguished by arched openings, warm stucco textures, hand-carved stone details, and deep wooden balconies. The façade balances classical charm with refined proportion, creating a home that feels elegant, inviting, and timelessly rooted in coastal architecture."
      heroImage={heroImg}
      heroAspectRatio="16 / 9"
      heroObjectPosition="center center"
      images={[heroImg]}
    />
  )
}
