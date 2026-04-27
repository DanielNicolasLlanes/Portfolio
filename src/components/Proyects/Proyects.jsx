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
    <div className='glass-card carrousel'>
        <h2 className='proyect-title'>{proyect.title}</h2>
            <MockupPC imageURL={proyect.image} altText={proyect.title} />
            <p>{proyect.description}</p>
        <div className='carrousel-control'>
            <button onClick={prevProyect}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button onClick={nextProyect}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>

    </div>
  )
}

export default Proyects
