import React from 'react'
import './Image.css'
import profileImg from '../assets/Images/Profile.jpg'

const Image = () => {
  return (
    <img className='profileImage' src={profileImg} alt="Profile"/>
  )
}

export default Image
