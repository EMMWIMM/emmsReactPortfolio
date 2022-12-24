import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import '../../src/App.css'


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = ()=> {
    if (currentPage === 'About'){
      return <About/>;
    }
    if (currentPage === 'Portfolio'){
      return <Portfolio/>;
    }
    if (currentPage === 'Resume'){
      return <Resume/>;
    }
    return <Contact/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return(
    <div className='main'>
    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}

    <footer className= 'footer'>
    <a href='https://github.com/EMMWIMM' target="_blank" rel="noreferrer">
            <button variant="secondary" size="sm">
              GitHub
            </button>
          </a>
          <a href='https://www.linkedin.com/in/emilee-anderson-7b8048239' target="_blank" rel="noreferrer">
            <button variant="secondary" size="sm">
              LinkedIn
            </button>
          </a>
   
    <a href='https://www.instagram.com/emmwimm/' target="_blank" rel="noreferrer">
            <button variant="secondary" size="sm">
              Instagram
            </button>
          </a>
    </footer>
    </div>

  )
}
