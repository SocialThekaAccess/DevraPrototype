import SEOMeta from '../components/SEOMeta'
import { useState, useEffect, useLayoutEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { X, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react'
import { PROJECTS } from '../data'
import { PROJECT_CARDS } from '../projectsData'
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
  heroImageMobile,
  heroObjectPosition,
  images = [],
  onNavigate,
  onSelectProject,
}) {
  const heroImg = heroImage || images[0]
  // Mobile image: projectsData.ts ki image ko pehle priority
  // URL ke last part (jaise "col-supreet") se match karo, kyunki title page par alag ho sakta hai
  const slug = typeof window !== 'undefined' ? window.location.pathname.split('/').filter(Boolean).pop() : ''
  const cardProject =
    PROJECT_CARDS.find((p) => p.id === slug) ||
    PROJECT_CARDS.find((p) => p.title === title)
  const matchedProject =
    PROJECTS.find((p) => p.id === slug) ||
    PROJECTS.find((p) => p.title === title)
  const heroImgMobile =
    cardProject?.mobileHeroImage ||
    heroImageMobile ||
    matchedProject?.mobileHeroImage ||
    heroImg
  const galleryImages = images
  const pageTitle = `${title} | ${category || 'Project'} Project | Devra Architects`

  // Page khulte hi (ya project badalte hi) hamesha top par
  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)
  }, [title])

  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const displayHeroImg = isMobile ? heroImgMobile : heroImg

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }
  const closeLightbox = () => setLightboxOpen(false)
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)

  return (
    <div className="proj-page">
      <Helmet>
        <link rel="preload" as="image" href={displayHeroImg} fetchpriority="high" />
      </Helmet>
      <SEOMeta
        title={pageTitle}
        description={overview}
        keywords={[category, location, title]}
        path={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}
      />

      <section className="proj-hero">
        <div className="proj-hero__img-wrapper">
          <img
            src={displayHeroImg}
            alt={title}
            className="proj-hero__img"
            style={heroObjectPosition ? { objectPosition: heroObjectPosition } : undefined}
            referrerPolicy="no-referrer"
            loading="eager"
            fetchPriority="high"
            decoding="async"
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

      {galleryImages.length > 1 && (
        <section className={`proj-gallery${galleryImages.length <= 2 ? ' proj-gallery--small' : ''}`}>
          {galleryImages.map((image, index) => (
            <div key={index} className="proj-gallery__cell" onClick={() => openLightbox(index)}>
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

      {lightboxOpen && (
        <div className="proj-lightbox" onClick={closeLightbox}>
          <button className="proj-lightbox__close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <button
            className="proj-lightbox__prev"
            onClick={(e) => { e.stopPropagation(); prevImage() }}
          >
            <ChevronLeft size={40} />
          </button>
          <button
            className="proj-lightbox__next"
            onClick={(e) => { e.stopPropagation(); nextImage() }}
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

      {/* Project Navigation - Next/Previous */}
      {(() => {
        const currentProject = PROJECTS.find(p => p.title === title);
        if (!currentProject) return null;

        const currentIndex = PROJECTS.findIndex(p => p.id === currentProject.id);
        const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
        const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

        const handleNavigateToProject = (id) => {
          if (onSelectProject) onSelectProject(id);
          if (onNavigate) {
            onNavigate(`project-${id}`);
          }
          window.scrollTo(0, 0);
        };

        return (
          <section className="py-16 border-t border-stone-200 bg-stone-100">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Previous Project */}
                <button
                  onClick={() => handleNavigateToProject(prevProject.id)}
                  className="group text-left cursor-pointer hover:bg-stone-50 p-6 border border-stone-200 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-stone-500 font-mono font-bold mb-3">
                    <ArrowLeft className="w-3 h-3" />
                    Previous Project
                  </div>
                  <h3 className="font-serif text-xl text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
                    {prevProject.title}
                  </h3>
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono mt-2">
                    {prevProject.category}
                  </p>
                </button>

                {/* Next Project */}
                <button
                  onClick={() => handleNavigateToProject(nextProject.id)}
                  className="group text-right cursor-pointer hover:bg-stone-50 p-6 border border-stone-200 transition-all duration-300"
                >
                  <div className="flex items-center justify-end gap-2 text-[10px] uppercase tracking-widest text-stone-500 font-mono font-bold mb-3">
                    Next Project
                    <ArrowRight className="w-3 h-3" />
                  </div>
                  <h3 className="font-serif text-xl text-stone-900 font-medium group-hover:text-stone-600 transition-colors">
                    {nextProject.title}
                  </h3>
                  <p className="text-[10px] text-stone-500 uppercase tracking-widest font-mono mt-2">
                    {nextProject.category}
                  </p>
                </button>
              </div>
            </div>
          </section>
        );
      })()}
    </div>
  )
}