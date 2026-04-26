import React from 'react'
import './MockupPC.css'

const MockupPC = ({imageURL, altText}) => {
  return (

    <div className='monitor' >
        <div>
            <img src={imageURL} alt={altText} />
        </div>
    </div>
   
  )
}

export default MockupPC
