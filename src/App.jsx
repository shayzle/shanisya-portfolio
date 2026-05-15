import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import ServiceSection from './components/ServiceSection'
import Contact from './components/Contact'
import diamond from './assets/img/diamond.png'
import triangle from './assets/img/triangle.png'
import octagon from './assets/img/octagon.png'
import pentagon from './assets/img/pentagon.svg'
import circle from './assets/img/circle.svg'
import star from './assets/img/star.svg'
import hexagon from './assets/img/hexagon.svg'
import './index.css'

export default function App() {
  const emptyRef = useRef(null)
  const titleRef = useRef(null)
  const figureRefs = useRef([])

  useEffect(() => {
    const onMouseMove = e => {
      if (emptyRef.current) emptyRef.current.style.flexBasis = e.clientX + 'px'
      if (titleRef.current) titleRef.current.style.flexBasis = e.clientY / 2 + 'px'
      figureRefs.current.forEach(el => {
        if (el) el.style.flexBasis = (window.innerWidth - e.clientX) + 'px'
      })
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      <Navbar />
      <About emptyRef={emptyRef} titleRef={titleRef} />

      <ServiceSection
        type="html"
        image={diamond}
        title="My Cinema | PHP MVC"
        description="PHP OOP cinema dashboard. Manage screenings, rooms and reservations with MVC architecture and PDO security. Stack: PHP, MySQL, HTML, CSS, JavaScript, PDO, MVC."
        link="http://mycinema.infinityfreeapp.com/Front-End/index.html"
        linkText="View Live"
        githubLink="https://github.com/shayzle/my-cinema"
        figureRef={el => figureRefs.current[0] = el} 
        id="services"
      />

      <ServiceSection
        type="css"
        image={triangle}
        title="Connect'In | React & Laravel"
        description="Full stack social platform with authentication, posts, comments and likes. Stack: PHP, Laravel, Sanctum, React, Tailwind CSS, MySQL, Docker."
        link="https://github.com/shayzle/connect-in"
        linkText="View on GitHub"
        figureRef={el => figureRefs.current[1] = el}
      />

      <ServiceSection
        type="js"
        image={octagon}
        title="Connect'In Java | Spring Boot API"
        description="Complete migration of the Laravel backend to Spring Boot with JWT authentication and Swagger documentation. Stack: Java, Spring Boot, Spring Security, JWT, MySQL, Docker, Maven, JUnit."
        link="https://github.com/shayzle/connect-in-java"
        linkText="View on GitHub"
        figureRef={el => figureRefs.current[2] = el}
      />

      <ServiceSection
        type="py"
        image={pentagon}
        title="Jeux VidéOps | CI/CD Pipeline"
        description="CI/CD pipeline on a Space Invaders JavaScript game with automated testing and security audit. Stack: JavaScript, Node.js, GitHub Actions, Mocha, Cypress, ESLint, NYC, YAML."
        link="https://jeuvideopsbyrs.netlify.app"
        linkText="View Live"
        githubLink="https://github.com/shayzle/jeux-videops-space-word"
        figureRef={el => figureRefs.current[3] = el}
      />

      <ServiceSection
        type="ts"
        image={circle}
        title="CV Generator | PHP & Bootstrap"
        description="Web application to generate and export a CV directly from the browser. Stack: PHP, HTML, CSS, Bootstrap, JavaScript."
        link="http://cv-generator.infinityfreeapp.com/cv.php"
        linkText="View Live"
        githubLink="https://github.com/shayzle/cv-generator"
        figureRef={el => figureRefs.current[4] = el}
      />

      <ServiceSection
        type="vue"
        image={star}
        title="Move Ease | Moving Agency"
        description="Parisian moving agency website built through self-training for my Epitech admission. Stack: HTML, CSS, Bootstrap."
        link="https://shayzle.github.io/move-ease-paris/"
        linkText="View Live"
        githubLink="https://github.com/shayzle/move-ease-paris"
        figureRef={el => figureRefs.current[5] = el}
      />

      <ServiceSection
        type="php"
        image={hexagon}
        title="Maths Clés | Educational Platform"
        description="Educational mathematics platform built by a team of 3 at Epitech. Stack: HTML, CSS, JavaScript."
        link="https://shayzle.github.io/maths-cles/"
        linkText="View Live"
        githubLink="https://github.com/shayzle/maths-cles"
        figureRef={el => figureRefs.current[6] = el}
      />

      <Contact />
    </>
  )
}