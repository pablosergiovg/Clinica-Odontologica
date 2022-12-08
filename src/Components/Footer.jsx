import React from 'react'

const Footer = () => {
  return (
    <footer>
        <button className='back-to-top' onClick={() => {document.body.scrollIntoView({ behavior: "smooth"})}}>VOLVER HACIA ARRIBA</button>
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
            <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.tiktok.com"><i className="fa-brands fa-tiktok"></i></a>
            <a href="https://www.whatsapp.com"><i className="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>
        
    </footer>
  )
}

export default Footer