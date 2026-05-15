import { useEffect, useRef } from "react"

export default function ServiceSection({ type, figureRef, image, title, description, link, linkText, githubLink, id, bgColor }) {
  return (
    <section
      id={id}
      className={`service service-${type} sticky`}
      style={{ backgroundColor: bgColor }}
    >
      <article>
        <figure ref={figureRef}>
          <img src={image} width="200" />
        </figure>
        <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="links">
            <a href={link}>{linkText}</a>
            {githubLink && <a href={githubLink}>View on GitHub</a>}
          </div>
        </div>
      </article>
    </section>
  )
}