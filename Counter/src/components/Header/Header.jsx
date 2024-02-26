import React from 'react';
import './header.css';

export function Header() {
  return (
    <div className='header-container'>
      <ul className='header-list'>
        <li>
          <a href='#' target='_blank' rel=''>Sophie's Swear Jar</a>
        </li>
        <li>
          <img src='../src/assets/logo.png' alt='Swear Tally Tracker' className='logo' />
        </li>
        <li>
          <a href='#' target='_blank' rel=''>Track Your Swears</a>
        </li>
      </ul>
    </div>
  );
}