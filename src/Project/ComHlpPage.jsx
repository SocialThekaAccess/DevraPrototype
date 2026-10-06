import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/HPL.webp'
import img1 from '../../assets/projects/HCL1.webp'
import img2 from '../../assets/projects/HCL2.webp'
import img3 from '../../assets/projects/HCL3.webp'

const hlpImages = [
  '/assets/projects/hlp1.webp',
  '/assets/projects/hlp2.webp',
  '/assets/projects/hlp3.webp',
  '/assets/projects/hlp5.webp',
  '/assets/projects/hlp6.webp',
  '/assets/projects/hlp7.webp',
  '/assets/projects/hlp8.webp',
  '/assets/projects/hlp9.webp',
  '/assets/projects/hlp10.webp',
  '/assets/projects/hlp11.webp',
  '/assets/projects/hlp12.webp',
]

export default function ComHlpPage() {
  return (
    <ProjectDetailPage
      backTo="/services/commercial"
      backLabel="Commercial"
      title="HLP Project"
      location="Punjab"
      category="Commercial"
      size="TBD"
      year="2024"
      overview="A contemporary commercial project blending functional efficiency with refined architectural expression."
      heroImage={heroImg}
      heroObjectPosition="center center"
      images={[img1, img2, img3, ...hlpImages]}
    />
  )
}
