import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="Let’s Start a Conversation" />
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
              Let’s Start a Conversation
            </h1>
          </div>
        </div>
      </div>
    </section>
    <section class="position-relative">
      <div class="container py-9 py-lg-11">
        <div class="shadow-lg rounded-xl px-4 px-lg-6 py-5 py-lg-7">
          <div class="row">
            <div class="col-md-8 col-lg-7 mb-7 mb-md-0 me-auto">
              <div class="position-relative">
                <p>
                  <b>“Direct Your Learning”</b>, by telling CFEG the services
                  you are interested in and contacting CFEG to enroll. Tell us
                  more about you, and let’s discuss how CFEG works together with
                  parents and students to build an education system that they
                  can customize to meet their learning needs.
                </p>
                <div class="width-60 pt-1 bg-primary mb-5"></div>

                <form
                  name="contact"
                  method="post"
                  class="needs-validation mb-5 mb-lg-7"
                  action="/success"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />
                  <div class="row">
                    <div class="col-sm-6 mb-3">
                      <label class="form-label" htmlFor="name">
                        Your name
                      </label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="John Doe"
                      />
                    </div>

                    <div class="col-sm-6 mb-3">
                      <label class="form-label" htmlFor="email">
                        Your email address
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="john@gmail.com"
                        aria-label="jackwayley@gmail.com"
                      />
                    </div>

                    <div class="w-100"></div>

                    <div class="col-sm-12 mb-3">
                      <label class="form-label" htmlFor="subject">
                        Subject
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Course Recovery"
                      />
                    </div>
                  </div>

                  <div class="mb-3">
                    <label htmlFor="message" class="form-label">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      name="message"
                      placeholder="Hi there...."
                      required=""
                    ></textarea>
                  </div>

                  <div class="d-md-flex justify-content-between align-items-center">
                    <p class="small mb-4 text-muted mb-md-0">
                      We'll get back to you in 1-2 business days.
                    </p>
                    <input
                      type="submit"
                      name="submit"
                      value="Submit message"
                      id="sendBtn"
                      class="btn btn-lg btn-primary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
