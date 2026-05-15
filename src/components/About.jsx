export default function About({ emptyRef, titleRef }) {
  return (
    <section id="about" className="about">
      <div className="empty" ref={emptyRef}>
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '40%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <polygon
            points="100,10 120,80 190,80 135,125 155,195 100,150 45,195 65,125 10,80 80,80"
            fill="#1c47ff"
          />
        </svg>
      </div>
      <article>
        <div className="title" ref={titleRef}>
          <h1>Shanisya Lahida</h1>
        </div>
        <div className="description">
          <p>Full-Stack Web Developer trained in <strong>Green Coding</strong> at <strong>Epitech Paris</strong>, currently in <strong>BAC +2</strong>, I am looking for a <strong>14-month work-study contract</strong> starting <strong>September 2026</strong>.<br />6 weeks company / 2 weeks school.</p>
        </div>
      </article>
    </section>
  )
}