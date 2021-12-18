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
            <h1 class="mb-0 display-5">Our Services</h1>
          </div>
          <p>
            Needs an intro sentence or two that incorparates all services in a
            general statment
          </p>
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
                  <h4>Course Recovery</h4>
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
                    Weekly Coaching
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    <i class="bi bi-patch-check-fill fs-5 lh-1 me-2 text-success align-middle"></i>
                    Increase Your GPA and Get Graduation Credits
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    <i class="bi bi-patch-check-fill fs-5 lh-1 me-2 text-success align-middle"></i>
                    Tutoring
                  </li>
                </ul>
                <div class="d-grid">
                  <a
                    href="/contact"
                    class="btn btn-outline-secondary btn-hover-arrow rounded-pill hover-lift"
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
                  <h4>High School Diploma and Classes</h4>
                  <div class="d-flex align-items-end mb-4">
                    <sup class="d-inline-block">$</sup>
                    <div
                      class="price display-4"
                      data-as-annual="16"
                      data-as-monthly="29"
                    >
                      450
                    </div>
                  </div>
                  <span class="badge bg-light text-muted rounded-pill">
                    Beginning Monthly Rate
                  </span>
                </div>

                <ul class="text-center list-unstyled py-4 flex-grow-1">
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    <i class="bi bi-patch-check-fill fs-5 lh-1 me-2 text-success align-middle"></i>
                    All Core Courses
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    <i class="bi bi-patch-check-fill fs-5 lh-1 me-2 text-success align-middle"></i>
                    Advance and Honors Courses
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    <i class="bi bi-patch-check-fill fs-5 lh-1 me-2 text-success align-middle"></i>
                    Virtual or Online
                  </li>
                  <li class="pb-2 mb-2 d-table">
                    <i class="bi bi-patch-check-fill fs-5 lh-1 me-2 text-success align-middle"></i>
                    Small group sessions
                  </li>
                </ul>
                <div class="d-grid">
                  <a
                    href="/contact"
                    class="btn btn-outline-secondary btn-hover-arrow rounded-pill hover-lift"
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
                  <h4>Summer and Vocational Programs</h4>
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
                    Starting Rate
                  </span>
                </div>

                <ul class="text-center list-unstyled py-4 flex-grow-1">
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    <i class="bi bi-patch-check-fill fs-5 lh-1 me-2 text-success align-middle"></i>
                    6-week curriculum
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    <i class="bi bi-patch-check-fill fs-5 lh-1 me-2 text-success align-middle"></i>
                    Mentorships and Internships
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    <i class="bi bi-patch-check-fill fs-5 lh-1 me-2 text-success align-middle"></i>
                    Instructed by experts in the field
                  </li>
                  <li class="pb-2 mb-2 border-dashed border-bottom d-table">
                    <i class="bi bi-patch-check-fill fs-5 lh-1 me-2 text-success align-middle"></i>
                    Enrichment and fun
                  </li>
                </ul>
                <div class="d-grid">
                  <a
                    href="/contact"
                    class="btn btn-outline-secondary btn-hover-arrow rounded-pill hover-lift"
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

    <section class="position-relative border-bottom">
      <div class="container py-9 py-lg-11 position-relative z-index-1">
        <div class="row align-items-center">
          <div class="col-md-10 col-lg-9 col-xl-8 mx-auto">
            <div>
              <nav class="mb-4">
                <div class="nav nav-pills nav-fill" role="tablist">
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    href="#tab3-home"
                    role="tab"
                    aria-selected="false"
                  >
                    Credit Recovery
                  </a>
                  <a
                    class="nav-link"
                    data-bs-toggle="tab"
                    href="#tab3-profile"
                    role="tab"
                    aria-selected="false"
                  >
                    High School Diploma and Classes
                  </a>
                  <a
                    class="nav-link active"
                    data-bs-toggle="tab"
                    href="#tab3-contact"
                    role="tab"
                    aria-selected="true"
                  >
                    Summer and Vocational Programs
                  </a>
                </div>
              </nav>
              <div class="tab-content">
                <div class="tab-pane fade" id="tab3-home" role="tabpanel">
                  <p>
                    Credit recovery is a term used to describe the retaking of a
                    course. High Schoolers can retake courses they failed or
                    retake courses to improve a grade. Recovery classes reteach
                    only the concepts or lessons you did not understand during
                    the school year. Depending on how much time you spend on
                    your coursework, you can finish a course in as little as 2
                    weeks. If you have a grade of 59 or 69 you should retake the
                    classes as a recovery course. If your grade point
                    average(GPA) is 70 or 75 you should consider retaking
                    classes with grades of 70’s to improve your overall GPA.
                    Failure is not an option so make sure you sign up with our
                    course recovery program at CFEG we are here for you.
                  </p>
                  <p>
                    All Core Courses and some electives are available, with
                    weekly coaching, tutoring and weekly extensions when needed.
                  </p>
                  <p>
                    Students pay $85 per month for 1 course or $160.00 per month
                    for 2 courses
                  </p>
                  <p>
                    There is year round open enrollment and students from any
                    high school public or private can enroll. Simply contact us
                    and request a registration link.
                  </p>
                  <div class="d-grid">
                    <a
                      href="/contact"
                      class="btn btn-outline-secondary btn-hover-arrow rounded-pill hover-lift"
                    >
                      <span>Get started</span>
                    </a>
                  </div>
                </div>
                <div class="tab-pane fade" id="tab3-profile" role="tabpanel">
                  <p>
                    Earn your high school diploma with flexible scheduling and a
                    challenging curriculum{" "}
                  </p>
                  <p>
                    A CFEG Diploma means that students have met the Virgin
                    Islands Board of Education course requirements. 21 credits
                    are needed for a diploma. Students can choose a College
                    tract that would require 15 core courses; A General tract
                    that would require 12 core courses with interest based
                    electives or A Vocational tract that would require 12 core
                    courses, electives to include a practicum.
                  </p>
                  <p>
                    Included in the diploma program are all Core Courses in
                    Math, Science, Social Studies, and English; Advanced Core
                    Courses in Math, Science, Social Studies, and English;
                    Hands-on electives and fine arts enrichment courses.{" "}
                  </p>
                  <p>
                    All students are required to complete Community Service
                    yearly.
                  </p>
                  <p>
                    Classes are small and are conducted 2-3 times weekly with
                    instructors/teachers.
                  </p>
                  <p>
                    Payments are $120 per month per course or $450 per month for
                    4 courses
                  </p>
                  <p>
                    Anyone interested in getting a high school diploma,
                    accelerating high school students, international or transfer
                    students, transitioning 8th and 9th-12th grade students.
                    Learning is self paced and individualized.
                  </p>
                  <p>
                    CFEG accepts students year round however most students would
                    wish to start in our Spring (January) or Fall (August)
                    Enrollment. Usually students complete courses between 10-18
                    weeks.{" "}
                  </p>
                  <div class="d-grid">
                    <a
                      href="/contact"
                      class="btn btn-outline-secondary btn-hover-arrow rounded-pill hover-lift"
                    >
                      <span>Get started</span>
                    </a>
                  </div>
                </div>
                <div
                  class="tab-pane fade active show"
                  id="tab3-contact"
                  role="tabpanel"
                >
                  <h6>CFEG Community Programs</h6>
                  <p>
                    Our Summer School Program offers students an opportunity to
                    take core classes they failed during the school year.
                    Students have six weeks to complete the courses and can take
                    up to 2 classes for a full credit. The credits can be
                    transferred to their home school. Students should bring a
                    summer school referral form with a final report card
                    attached from their home school counselor or school
                    registrar. The cost of our summer school is $175.00
                  </p>
                  <p>
                    Our Summer Enrichment Program offers students activities
                    such as Art and Surfing. Our offerings depend on grants and
                    sponsor funding and will be announced in May. Summer
                    enrichment is usually free to the community.
                  </p>
                  <h6>Vocational and Interest Based Programs</h6>
                  <p>
                    These programs are offered to the community so students can
                    experience unique ideas by taking new and innovative
                    classes. These Courses develop students’ creativity. Hones
                    their critical thinking and helps them build better decision
                    making skills. These courses are:{" "}
                  </p>
                  <ul>
                    <li>
                      ART & DRAWING (beginning & intermediate) offered online 3
                      days weekly from 4:00-5:00pm
                    </li>
                    <li>
                      MARTIAL ARTS (beginning, intermediate & advance) in-person
                      at school/office on St Croix only, Tuesdays & Thursdays (2
                      days) weekly 3:00-4:00pm the cost is $100.00 for 5 weeks
                      and includes a uniform.{" "}
                    </li>
                    <li>
                      PYTHON PROGRAMMING/CODING (beginning & intermediate) TBA
                    </li>
                    <li>
                      MUSIC (beginning & intermediate) online Mondays &
                      Wednesdays (2 days) weekly 3:00-4:00pm{" "}
                    </li>
                    <li>
                      DIVERSITY/VIRTUE PROJECT the focus is on teaching students
                      decision making TBA
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a
                      href="/contact"
                      class="btn btn-outline-secondary btn-hover-arrow rounded-pill hover-lift"
                    >
                      <span>Get started</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default OurServicesPage
