import React from 'react'
import './SkillsList.css'

const SkillsList = () => {
  return (
    <ol className='skills-list'>
        <li className='skill-item js'>JavaScript</li>
        <li className='skill-item react'>React</li>
        <li className='skill-item node'>Node.js</li>
        <li className='skill-item csharp'>C#</li>
        <li className='skill-item mysql'>MySql</li>
    </ol>
  )
}

export default SkillsList
