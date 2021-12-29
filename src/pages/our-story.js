import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const StoryPage = () => (
  <Layout>
    <section class="position-relative bg-tint-primary">
      <svg
        class="w-100 text-white position-absolute bottom-0 start-0"
        preserveAspectRatio="none"
        width="1200"
        height="60"
        viewBox="0 0 1200 148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 126.857L1200 0V148H0V126.857Z"
          fill="currentColor"
        ></path>
      </svg>
      <div class="container position-relative pt-14 pb-9">
        <div class="row align-items-center pb-5 pb-lg-7 pt-lg-9">
          <div
            class="col-md-10 col-lg-8 aos-init aos-animate"
            data-aos=""
            data-aos-delay="300"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 class="display-2 mb-2 splitting-up" data-splitting="">
              Our Story
            </h1>
            {/* <p class="mb-0 lead w-lg-85">
              Contact us to explore our education methods and learn more about
              how CFEG’s programs and teachers provide students and parents the
              options they need. Talk with us about creating a customized
              educational experience for YOU.
            </p> */}
          </div>
        </div>
      </div>
    </section>
    <section class="position-relative">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-9">
            <div class=" px-4 py-5 ">
              {/* <h1 class="story-head">Our Story</h1> */}
              <StaticImage class="mb-3" src="../images/ms-cannon.jpg" />
              <h2 class="story-subhead">How It Began</h2>
              <p
                class="aos-init aos-animate btn-top story-body"
                data-aos="fade-down"
                data-aos-delay="150"
              >
                During the 70’s when I attended public high school in the Virgin
                Islands, I received no guidance as a high school student. I
                wanted to attend college, but the counselors dismissed me
                because I had an immigrant status (I was born in Trinidad &
                Tobago). My confidence was shook by the school system that was
                meant to help me, but the systems’ and its counselors dismissal
                of me drove me to graduate from high school and attend college.
              </p>
              <h2 class="story-subhead">The Founder Story </h2>
              <p
                class="mb-0 aos-init aos-animate story-body"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                My challenges with the school system and adverse encounters with
                school counselors inspired me to pursue a career in counseling
                and education. I found a passion and desire to provide the help
                I didn’t received to every student regardless of their race,
                nationality, gender, or economic status. I devoted my life to
                the guidance of young people because I believe they deserve such
                guidance. Additionally, during my 32 years of public service in
                the Virgin Islands, I helped thousands of students navigate the
                educational system and receive their high school diplomas and
                graduate degrees. In my tenure as a public servant to education,
                no student under my care was turned away from obtaining the
                education and pursuit of learning they wanted.
              </p>
              <h2 class="story-subhead">The Creation Of CFEG</h2>
              <p
                class="mb-0 aos-init aos-animate story-body"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Although my career as a counselor led to student success, I
                wanted to do more to provide students a system of education that
                was also an accomplishment. So when I retired from working
                within the public school system in 2018, I immediately started
                formulating the plans for a new effective educational solution
                for students. I know I wanted students to feel that their
                individual lives mattered, and I wanted students to have an
                alternative to the brick and mortar learning systems, which does
                not alway offer the type of education made to fit each
                individual student’s needs. So, in 2019 I founded “The Center
                for Educational Growth, Inc. (CFEG)” a non-profit virtual and in
                person school devoted to building new ways for professionals,
                teachers, and counselor to educate, and a new way for every type
                of student to direct their learning.
              </p>
              <h4 class="story-subhead btn-top">CFEG ACCOMPLISHMENTS</h4>
              <div class="row">
                <div
                  class="col-sm-6 mb-4 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="150"
                >
                  <div class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body">
                    <p class="mb-0">
                      Since 2019 CFEG helped students raise their GPA from 2.0
                      to 3.0
                    </p>
                  </div>
                </div>
                <div
                  class="col-sm-6 mb-4 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="250"
                >
                  <div
                    class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body"
                    style={{ backgroundColor: "#CCD4D9" }}
                  >
                    <p class="mb-0">
                      In 2020 CFEG students entering into the 6th grade now read
                      at the 11th grade level
                    </p>
                  </div>
                </div>

                <div
                  class="col-sm-6 mb-4 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <div
                    class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body"
                    style={{ backgroundColor: "#99A9B3" }}
                  >
                    <p class="mb-0">
                      In 2021 CFEG Academic Programs accelerated 8 sophomores to
                      the senior grade level
                    </p>
                  </div>
                </div>
                <div
                  class="col-sm-6 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="350"
                >
                  <div
                    class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body"
                    style={{ backgroundColor: "#667F8D", color: "#fff" }}
                  >
                    <p class="mb-0">
                      In 2022 CFEG seniors will be graduating with college
                      credits
                    </p>
                  </div>
                </div>
                <div
                  class="col-sm-6 mb-4 mb-sm-0 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div
                    class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body"
                    style={{ backgroundColor: "#335467", color: "#fff" }}
                  >
                    <p class="mb-0">
                      100% of CFEG High School Seniors graduated and were
                      accepted into College
                    </p>
                  </div>
                </div>
                <div
                  class="col-sm-6 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-delay="450"
                >
                  <div
                    class="card py-6 px-4 shadow hover-lift-lg hover-shadow-lg card-body"
                    style={{ backgroundColor: "#002A41", color: "#fff" }}
                  >
                    <p class="mb-0">
                      100% of CFEG Recovery Students received grades 27% higher
                      in previously failed classes
                    </p>
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

export default StoryPage
