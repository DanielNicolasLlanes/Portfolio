import React from 'react'
import '../../Card/Card.css'
import './Proyects.css'
import MockupPC from '../MockupPC/MockupPC.jsx'


import { proyects } from './ProyectsRepository.js'
import { useState } from 'react'
import ButtonPrimary from '../../Button-primary/Button-primary.jsx'

const Proyects = () => {
    

    const proyect = proyects;


  return (
    <>
    <div className='proyects-header'>
        <h2>Proyectos <span className='higthlited'>Seleccionados</span></h2>
    </div>
    <div className='proyects-container'>
      
        
        <div className='glass-card carrousel'>
            <MockupPC imageURL={proyect[0].image} altText={proyect[0].title} />
            <h3 className='proyect-title'>{proyect[0].title}</h3>
            <p>{proyect[0].description}</p>
            <ButtonPrimary/>
        </div>

         <div className='glass-card carrousel'>
            <MockupPC imageURL={proyect.image} altText={proyect.title} />
            <h3 className='proyect-title'>{proyect.title}</h3>
            <p>{proyect.description}</p>
        </div>

         <div className='glass-card carrousel'>
            <MockupPC imageURL={proyect.image} altText={proyect.title} />
            <h3 className='proyect-title'>{proyect.title}</h3>
            <p>{proyect.description}</p>
        </div>
        
    </div>
    </>
  )
}

export default Proyects
