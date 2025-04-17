import React from 'react'
import './heroslide.css'    

export default function HeroSlide({
    slide,
 }:{
    slide:{
        bgImg:string;
        title:string;
        brief:string;
    }
 }) {
  return (
   
        <a href="" className="img-bg" style={{backgroundImage:`url(/${slide.bgImg})`}}>
        <div className="img-bg-inner">
            <h2>{slide.title}</h2>
            <p>{slide.brief}</p>
        </div>
    </a>
  
    
  )
}

