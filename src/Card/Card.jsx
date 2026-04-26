import React from 'react'
import './Card.css'
import '../Paragraph/Paragraph.css'
import Paragraph from '../Paragraph/Paragraph'
import Image from '../Image/Image'

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
    </div>
  )
}

export default Card
