import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { withPrefix } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <section class="position-relative">
      <div class="container py-9 py-lg-11">
        <div class="d-flex mb-5 align-items-center"></div>
        <div
          id="carouselExampleCaption"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <StaticImage
                src="../images/hero-one.jpg"
                class="img-fluid w-75 w-lg-60"
                alt="..."
              />

              <div class="position-absolute start-0 top-0 w-100 h-100 w-lg-75 d-flex align-items-center justify-content-center justify-content-lg-end">
                <ul class="text-white list-unstyled carousel-layers mb-0">
                  <li data-carousel-layer="fade-end">
                    <h2 class="d-inline-block bg-primary px-2 py-3 lh-1 mb-0 fs-1">
                      Feel the difference
                    </h2>
                  </li>
                  <li data-carousel-layer="fade-start">
                    <p class="mb-0 d-inline-block bg-warning text-dark px-2 py-2 lh-1">
                      This is the best quality theme
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="carousel-item">
              <StaticImage
                src="../images/hero-one.jpg"
                class="img-fluid w-75 w-lg-60"
                alt="..."
              />

              <div class="position-absolute start-0 top-0 w-100 h-100 w-lg-75 d-flex align-items-center justify-content-center justify-content-lg-end">
                <ul class="text-white list-unstyled carousel-layers mb-0">
                  <li data-carousel-layer="fade-end">
                    <h2 class="d-inline-block bg-primary px-2 py-3 lh-1 mb-0 fs-1">
                      Feel the difference
                    </h2>
                  </li>
                  <li data-carousel-layer="fade-start">
                    <p class="mb-0 d-inline-block bg-warning text-dark px-2 py-2 lh-1">
                      This is the best quality theme
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="carousel-item">
              <StaticImage
                src="../images/hero-one.jpg"
                class="img-fluid w-75 w-lg-60"
                alt="..."
              />

              <div class="position-absolute start-0 top-0 w-100 h-100 w-lg-75 d-flex align-items-center justify-content-center justify-content-lg-end">
                <ul class="text-white list-unstyled carousel-layers mb-0">
                  <li data-carousel-layer="fade-end">
                    <h2 class="d-inline-block bg-primary px-2 py-3 lh-1 mb-0 fs-1">
                      Feel the difference
                    </h2>
                  </li>
                  <li data-carousel-layer="fade-start">
                    <p class="mb-0 d-inline-block bg-warning text-dark px-2 py-2 lh-1">
                      This is the best quality theme
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev size-40 bg-dark text-white rounded-bottom-end-3 top-50 translate-middle-y"
            type="button"
            data-bs-target="#carouselExampleCaption"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next size-40 bg-dark text-white rounded-bottom-end-3 top-50 translate-middle-y"
            type="button"
            data-bs-target="#carouselExampleCaption"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>

    <section class="position-relative" id="section">
      <div class="container py-9 py-lg-11 position-relative">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6 order-lg-last mb-7 mb-lg-0">
            <h2
              class="position-relative mb-5 display-4 aos-init aos-animate"
              data-aos="fade-up"
            >
              Who Are <span class="text-gradient">We</span>
            </h2>
            <p
              class="w-lg-85 ms-auto mb-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              The Center for Educational Growth (CFEG) is an online and
              in-person school that offers hands-on, flexible classes at an
              affordable price.
            </p>
          </div>
          <div class="col-lg-6 col-xl-5 order-lg-1"></div>
        </div>
      </div>
    </section>

    <section class="position-relative">
      <div class="container position-relative py-9 py-lg-11">
        <div class="row justify-content-between align-items-center">
          <div
            class="col-lg-6 mb-5 mb-lg-0 order-lg-last aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <div class="position-relative p-2">
              <svg
                class="w-100 h-auto"
                preserveAspectRatio="xMidYMid meet"
                width="880"
                height="880"
                viewBox="0 0 880 880"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M488.983 10.2896C457.62 -2.7016 422.38 -2.7016 391.017 10.2896L170.785 101.512C139.422 114.504 114.504 139.422 101.512 170.785L10.2896 391.017C-2.7016 422.38 -2.70161 457.62 10.2896 488.983L101.512 709.215C114.504 740.578 139.422 765.496 170.785 778.488L391.017 869.71C422.38 882.702 457.62 882.702 488.983 869.71L709.215 778.488C740.578 765.496 765.496 740.578 778.488 709.215L869.71 488.983C882.702 457.62 882.702 422.38 869.71 391.017L778.488 170.785C765.496 139.422 740.578 114.504 709.215 101.512L488.983 10.2896Z"
                  fill="url(#pattern0)"
                ></path>
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  ></pattern>
                  <image
                    id="image0_57_4"
                    width="960"
                    height="900"
                    href="assets/img/960x900/4.jpg"
                  ></image>
                </defs>
              </svg>
            </div>
          </div>
          <div
            class="col-lg-5 order-lg-1 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2 class="mb-4 display-4 me-lg-n9">
              What We <span class="text-gradient">Do</span>
            </h2>

            <p class="mb-5">
              We offer students a new way to direct their learning by
              integrating virtual and in-person courses with unique curriculums.
              This approach allows students to become skilled professionals,
              finish high school at their own pace, or pursue an alternative
              career path through vocational programs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="position-relative" id="next">
      <div class="container">
        <div class="row justify-content-between align-items-end">
          <div class="col-lg-10 col-xl-8 mx-auto text-center">
            <span
              class="h6 mb-2 d-block aos-init aos-animate"
              data-aos="fade-up"
            >
              Our Services
            </span>

            <div data-aos="fade-up" class="aos-init aos-animate">
              <svg
                class="width-80 h-auto text-primary mb-5"
                preserveAspectRatio="none"
                width="100%"
                height="6"
                viewBox="0 0 63 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.119995 2.79013C0.119995 2.79013 26.91 -0.589865 62.82 1.93013"
                  stroke="currentColor"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="position-relative bg-light">
      <div class="container">
        <div class="row grid-separator">
          <div class="col-lg-4 py-9 py-lg-11 px-4 px-xl-5">
            <div class="card bg-transparent border-0 h-100">
              <h5 class="mb-4">Course Recovery</h5>
              <div class="mb-4">
                <h2 class="display-3 mb-0">
                  <sup class="fs-6 align-top text-muted lh-1 fw-normal">$</sup>
                  <span class="price">85</span>
                  <sub class="fs-6 text-muted lh-1 fw-normal align-bottom">
                    {" "}
                    / Beginning Monthly Rate
                  </sub>
                </h2>
              </div>

              <h6 class="mb-3">Included</h6>
              <ul class="list-unstyled mb-0 flex-grow-1">
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>All Core Courses</span>
                </li>
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>Weekly Coaching</span>
                </li>
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>Weekly Extensions</span>
                </li>
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>Tutoring</span>
                </li>
              </ul>
              <div class="pt-4 d-grid">
                <a href="#!" class="btn btn-outline-primary btn-lg">
                  Sign up now
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 py-9 py-lg-11 px-4 px-xl-5">
            <div class="card bg-transparent border-0 h-100">
              <h5 class="mb-4">High School Diploma and Classes</h5>
              <div class="mb-4">
                <h2 class="display-3 mb-0">
                  <sup class="fs-6 align-top text-muted lh-1 fw-normal">$</sup>
                  <span class="price">450</span>
                  <sub class="fs-6 text-muted lh-1 fw-normal align-bottom">
                    {" "}
                    / Beginning Monthly Rate
                  </sub>
                </h2>
              </div>
              <h6 class="mb-3">Included</h6>
              <ul class="list-unstyled mb-0 flex-grow-1">
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>All Core Courses</span>
                </li>
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>Advance and Honors Courses</span>
                </li>
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>Virtual or Online</span>
                </li>
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>Small group sessions</span>
                </li>
              </ul>
              <div class="pt-4 d-grid">
                <a href="#!" class="btn btn-lg btn-outline-primary">
                  Sign up now
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 py-9 py-lg-11 px-4 px-xl-5">
            <div class="card bg-transparent border-0 h-100">
              <h5 class="mb-4">Summer and Vocational Programs</h5>
              <div class="mb-4">
                <h2 class="display-3 mb-0">
                  <sup class="fs-6 align-top text-muted lh-1 fw-normal">$</sup>
                  <span class="price">175</span>
                  <sub class="fs-6 text-muted lh-1 fw-normal align-bottom">
                    {" "}
                    / Starting Rate
                  </sub>
                </h2>
              </div>

              <h6 class="mb-3">Included</h6>
              <ul class="list-unstyled mb-0 flex-grow-1">
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>20GB Space</span>
                </li>
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>1 user at a time</span>
                </li>
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>25K files upload</span>
                </li>
                <li class="d-flex align-items-center mb-1">
                  <i class="me-2 fs-4 bi bi-check lh-sm text-muted"></i>
                  <span>3 Months support</span>
                </li>
              </ul>
              <div class="pt-4 d-grid">
                <a href="#!" class="btn btn-lg btn-outline-primary">
                  Sign up now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="position-relative bg-gradient-secondary text-white">
      <div class="container py-9 py-lg-11">
        <div class="d-flex mb-5 align-items-center"></div>
        <div
          id="carouselTestimonials"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="position-relative w-lg-70">
                <figure class="mb-0 position-relative">
                  <svg
                    class="mb-4 text-primary"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 8.6"
                    width="36"
                    height="25.8"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="currentColor"
                      opacity=".3"
                      d="M9.4 8.6c-1.3 0-2.6-.9-2.6-3S8.4 1.1 11.6 0l.4.7c-1.5 1-2.3 2-2.4 3.2V4c.7 0 2.2.5 2.2 2.3 0 1.3-1.1 2.3-2.4 2.3zm-6.7 0c-1.3 0-2.7-1-2.7-3C0 3.5 1.6 1.1 4.9 0l.4.7c-1.5 1-2.3 2-2.5 3.2V4C3.5 4 5 4.5 5 6.3c0 1.3-1.1 2.3-2.3 2.3z"
                    ></path>
                  </svg>
                  <blockquote>
                    <p class="display-5 fw-normal mb-5">
                      "Thanks for showing such amazing concern and dedication to
                      the education of my son Mateo. He may not always show it,
                      but I know he appreciated your efforts. And I did too. "
                    </p>
                  </blockquote>
                  <figcaption>
                    <h6 class="mb-0">Vanessa F.,</h6>
                    <span class="text-muted small">parent</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="carousel-item">
              <div class="position-relative w-lg-70">
                <figure class="mb-0 position-relative">
                  <svg
                    class="mb-4 text-primary"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 8.6"
                    width="36"
                    height="25.8"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="currentColor"
                      opacity=".3"
                      d="M9.4 8.6c-1.3 0-2.6-.9-2.6-3S8.4 1.1 11.6 0l.4.7c-1.5 1-2.3 2-2.4 3.2V4c.7 0 2.2.5 2.2 2.3 0 1.3-1.1 2.3-2.4 2.3zm-6.7 0c-1.3 0-2.7-1-2.7-3C0 3.5 1.6 1.1 4.9 0l.4.7c-1.5 1-2.3 2-2.5 3.2V4C3.5 4 5 4.5 5 6.3c0 1.3-1.1 2.3-2.3 2.3z"
                    ></path>
                  </svg>
                  <blockquote>
                    <p class="display-5 fw-normal mb-5">
                      "Gabriella really enjoyed learning new skills in this
                      summer’s interactive music and surfing classes. She had a
                      chance to open up and express herself."
                    </p>
                  </blockquote>
                  <figcaption>
                    <h6 class="mb-0">Matthew F</h6>
                    <span class="text-muted small">parent</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="carousel-item">
              <div class="position-relative w-lg-70">
                <figure class="mb-0 position-relative">
                  <svg
                    class="mb-4 text-primary"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 12 8.6"
                    width="36"
                    height="25.8"
                    preserveAspectRatio="none"
                  >
                    <path
                      fill="currentColor"
                      opacity=".3"
                      d="M9.4 8.6c-1.3 0-2.6-.9-2.6-3S8.4 1.1 11.6 0l.4.7c-1.5 1-2.3 2-2.4 3.2V4c.7 0 2.2.5 2.2 2.3 0 1.3-1.1 2.3-2.4 2.3zm-6.7 0c-1.3 0-2.7-1-2.7-3C0 3.5 1.6 1.1 4.9 0l.4.7c-1.5 1-2.3 2-2.5 3.2V4C3.5 4 5 4.5 5 6.3c0 1.3-1.1 2.3-2.3 2.3z"
                    ></path>
                  </svg>
                  <blockquote>
                    <p class="display-5 fw-normal mb-5">
                      "The course recovery program allowed me to get a higher
                      GPA, so now I don’t have any failing grades when college
                      admissions look at my transcripts."
                    </p>
                  </blockquote>
                  <figcaption>
                    <h6 class="mb-0">Anita C.</h6>
                    <span class="text-muted small">student</span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev size-40 bg-dark text-white rounded-bottom-end-3 top-50 translate-middle-y"
            type="button"
            data-bs-target="#carouselTestimonials"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next size-40 bg-dark text-white rounded-bottom-end-3 top-50 translate-middle-y"
            type="button"
            data-bs-target="#carouselTestimonials"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
