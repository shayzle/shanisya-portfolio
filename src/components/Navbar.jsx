import { useEffect, useRef } from 'react'
import photo from '../assets/assets/Images/IMG_5860_VSCO 4.jpg'
import epitechLogo from '../assets/img/Epitech_Official_Logo.png'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="nav-epitech">
          <img src={epitechLogo} alt="Epitech" />
        </li>
        <li className="nav-photo">
          <a href="https://www.linkedin.com/in/shanisyalahida" target="_blank" rel="noreferrer">
            <img src={photo} alt="Shanisya" />
          </a>
        </li>
      </ul>
    </nav>
  )
}