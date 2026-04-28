import React from 'react'
import './Card.css'
import '../Paragraph/Paragraph.css'
import Paragraph from '../Paragraph/Paragraph'
import Image from '../Image/Image'
import SkillsList from '../components/SkillsList/SkillsList'

const Card = () => {
  return (
    <div className="glass-card">
      <div className="card-header">
        <Image/>
        <div className="header-text-container">  
          <h1 className='title'>Diseño, desarrollo web y <span class="higthlited">soluciones informaticas</span></h1>
          <p className='text'>Daniel Nicolás Llanes - Full Stack Developer</p>
        </div>
      </div>
      <hr className='line'/>  
       <div className="card-content">
         <Paragraph/>
         <SkillsList/>
       </div>
       
    </div>
  )
}

export default Card
