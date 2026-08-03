import SEOMeta from '../components/SEOMeta'
import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import './ProjectDetailPage.css'

export default function ProjectDetailPage({
  title,
  location,
  category,
  size,
  year,
  overview,
  overview2,
  heroImage,
  images = [],
}) {
  const heroImg = heroImage || images[0]
  const galleryImages = images.slice(1)
  const pageTitle = `${title} | ${category || 'Project'} Project | Devra Architects`
  
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="proj-page">
      <SEOMeta
        title={pageTitle}
        description={overview}
        keywords={[category, location, title]}
        path={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}
      />

      <section className="proj-hero">
        <div className={`proj-hero__img-wrapper ${title === 'UNWALLED' ? 'proj-hero__img-wrapper--unwalled' : ''}`}>
          <img
            src={heroImg}
            alt={title}
            className={`proj-hero__img ${title === 'UNWALLED' ? 'proj-hero__img--contain' : ''}`}
            referrerPolicy="no-referrer"
            loading="eager"
          />
        </div>
        <div className="proj-hero__overlay" />
        <div className="proj-hero__title-wrap">
          <h1 className="proj-hero__title">{title}</h1>
          <span className="proj-hero__category">{category}</span>
        </div>
      </section>

      <section className="proj-meta-strip">
        <div className="proj-meta-strip__inner">
          {location && (
            <div className="proj-meta-strip__item">
              <span className="proj-meta-strip__label">Location</span>
              <span className="proj-meta-strip__value">{location}</span>
            </div>
          )}
          {size && (
            <div className="proj-meta-strip__item">
              <span className="proj-meta-strip__label">Project Size</span>
              <span className="proj-meta-strip__value">{size}</span>
            </div>
          )}
          {year && (
            <div className="proj-meta-strip__item">
              <span className="proj-meta-strip__label">Year</span>
              <span className="proj-meta-strip__value">{year}</span>
            </div>
          )}
          {category && (
            <div className="proj-meta-strip__item">
              <span className="proj-meta-strip__label">Category</span>
              <span className="proj-meta-strip__value">{category}</span>
            </div>
          )}
        </div>
      </section>

      <section className="proj-overview">
        <div className="proj-overview__inner">
          <div className="proj-overview__label-col">
            <span className="proj-overview__label">Overview</span>
          </div>
          <div className="proj-overview__text-col">
            <p className="proj-overview__text">{overview}</p>
            {overview2 && <p className="proj-overview__text proj-overview__text--mt">{overview2}</p>}
          </div>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <section className="proj-gallery">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="proj-gallery__cell"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image}
                alt={`${title} image ${index + 2}`}
                className="proj-gallery__img"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="proj-gallery__overlay">
                <span className="proj-gallery__view-text">View Full Image</span>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="proj-lightbox" onClick={closeLightbox}>
          <button className="proj-lightbox__close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          
          <button 
            className="proj-lightbox__prev" 
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
          >
            <ChevronLeft size={40} />
          </button>
          
          <button 
            className="proj-lightbox__next" 
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
          >
            <ChevronRight size={40} />
          </button>
          
          <div className="proj-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[currentImageIndex]}
              alt={`${title} ${currentImageIndex + 2}`}
              className="proj-lightbox__img"
            />
            <div className="proj-lightbox__counter">
              {currentImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}