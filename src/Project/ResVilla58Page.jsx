import ProjectDetailPage from '../pages/ProjectDetailPage'
import heroImg from '../../assets/projects/Villa58heroimg.png'
import heroImgMobile from '../../assets/Villa58MobileVersion.png'
import img1 from '../../assets/projects/res-villa-58-1.png'
import img2 from '../../assets/projects/res-villa-58-2.png'
import img3 from '../../assets/projects/res-villa-58-3.png'
import img4 from '../../assets/projects/res-villa-58-4.png'
import img6 from '../../assets/projects/res-villa-58-6.png'
import img7 from '../../assets/projects/res-villa-58-7.png'
import img8 from '../../assets/projects/res-villa-58-8.png'
import img9 from '../../assets/projects/res-villa-58-9.png'
import img10 from '../../assets/projects/res-villa-58-10.png'

export default function ResVilla58Page() {
  return (
    <ProjectDetailPage
      backTo="/services/residential"
      backLabel="Residential"
      title="Villa 58"
      location="Sec-58 Mohali"
      category="Residential"
      size="500 SQYD"
      year="2024"
      overview="A contemporary urban home defined by clean linear lines, dramatic concrete cantilevers, and a design that prioritizes cross-ventilation and spatial fluidity."
      overview2="Modern finishes, warm wood accents, and thoughtful spatial planning create a home that balances bold architecture with everyday comfort and practicality."
      heroImage={heroImg}
      heroImageMobile={heroImgMobile}
      images={[img1, img2, img3, img4, img6, img7, img8, img9, img10]}
    />
  )
}
