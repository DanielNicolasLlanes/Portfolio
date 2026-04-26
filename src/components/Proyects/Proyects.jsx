import React from 'react'
import '../../Card/Card.css'
import './Proyects.css'

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
        <h2>{proyect.title}</h2>
        <img src={proyect.image} alt={proyect.title} />
        <p>{proyect.description}</p>
        <div className='carrousel-control'>
            <button onClick={prevProyect}>Anterior</button>
            <button onClick={nextProyect}>Siguiente</button>
        </div>
    </div>
  )
}

export default Proyects
