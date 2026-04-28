import React from 'react'
import './MockupPC.css'

const MockupPC = ({imageURL, altText}) => {
  return (

    <div className='monitor' >
      <img src={imageURL} alt={altText} />
    </div>
   
  )
}

export default MockupPC
