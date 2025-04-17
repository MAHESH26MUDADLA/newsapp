import React from 'react'
import './sci.css';
import {scis} from '@/data/data';
 function Sci() {
  return (
    <>
    <div className='sci-container'>
    {
        scis.map(sci=>(
            <a href ={sci.link} key={sci.id} target="_blank" className='anc'>
                <span className={sci.icon}></span>
            </a>
        ))
    }
    </div>
    
    
    </>
  )
}
export default Sci;
