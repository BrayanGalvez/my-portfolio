import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/brayan-galvez/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/BrayanGalvez" target="_blank"><AiFillGithub/></a>
        <a href="https://www.instagram.com/brayangalvez.dev/" target="_blank"><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials