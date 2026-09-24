import ProjectDetailPage from '../pages/ProjectDetailPage'
import img1 from '../../assets/projects/FORTOFINO1.webp'
import img2 from '../../assets/projects/FORTOFINO2.webp'
import img3 from '../../assets/projects/FORTOFINO3.webp'
import img4 from '../../assets/projects/FORTOFINO4.webp'
import img5 from '../../assets/projects/FORTOFINO5.webp'
import img6 from '../../assets/projects/FORTOFINO6.webp'
import img7 from '../../assets/projects/FORTOFINO7.webp'
import img8 from '../../assets/projects/FORTOFINO8.webp'
import img9 from '../../assets/projects/FORTOFINO9.webp'

export default function ComFortofinoPage() {
  return (
    <ProjectDetailPage
      backTo="/services/commercial"
      backLabel="Commercial"
      title="FortoFino"
      location="Srinagar"
      category="Commercial"
      size=""
      year="2024"
      overview="A refined boutique interior crafted in soft neutrals, sculpted arches, and warm lighting—creating an atmosphere of quiet luxury. Every display, surface, and detail is designed to elevate the jewellery itself, offering an experience that feels exclusive, graceful, and timeless."
      overview2="The space blends artisanal textures, curated lighting, and tailored arrangements to guide the customer journey with ease. From intimate display zones to lounge-like seating, each corner reflects sophistication and comfort, shaping a boutique that feels both premium and inviting."
      images={[img1, img2, img3, img4, img5, img6, img7, img8, img9]}
    />
  )
}
