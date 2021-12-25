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
          <h5 class="mb-4">The Center For Educational Growth, Inc.</h5>
          <p>70A Queen Street, Frederiksted</p>
          <p>St. Croix, USVI 00840</p>
        </div>
        <div class="col-md-4 col-sm-6 mb-5">
          <h5 class="mb-4">Let's Talk About A New Way To Learn</h5>
          <div class="footer-info-details">
            <p>
              <a href="mailus@domain.com" class="link-hover-underline">
                mailus@domain.com
              </a>
            </p>
            <p class="mb-0">
              <a class="link-hover-underline" href="tel:+1340772-3131">
                (340) 772-3131
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
            ©<script>document.write(new Date().getFullYear())</script> The
            Center For Educational Growth
          </span>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
