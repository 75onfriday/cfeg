import * as React from "react"
import PropTypes from "prop-types"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header className="z-index-fixed header-fixed-top">
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-lg">
      <div className="container position-relative">
        <a className="navbar-brand" href="/">
          <StaticImage src="../images/logo.png" alt="" className="img-fluid" />
        </a>
        <div className="d-flex align-items-center navbar-no-collapse-items order-lg-last">
          <button
            className="navbar-toggler order-last"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbarTheme"
            aria-controls="mainNavbarTheme"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i></i>
            </span>
          </button>
          <div className="nav-item me-3 me-lg-0">
            <a
              href="https://secure.actblue.com/donate/the-center-for-educational-growth"
              className="btn btn-sm btn-primary rounded-pill"
            >
              Donate
            </a>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="mainNavbarTheme">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/our-story">
                Our Story
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/our-services">
                Our Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
