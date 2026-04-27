import React from 'react'
import './Card.css'
import '../Paragraph/Paragraph.css'
import Paragraph from '../Paragraph/Paragraph'
import Image from '../Image/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faNode, faPython, faGithub, faAngular} from '@fortawesome/free-brands-svg-icons';

const Card = () => {
  return (
    <div className="glass-card">
      <div className="card-header">
        <Image/>
        <div className="header-text">  
          <h1 className='title'>Daniel Nicolás Llanes</h1>
          <p className='text'>Full Stack Developer</p>
        </div>
      </div>
      <hr className='line'/>  
      <Paragraph/>
      <h3>SKILLS</h3>
        <ul className='skills-list'>
          <li><FontAwesomeIcon icon={faHtml5} className='icon html'/></li>
          <li><FontAwesomeIcon icon={faCss3} className='icon css'/></li>
          <li><FontAwesomeIcon icon={faJs} className='icon js'/></li>
          <li><FontAwesomeIcon icon={faReact} className='icon react'/></li>
          <li><FontAwesomeIcon icon={faNode} className='icon node'/></li>
          <li><FontAwesomeIcon icon={faPython} className='icon python'/></li>
          <li><FontAwesomeIcon icon={faGithub} className='icon github'/></li>
          <li><FontAwesomeIcon icon={faAngular} className='icon angular'/></li>
        </ul>
    </div>
  )
}

export default Card
