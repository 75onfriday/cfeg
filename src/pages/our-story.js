import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StoryPage = () => (
  <Layout>
    <section class="position-relative bg-light">
      <div class="container py-9">
        <div class="row align-items-center">
          <div class="col-md-7 mb-4 mb-md-0">
            <h1 class="mb-0 display-5">Our Story</h1>
          </div>
        </div>
      </div>
    </section>
    <section className="position-relative">
      <div class="container py-9 py-lg-11 overflow-hidden position-relative">
        <div class="row justify-content-between">
          <div
            class="col-md-4 aos-init aos-animate"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h4 class="mb-5">About Company</h4>
          </div>
          <div class="col-md-8 col-xl-7">
            <p
              class="lead aos-init aos-animate"
              data-aos="fade-down"
              data-aos-delay="150"
            >
              During the 70’s when I attended public high school in the Virgin
              Islands, I received no guidance as a high school student. I wanted
              to attend college, but the counsellors dismissed me because I had
              an immigrant status (I was born in Trinidad & Tobago). My
              confidence was shook, but I managed to overcome and attend college
              and graduate school.
            </p>
            <p
              class="mb-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              The adverse encounters with the school counsellors inspired me to
              pursue a career in counselling and education. I found a passion
              and desire to help students regardless of their race, nationality
              or gender. During my 32 years of public service in the Virgin
              Islands, I helped thousands of students navigate the educational
              system and recieve their high school diplomas.
            </p>
            <p
              class="mb-0 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Although I loved my career, I felt like I could do more. So when I
              retired in 2018 I started formulating the plans for a new
              effective educational solution for students. I know I wanted them
              to feel that their individual lives mattered and I wanted them to
              have an alternative to the regular mundane brick and mortar. So, I
              founded The Center for Educational Growth.
            </p>
          </div>
        </div>
        <hr class="my-6 my-lg-9" />

        <div class="row justify-content-between">
          <div
            class="col-md-4 aos-init aos-animate"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h4 class="mb-5">Stats about CFEG:</h4>
          </div>
          <div class="col-md-8 col-xl-7">
            <div class="row">
              <div
                class="col-sm-6 mb-4 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="150"
              >
                <div class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body">
                  <p class="mb-0">Help raise students GPA’s from 2.0 to 3.0</p>
                </div>
              </div>
              <div
                class="col-sm-6 mb-4 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="250"
              >
                <div class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body">
                  <p class="mb-0">
                    Promote all high school seniors to graduation
                  </p>
                </div>
              </div>

              <div
                class="col-sm-6 mb-4 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <div class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body">
                  <p class="mb-0">
                    Matriculate 100% of high school seniors to the college or
                    military school of their choice
                  </p>
                </div>
              </div>
              <div
                class="col-sm-6 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="350"
              >
                <div class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body">
                  <p class="mb-0">
                    Increase the reading proficiency of students reading on a
                    6th-grade level to the 11th-grade level
                  </p>
                </div>
              </div>
              <div
                class="col-sm-6 mb-4 mb-sm-0 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body">
                  <p class="mb-0">
                    Helped 15 students through the course recovery program,
                    increasing scores by 27%
                  </p>
                </div>
              </div>
              <div
                class="col-sm-6 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-delay="450"
              >
                <div class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body">
                  <p class="mb-0">
                    Accelerate the promotion of 8 sophomore students to senior
                    grade level
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default StoryPage
