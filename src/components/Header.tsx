'use client';
import React, { useState } from 'react';
import './header.css';
import Navbar from './Navbar';
import Sci from './Sci';
import Searchform from './Searchform';
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleFormOpen = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container">
        <Link href="/" className="logo d-flex align-items-center">
          <h2 className="headerh1">NewsApp</h2>
        </Link>

        <div className="header-right">
          <div className="navbar-container">
            <Navbar />
          </div>

          <div className="sci-container">
            <Sci />
            <a className="search-icon" onClick={handleFormOpen} href="#">
              <span className="bi-search"></span>
            </a>
            <Searchform active={open} formOpen={handleFormOpen} />
          </div>
        </div>
      </div>
    </header>
  );
}
