import React from 'react'
import '../../Card/Card.css'
import './Proyects.css'
import MockupPC from '../MockupPC/MockupPC.jsx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { proyects } from './ProyectsRepository.js'
import { useState } from 'react'

const Proyects = () => {
    const [currentProyect, setCurrentProyect] = useState(0);

    const proyect = proyects[currentProyect];

    const nextProyect = () => {
        if (currentProyect < proyects.length - 1) {
            setCurrentProyect(currentProyect + 1);
        }
    }
    const prevProyect = () => {
        if (currentProyect > 0) {
            setCurrentProyect(currentProyect - 1);
        }
    }


  return (
    <>
    <div className='proyects-header'>
        <h2>Proyectos <span className='higthlited'>Seleccionados</span></h2>
        <p>Coleccion de proyectos destacados, hechos con amor y dedicación</p>
    </div>
    <div className='proyects-container'>
        <button onClick={prevProyect}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        
        <div className='glass-card carrousel'>
            <MockupPC imageURL={proyect.image} altText={proyect.title} />
            <h3 className='proyect-title'>{proyect.title}</h3>
            <p>{proyect.description}</p>
        </div>
            
            <button onClick={nextProyect}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
    </div>
    </>
  )
}

export default Proyects
