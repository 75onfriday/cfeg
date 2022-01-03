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
              {/* <StaticImage class="mb-3" src="../images/ms-cannon.jpg" /> */}
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
                Tobago). My confidence was shook by the school system and the
                counselors that refused to develop my learning skills, and their
                dismissal drove me to graduate from high school and attend
                college.
              </p>
              <StaticImage
                src="../images/ms-cannon.jpg"
                class="img-fluid rounded-blob shadow-lg"
                alt=""
              />
              <h2 class="story-subhead">The Founder Story </h2>
              <p
                class="mb-0 aos-init aos-animate story-body"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                My challenges with the school system and adverse encounters with
                school counselors inspired me to pursue a career in counseling
                and education. My passion and desire to provide students the
                help I did not receive allowed me to assist every student
                regardless of their race, nationality, gender, or economic
                status. I devoted my life to the guidance of young people
                because I believe they deserve such guidance. During my 32 years
                of public service in the Virgin Islands, I helped thousands of
                students navigate education systems, receive their high school
                diplomas, and pursue graduate degrees. In my tenure as a public
                servant to education, no student under my care has been turned
                away from obtaining the education and pursuit of learning they
                wanted.
              </p>
              <h2 class="story-subhead">Formation Of CFEG</h2>
              <p
                class="mb-0 aos-init aos-animate story-body"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Although my career as a counselor led to student success, I
                wanted to do more, create new ways to learn, and build students
                a system of education that was an accomplishment. In 2018, I
                retired from working within the public school system and
                immediately started planning a new way to offer students
                education solutions. I knew I wanted students to feel that their
                individual lives mattered. I wanted students to have an
                alternative to the brick and mortar school systems, which do not
                always offer students the type of education made to fit their
                individual needs. In 2019, I founded the non-profit The Center
                for Educational Growth, Inc. (“CFEG”), creating a virtual and in
                person school devoted to building education solutions and new
                ways for professionals, teachers, and counselors to educate.
                CFEG was created to provide parents with more education options
                for their children, and CFEG specializes in providing students
                the tools they need to direct their learning.
              </p>
              <h4
                class="story-subhead btn-top text-center"
                style={{ marginTop: "60px" }}
              >
                CFEG Accomplishments{" "}
              </h4>
              <div class="row text-center">
                <div class="">
                  <div class="py-6 px-4" style={{ backgroundColor: "#E8E5E5" }}>
                    <p class="mb-0">
                      Since 2019 CFEG helped students raise their GPA from 2.0
                      to 3.0
                    </p>
                  </div>
                </div>
                <div class="">
                  <div class="py-6 px-4" style={{ backgroundColor: "#CCD4D9" }}>
                    <p class="mb-0">
                      In 2020 CFEG students entering into the 6th grade now read
                      at the 11th grade level
                    </p>
                  </div>
                </div>

                <div class="">
                  <div class="py-6 px-4" style={{ backgroundColor: "#99A9B3" }}>
                    <p class="mb-0">
                      In 2021 CFEG Academic Programs accelerated 8 sophomores to
                      the senior grade level
                    </p>
                  </div>
                </div>
                <div class="">
                  <div
                    class="py-6 px-4"
                    style={{ backgroundColor: "#667F8D", color: "#fff" }}
                  >
                    <p class="mb-0">
                      In 2022 CFEG seniors will be graduating with college
                      credits
                    </p>
                  </div>
                </div>
                <div class="">
                  <div
                    class="py-6 px-4"
                    style={{ backgroundColor: "#335467", color: "#fff" }}
                  >
                    <p class="mb-0">
                      100% of CFEG High School Seniors graduated and were
                      accepted into College
                    </p>
                  </div>
                </div>
                <div class="">
                  <div
                    class="py-6 px-4"
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
