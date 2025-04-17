'use client';
import React, { useState } from 'react'
import {navs} from '@/data/data';
import './nav.css'
import Link from 'next/link';
 function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <nav id="navbar" className='navbar'>
       <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? '✖' : '☰'}
      </button>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            {
                navs.map(nav=>(
                    <li key={nav.id}>
                        <Link href={nav
                        .link}>{nav.name}</Link>  
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}
export default Navbar;
