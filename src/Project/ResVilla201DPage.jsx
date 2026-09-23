import ProjectDetailPage from '../pages/ProjectDetailPage'
import img1 from '../../assets/projects/res-villa-201d-hd1.png'
import img2 from '../../assets/projects/res-villa-201d-hd2.png'
import img3 from '../../assets/projects/res-villa-201d-hd3.png'
import ff1 from '../../assets/projects/201DFIRSTFLOOR1.png'
import ff2 from '../../assets/projects/201DFIRSTFLOOR2.png'
import ff3 from '../../assets/projects/201DFIRSTFLOOR3.png'
import ff4 from '../../assets/projects/201DFIRSTFLOOR4.png'
import ff5 from '../../assets/projects/201DFIRSTFLOOR5.png'
import ff6 from '../../assets/projects/201DFIRSTFLOOR6.png'
import gf1 from '../../assets/projects/201DGROUNDFLOORINTERIORS1.png'
import gf2 from '../../assets/projects/201DGROUNDFLOORINTERIORS2.png'
import gf3 from '../../assets/projects/201DGROUNDFLOORINTERIORS3.png'
import gf4 from '../../assets/projects/201DGROUNDFLOORINTERIORS4.png'
import gf5 from '../../assets/projects/201DGROUNDFLOORINTERIORS5.png'
import gf6 from '../../assets/projects/201DGROUNDFLOORINTERIORS6.png'
import gf7 from '../../assets/projects/201DGROUNDFLOORINTERIORS7.png'
import gf8 from '../../assets/projects/201DGROUNDFLOORINTERIORS8.png'
import gf9 from '../../assets/projects/201DGROUNDFLOORINTERIORS9.png'
import gf10 from '../../assets/projects/201DGROUNDFLOORINTERIORS10.png'
import gf11 from '../../assets/projects/201DGROUNDFLOORINTERIORS11.png'

export default function ResVilla201DPage() {
  return (
    <ProjectDetailPage
      backTo="/services/residential"
      backLabel="Residential"
      title="Villa 201D"
      location="PH-3 Cassia, New Chandigarh"
      category="Residential"
      size="300 SQYD"
      year="2025"
      overview="A tropical-rustic villa defined by deep clay-tile roofs, carved brick surfaces, and layered balconies that open to lush green views. The façade blends vernacular warmth with modern proportion, creating a home that feels rooted, timeless, and naturally welcoming."
      overview2="Inside, the home unfolds through light-filled rooms, textured brick accents, handcrafted details, and soft pastel palettes. Playful wall art, artisanal finishes, and warm earthy tones create a refreshing atmosphere that feels personal, lively, and effortlessly comfortable."
      images={[img3, img1, img2, ff1, ff2, ff3, ff4, ff5, ff6, gf1, gf2, gf3, gf4, gf5, gf6, gf7, gf8, gf9, gf10, gf11]}
    />
  )
}
