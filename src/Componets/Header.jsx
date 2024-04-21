import React from 'react';
import shoe from '../image/shoe_image.png'
import amazon from '../image/amazon.png'
import flipkart from '../image/flipkart.png'

function Header() {
  return (
    <div style={{width:'100%',height:'80vh',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
      <div className="left">
        <h1 style={{fontSize:"5rem",fontFamily:'sans-serif',fontWeight:'bold'}}>YOUR FEET <br />DESERVE <br />THE BEST</h1>
<p style={{fontSize:'10px',fontFamily:'sans-serif',lineHeight:'1rem'}}>YOUR FEET DESERVE THE BEST AND WE’RE <br /> HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
<div className="button" style={{display:'flex',gap:'1rem',margin:'14px 0px'}}>
    <button style={{ background:'red',padding:'10px 20px',fontSize:'15px',fontWeight:'bold',color:'white',border:'none'}}>Shop Now</button>
    <button style={{fontSize:'15px',padding:'8px 20px',border:'2px solid red',borderRadius:'5px'}}>Category</button>
</div>
<div className="icon" style={{display:'flex',gap:'10px'}}>
<img src={flipkart} alt="" style={{height:'5vh'}} />
    <img src={amazon} alt="" style={{height:'5vh'}} />
    </div>
      </div>
      <div className="right">
        <img src={shoe} alt=""  />
      </div>
    </div>
  )
}

export default Header
