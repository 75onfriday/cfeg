import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => (
  <footer
    id="footer"
    class="position-relative overflow-hidden bg-dark text-white"
  >
    <div class="container pt-9 pt-lg-11 pb-5">
      <div class="row">
        <div class="col-md-3 col-sm-6 mb-5">
          <h5 class="mb-4">We're here</h5>
          <p>124 Monali Street,</p>
          <p>Rosemary, California</p>
          <p>302012, USA</p>
          <p class="mb-5">
            <a href="#!" class="link-underline">
              View on Map
            </a>
          </p>
          <p class="mb-0">
            <span
              data-countup='{"startVal":0}'
              data-to="20000"
              data-aos-id="countup:in"
              data-aos
              class="fs-2 fw-bold d-block"
            >
              0
            </span>
            <span class="text-muted small">+ Users</span>
          </p>
        </div>
        <div class="col-md-4 col-sm-6 mb-5">
          <h5 class="mb-4">Say g’day</h5>
          <div class="footer-info-details">
            <p>
              <a href="mailus@domain.com" class="link-hover-underline">
                mailus@domain.com
              </a>
            </p>
            <p class="mb-0">
              <a class="link-hover-underline" href="tel:+1123456789">
                (01) 1123 56789
              </a>
            </p>
          </div>
          <hr class="my-4" />
          <h6 class="mb-4">Follow us</h6>
          <div class="">
            <a
              href="#"
              class="d-inline-block me-3"
              aria-label="Facebook"
              target="_blank"
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a
              href="#"
              class="d-inline-block me-3"
              aria-label="Twitter"
              target="_blank"
            >
              <i class="bi bi-twitter"></i>
            </a>
            <a
              href="#"
              class="d-inline-block me-3"
              aria-label="LinkedIn"
              target="_blank"
            >
              <i class="bi bi-linkedin"></i>
            </a>
            <a
              href="#"
              class="d-inline-block"
              aria-label="Instagram"
              target="_blank"
            >
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <hr class="mb-5 mt-0" />
      <div class="row align-items-center">
        <div class="col-sm-7 mb-4 mb-sm-0">
          <div class="d-flex small align-items-center"></div>
        </div>
        <div class="col-sm-5 text-sm-end">
          <span class="d-block lh-sm small text-muted">
            © Copyright
            <script>document.write(new Date().getFullYear())</script>. Assan
          </span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
