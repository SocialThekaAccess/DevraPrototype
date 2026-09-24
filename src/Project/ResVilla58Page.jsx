import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/Villaa58.webp'
import heroImgMobile from '../../assets/Villa58MobileVersion.webp'
import img1 from '../../assets/projects/res-villa-58-1.webp'
import img2 from '../../assets/projects/res-villa-58-2.webp'
import img3 from '../../assets/projects/res-villa-58-3.webp'
import img4 from '../../assets/projects/res-villa-58-4.webp'
import img6 from '../../assets/projects/res-villa-58-6.webp'
import img7 from '../../assets/projects/res-villa-58-7.webp'
import img8 from '../../assets/projects/res-villa-58-8.webp'
import img9 from '../../assets/projects/res-villa-58-9.webp'
import img10 from '../../assets/projects/res-villa-58-10.webp'

export default function ResVilla58Page() {
  return (
    <ProjectDetailPage
      backTo="/services/residential"
      backLabel="Residential"
      title="Villa 58"
      location="Omaxe"
      category="Residential"
      size="300 SQ"
      year="2024"
      overview="A contemporary urban home defined by clean linear lines, dramatic concrete cantilevers, and a design that prioritizes cross-ventilation and spatial fluidity."
      overview2="Modern finishes, warm wood accents, and thoughtful spatial planning create a home that balances bold architecture with everyday comfort and practicality."
      heroImage={heroImg}
      heroImageMobile={heroImgMobile}
      heroObjectPosition="center center"
      images={[img1, img2, img3, img4, img6, img7, img8, img9, img10]}
    />
  )
}
