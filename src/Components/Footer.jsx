import React from 'react'
import {Box, Container, ImageList, ImageListItem} from '@mui/material'

const Footer = () => {
  return (
    <footer>
        <button className='back-to-top'>VOLVER HACIA ARRIBA</button>
        <div className='footer-container'>
          <div className='footer-img' sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center", 
            color: "MenuText",
            maxWidth: ""
            }}>
            <img src="/images/DH.png"  alt='DH-logo'/>
          </div>

          <div className='social-media'>
            <i className="fa-brands fa-facebook"></ i>
            <i className="fa-brands fa-instagram"></  i>
            <i className="fa-brands fa-tiktok"></i>
            <i className="fa-brands fa-whatsapp"></ i>
          </div>
        </div>
        
    </footer>
  )
}

export default Footer