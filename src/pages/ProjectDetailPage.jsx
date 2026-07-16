import SEOMeta from '../components/SEOMeta'
import './ProjectDetailPage.css'

export default function ProjectDetailPage({
  title,
  location,
  category,
  size,
  year,
  overview,
  overview2,
  images = [],
}) {
  const heroImg = images[0]
  const galleryImages = images.slice(1)
  const pageTitle = `${title} | ${category || 'Project'} Project | Devra Architects`

  return (
    <div className="proj-page">
      <SEOMeta
        title={pageTitle}
        description={overview}
        keywords={[category, location, title]}
        path={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}
      />
      
      <section className="proj-hero">
        <div className="proj-hero__img-wrapper">
          <img
            src={heroImg}
            alt={title}
            className="proj-hero__img"
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
            <div key={index} className="proj-gallery__cell">
              <img
                src={image}
                alt={`${title} image ${index + 2}`}
                className="proj-gallery__img"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </section>
      )}
    </div>
  )
}
