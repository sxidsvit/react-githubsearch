import React from 'react'
import logo from '../img/logo.jpg'

export const Header = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <img src={logo} alt="logo" className="company-logo" />
        <div>
          <p className="company-title">requestum</p>
          <p className="company-description">web development company</p>
        </div>
      </div>
      <span className="app-description">Github users search app</span>
    </header>
  )
}
