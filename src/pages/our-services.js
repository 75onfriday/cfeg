import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const OurServicesPage = () => (
  <Layout>
    <section class="position-relative bg-light">
      <div class="container py-9">
        <div class="row align-items-center">
          <div class="col-md-7 mb-4 mb-md-0">
            <h1 class="mb-0 display-5">
              CFEG is educating differently and this is how -{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>

    <section class="position-relative bg-white">
      <div class="container position-relative pb-9 pb-lg-11">
        <div class="position-relative">
          <div class="row g-md-2 justify-content-center position-relative z-index-1">
            <div
              class="col-md-4 mb-5 mb-md-0 aos-init aos-animate"
              data-aos="fade-up"
            >
              <div class="card shadow-lg card-body py-5 px-4 z-index-1 rounded-3 rounded-3 d-flex flex-column overflow-hidden h-100">
                <div class="position-relative overflow-hidden">
                  <h4>Credit Recovery</h4>
                  <div class="d-flex align-items-end mb-4">
                    <sup class="d-inline-block">$</sup>
                    <div
                      class="price display-4 text-dark"
                      data-as-annual="6"
                      data-as-monthly="9"
                    >
                      85
                    </div>
                  </div>
                  <span class="badge bg-light text-muted rounded-pill">
                    Beginning Monthly Rate
                  </span>
                </div>

                <ul class="text-center list-unstyled py-4 flex-grow-1">
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    Retake Classes
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    Get Better Grades
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    Get Graduation Credits
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    Increase Your GPA
                  </li>
                </ul>
                <div class="d-grid">
                  <a
                    href="#modalBasic"
                    data-bs-toggle="modal"
                    aria-expanded="false"
                    class="modal-text"
                  >
                    Learn More About Credit Recovery
                  </a>
                  <a
                    href="/contact"
                    class="btn btn-outline-secondary btn-top rounded-pill hover-lift"
                  >
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="col-md-4 mb-5 mb-md-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="card shadow-lg z-index-1 card-body py-5 px-4 rounded-3 d-flex flex-column overflow-hidden h-100">
                <div class="position-relative overflow-hidden">
                  <h4>Virtual And In Person Classes</h4>
                  <div class="d-flex align-items-end mb-4">
                    <sup class="d-inline-block">$</sup>
                    <div
                      class="price display-4"
                      data-as-annual="16"
                      data-as-monthly="29"
                    >
                      120
                    </div>
                  </div>
                  <span class="badge bg-light text-muted rounded-pill">
                    Beginning Monthly Rate
                  </span>
                </div>

                <ul class="text-center list-unstyled py-4 flex-grow-1">
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    Individualized Core Classes
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    Advance and Honors Courses
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    Virtual and In-Person Learning
                  </li>
                  <li class="pb-2 mb-2 d-table">Small group sessions</li>
                </ul>
                <div class="d-grid">
                  <a
                    href="#modalBasic2"
                    data-bs-toggle="modal"
                    aria-expanded="false"
                    class="modal-text"
                  >
                    Learn More About Virtual And In Person Classes
                  </a>
                  <a
                    href="/contact"
                    class="btn btn-outline-secondary btn-top rounded-pill hover-lift"
                  >
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              class="col-md-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              <div class="card shadow card-body py-5 px-4 rounded-3 overflow-hidden h-100">
                <div class="position-relative overflow-hidden">
                  <h4>Career And College Development</h4>
                  <div class="d-flex align-items-end mb-4">
                    <sup class="d-inline-block">$</sup>
                    <div
                      class="price display-4 text-dark"
                      data-as-annual="49"
                      data-as-monthly="79"
                    >
                      175
                    </div>
                  </div>
                  <span class="badge text-muted rounded-pill bg-light">
                    Beginning Monthly Rate
                  </span>
                </div>

                <ul class="text-center list-unstyled py-4 flex-grow-1">
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    Small Group Sessions
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    Instruction By Experts
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    Enrichment And fun
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    Full Year Skill Development
                  </li>
                </ul>
                <div class="d-grid">
                  <a
                    href="#modalBasic3"
                    data-bs-toggle="modal"
                    aria-expanded="false"
                    class="modal-text"
                  >
                    Learn More About Career And College Development
                  </a>
                  <a
                    href="/contact"
                    class="btn btn-outline-secondary rounded-pill hover-lift"
                  >
                    <span>Get started</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="modal fade"
      id="modalBasic"
      tabindex="-1"
      aria-labelledby="modalBasicLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header border-0 bg-light">
            <h5 class="modal-title">COURSE RECOVERY</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body py-5 border-0">
            <h6>Type of Service </h6>
            <p>
              Course recovery is a term used to describe the retaking of a
              course. High Schoolers can retake courses they failed or retake
              courses to improve a grade.
            </p>
            <h6>What’s Included</h6>
            <ul>
              <li>
                Recovery classes reteaching the concepts or lessons a student
                did not understand during the school year
              </li>
              <li>
                {" "}
                Increasing grade point average or GPA if a student failed and
                received a grade of 59-69 CFEG course recovery provides for a
                better grade in that course of 70 through 90 to improve
                students’ overall GPA
              </li>
              <li>
                {" "}
                All Core Courses and some electives are available with CFEG, and
                its course recovery services include weekly coaching, daily
                tutoring, and weekly extensions when needed. 
              </li>
            </ul>
            <h6>Pricing</h6>
            <p class="mb-0">
              Students pay $85 per month for 1 course or $160.00 per month for 2
              courses
            </p>
            <h6 class="btn-top">Eligibility</h6>
            <p class="mb-0">
              CFEG’s course recovery is available for enrollment all year round,
              and all high school students from any school system (public or
              private) are eligible to attend.
            </p>
          </div>
          <div class="modal-footer bg-light border-0">
            <button
              type="button"
              class="btn btn-white btn-sm"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="modalBasic2"
      tabindex="-1"
      aria-labelledby="modalBasic2Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header border-0 bg-light">
            <h5 class="modal-title">HIGH SCHOOL DIPLOMA AND CLASSES</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body py-5 border-0">
            <h6>Type of Service</h6>
            <p>
              A CFEG Diploma means that students have met the Virgin Islands’
              Board of Education course requirements, which includes 21 credits.
              However, CFEG students can also choose educational tracts not
              offered in public and private schools including any of the
              following:
            </p>
            <p class="mb-0">
              <b>College tract</b> that require 15 core courses;
              <br />
              <b>General tract</b> that require 12 core courses with interest
              based electives;
              <br />
              <b>Vocational tract</b> that require 12 core courses, electives
              and a practicum;
            </p>
            <h6 class="btn-top">What’s Also Included</h6>
            <ul>
              <li>
                All Core Courses in Math, Science, Social Studies, and English;{" "}
              </li>
              <li>
                Advanced Core Courses in Math, Science, Social Studies, and
                English;{" "}
              </li>
              <li>
                Hands-on electives, humanities, music, sports, fine arts,
                enrichment courses, and community Service yearly;
              </li>
              <li>
                Small classes conducted 2-3 times weekly with instructors and
                teachers
              </li>
            </ul>
            <h6>Pricing </h6>
            <p class="mb-0">
              Parents pay $120 per month per course or $450 per month for 4
              courses
            </p>
            <h6 class="btn-top">Eligibility </h6>
            <p class="mb-0">
              CFEG’s high school diploma and class programs are self paced and
              individualized, and open toall students interested in getting a
              high school diploma including, younger students seeking to
              accelerate into high school, and international or transfer
              students (transitioning 8th and 9th-12th grade students). CFEG
              also accepts all students all year round!
            </p>
          </div>
          <div class="modal-footer bg-light border-0">
            <button
              type="button"
              class="btn btn-white btn-sm"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="modalBasic3"
      tabindex="-1"
      aria-labelledby="modalBasic3Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header border-0 bg-light">
            <h5 class="modal-title">SUMMER AND VOCATIONAL PROGRAM </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body py-5 border-0">
            <h6>Type of Service</h6>
            <p>
              CFEG’s Summer school and vocational programs offer students an
              opportunity to take any of the above CFEG services in the summer
              (Course Recovery or High School Diploma and Classes) and, offers
              students career base activities along with courses that develop
              life skills and entrepreneurship for students.
            </p>
            <h6>Pricing</h6>
            <p class="mb-0">
              The cost of CFEG’s summer and vocational program is $175.00 per
              month, or FREE for students who qualify for CFEG’s Summer
              Enrichment Scholarships
            </p>
            <p>Example Of What’s Included From 2021-2022</p>
            <ul>
              <li>
                <b>ART & DRAWING</b> (beginning & intermediate) offered online 3
                days weekly from 4:00-5:00pm; digital design, logos, color
                schemes, and presentation
              </li>
              <li>
                <b>MARTIAL ARTS AND SURFING</b> (beginning, intermediate &
                advance) in-person at school/office on St Croix only, Tuesdays &
                Thursdays (2 days) weekly 3:00-4:00pm the cost is $100.00 for 5
                weeks and includes a uniform; physical fitness, mental fitness,
                behavioral health and sports therapy;
              </li>
              <li>
                <b>MUSIC</b> (beginning & intermediate) online  Mondays &
                Wednesdays (2 days) weekly 3:00-4:00pm; beat and music making,
                chords, and melody production{" "}
              </li>
              <li>
                <b>PYTHON PROGRAMMING/CODING</b> (beginning & intermediate);
                coding, branding, and web design
              </li>
              <li>
                <b>DIVERSITY/VIRTUE PROJECT</b> the focus is on teaching
                students decision making
              </li>
              <li>
                <b>AGRICULTURE</b> sustainable farming, medicinal plant theory,
                farm business formation{" "}
              </li>
            </ul>
            <h6 class="btn-top">Eligibility</h6>
            <p class="mb-0">
              CFEG’s summer and vocational programs are open to all students any
              age any grade.
            </p>
          </div>
          <div class="modal-footer bg-light border-0">
            <button
              type="button"
              class="btn btn-white btn-sm"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default OurServicesPage
