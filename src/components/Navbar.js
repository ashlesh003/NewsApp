import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link  className="navbar-brand" to="/" style={{color: 'darkviolet' }}><h2><u>NewsApp</u></h2></Link>
           
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" to="/" aria-current="page">Home</Link>
                <Link className="nav-link" to="/business">BUSINESS</Link>
                <Link className="nav-link" to="/entertainment">ENTERTAINMENT</Link>
                <Link className="nav-link" to="/general">GENERAL</Link>
                <Link className="nav-link" to="/health">HEALTH</Link>
                <Link className="nav-link" to="/science">SCIENCE</Link>
                <Link className="nav-link" to="/sports">SPORTS</Link>
                <Link className="nav-link" to="/technology">TECHNOLOGY</Link>
              </div>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}