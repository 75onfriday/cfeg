import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { withPrefix } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import Seo from "../components/seo"
import homeLoop from "../images/cfeg-loop.gif"
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section class="position-relative overflow-hidden bg-gradient-secondary text-white">
      <div class="w-100 h-100 opacity-25 position-absolute end-0 top-0 bg-cover bg-no-repeat bg-center">
        <div
          class="jarallax bg-dark h-100 w-100"
          data-jarallax-video="mp4:../images/cfeg-loop.mp4"
        >
          <div id="jarallax-container-0" class="video-one">
            <img class="img-respon" src={homeLoop} />
          </div>
        </div>
      </div>

      <div class="container position-relative z-index-2 pt-14 pb-12">
        <div class="row pb-7 pt-lg-12">
          <div class="col-12 mx-auto text-center col-xl-10">
            <h1 class="display-1 mb-5 mb-lg-7">
              Direct Your Learning With The Center For Educational Growth
            </h1>
          </div>
        </div>
      </div>
    </section>
    {/* <section class="position-relative">
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
                      The Center for Educational Growth
                    </h2>
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
                      Direct Your Learning
                    </h2>
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
                      Enroll in Classes Now
                    </h2>
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
    </section> */}

    <section class="position-relative" id="section">
      <div class="container py-9 py-lg-11 position-relative">
        <div class="row justify-content-between align-items-center">
          <div class="col-lg-6 order-lg-last mb-7 mb-lg-0">
            <h2
              class="position-relative mb-5 display-4 aos-init aos-animate"
              data-aos="fade-up"
            >
              Who We <span class="text-gradient">Are</span>
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
          <div class="col-lg-6 col-xl-5 order-lg-1">
            <StaticImage
              src="../images/home-one.jpg"
              class="img-fluid rounded-blob shadow-lg"
              alt=""
            />
          </div>
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
              <StaticImage
                src="../images/home-two.jpg"
                class="img-fluid rounded-blob shadow-lg"
                alt=""
              />
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

            <p
              class="w-lg-85 ms-auto mb-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
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

    <section class="position-relative">
      <div class="w-100 h-75 bg-dark position-absolute start-0 top-0 rounded-top-end-block">
        <svg
          class="position-absolute start-0 bottom-0 text-white"
          preserveAspectRatio="none"
          width="100%"
          height="96"
          viewBox="0 0 1460 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M122 22.8261L0 0V120H1460V0L1338 22.8261C1217 44.1304 973 88.2609 730 88.2609C487 88.2609 243 44.1304 122 22.8261Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div class="container position-relative py-9 py-lg-11 z-index-1">
        <div class="row mb-5 align-items-center">
          <div
            class="col-md-7 mb-4 mb-md-0 aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2
              class="text-white display-4 aos-init aos-animate"
              data-aos="fade-up"
            >
              Our <span class="text-gradient">Services</span>
            </h2>
          </div>
        </div>
        <div class="row">
          <div
            class="col-lg-4 mb-4 mb-lg-0 aos-init aos-animate"
            data-aos="fade-up"
          >
            <article class="card card-hover text-center hover-shadow-lg overflow-hidden border-0 rounded-3 shadow-sm">
              <div class="card-body pb-5 position-relative">
                <h5 class="py-3 mb-0">Credit Recovery</h5>
                <p class="mb-0 px-lg-4">
                  Avoid failure and earn academic credit -
                </p>
                <p class="mb-0 px-lg-4">Let CFEG help "boost your gpa"</p>
                <p class="mb-0">
                  <div class="d-grid mb-0">
                    <a
                      href="/our-services"
                      class="btn btn-primary btn-top rounded-pill hover-lift"
                    >
                      <span>Enroll Now</span>
                    </a>
                  </div>
                </p>
              </div>
            </article>
          </div>
          <div
            class="col-lg-4 mb-4 mb-lg-0 aos-init aos-animate"
            data-aos="fade-up"
          >
            <article class="card card-hover text-center hover-shadow-lg overflow-hidden border-0 rounded-3 shadow-sm">
              <div class="card-body pb-5 position-relative">
                <h5 class="py-3 mb-0">Virtual and in Person Classes</h5>
                <p class="mb-0 px-lg-4">
                  No structured curriculums and classes you choose -
                </p>
                <p class="mb-0 px-lg-4">
                  Learn with CFEG at "your pace your time"
                </p>
                <p class="mb-0">
                  <div class="d-grid mb-0">
                    <a
                      href="/our-services"
                      class="btn btn-primary btn-top rounded-pill hover-lift"
                    >
                      <span>Enroll Now</span>
                    </a>
                  </div>
                </p>
              </div>
            </article>
          </div>
          <div class="col-lg-4 aos-init aos-animate" data-aos="fade-up">
            <article class="card card-hover text-center hover-shadow-lg overflow-hidden border-0 rounded-3 shadow-sm">
              <div class="card-body pb-5 position-relative">
                <h5 class="py-3 mb-0">Career and College Development</h5>
                <p class="mb-0 px-lg-4">
                  Include internships and mentorships in your education -
                </p>
                <p class="mb-0 px-lg-4">
                  Don’t wait CFEG “is a path to careers and higher learning"
                </p>
                <p class="mb-0">
                  <div class="d-grid mb-0">
                    <a
                      href="/our-services"
                      class="btn btn-primary btn-top rounded-pill hover-lift"
                    >
                      <span>Enroll Now</span>
                    </a>
                  </div>
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="position-relative text-center">
      <iframe
        width="100%"
        height="500"
        class="m-auto"
        src="https://www.youtube.com/embed/XLhOAppLLeA"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </section>

    <section class="position-relative bg-gradient-secondary text-white">
      <svg
        class="position-absolute start-0 top-0 flip-y text-white"
        width="100%"
        height="48"
        preserveAspectRatio="none"
        viewBox="0 0 1870 210"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M977.9,76.2 C475.2,-17.4 0.2,132.5 0.2,132.5 L0.2,275.5 L1891.3,275.5 L1891.3,0.7 C1891.3,0.7 1480.6,169.8 977.9,76.2 Z"
        ></path>
      </svg>
      <svg
        class="position-absolute start-0 bottom-0 text-white"
        width="100%"
        height="48"
        preserveAspectRatio="none"
        viewBox="0 0 1870 210"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="currentColor"
          d="M977.9,76.2 C475.2,-17.4 0.2,132.5 0.2,132.5 L0.2,275.5 L1891.3,275.5 L1891.3,0.7 C1891.3,0.7 1480.6,169.8 977.9,76.2 Z"
        ></path>
      </svg>
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

    <section class="position-relative bg-white overflow-hidden">
      <div class="container pt-9 pt-lg-11 position-relative z-index-1">
        <div class="mb-7 w-lg-60 mx-auto text-center">
          <div class="mb-3 aos-init" data-aos="" data-aos-once="false">
            <h2
              class="display-3 splitting-down words chars splitting"
              data-splitting=""
            >
              Our Partners
            </h2>
          </div>

          <div class="mx-auto width-80 pt-1 bg-primary mt-4"></div>
        </div>
        <div class="row mb-7 mb-lg-11 row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
          <div class="col">
            <div class="d-flex align-items-center justify-content-center my-4">
              <StaticImage
                src="../images/maxresdefault.jpeg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>

          <div class="col">
            <div class="d-flex align-items-center justify-content-center my-4">
              <StaticImage
                src="../images/download.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>

          <div class="col">
            <div class="d-flex align-items-center justify-content-center my-4">
              <StaticImage
                src="../images/dspr-logo.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>

          <div class="col">
            <div class="d-flex align-items-center justify-content-center my-4">
              <StaticImage
                src="../images/Edmentum.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>

          <div class="col">
            <div class="d-flex align-items-center justify-content-center my-4">
              <StaticImage
                src="../images/cropped-CFVI_Primary_Logo_2021.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>

          <div class="col">
            <div class="d-flex align-items-center justify-content-center my-4">
              <StaticImage
                src="../images/cropped-logo-300.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>

          <div class="col">
            <div class="d-flex align-items-center justify-content-center my-4">
              <StaticImage
                src="../images/vica_logo_186.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>

          <div class="col">
            <div class="d-flex align-items-center justify-content-center my-4">
              <StaticImage
                src="../images/28183cde-75b1-4897-8232-4a7e59353016-profile-picture.png"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
