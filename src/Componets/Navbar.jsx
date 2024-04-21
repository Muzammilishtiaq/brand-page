import React from 'react';
import logo from '../image/brand_logo.png';

function Navbar() {
  return (
    <div style={{width:'100%',height:'20vh',display:'flex',justifyContent:'space-around'}}>
      <img src={logo} style={{width:'5vw',height:'5vh',padding:'20px 0px'}} alt="" />
      <div className="menu" style={{display:'flex',gap:'2rem'}}>
        <h4>MENU</h4>
        <h4>LOCATION</h4>
        <h4>ABOUT</h4>
        <h4>CONTACT</h4>
      </div>
      <button className="login" 
      style={{
        background:'red',outline:'none',border:'none',color:'white',fontWeight:'bold',fontSize:'15px',height:'5vh',padding:'10px 25px',margin:'20px 10px'
        }}>Login</button>
    </div>
  )
}

export default Navbar
