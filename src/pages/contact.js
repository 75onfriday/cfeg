import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section class="position-relative">
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
              Get in touch with us
            </h1>
            <p class="mb-0 lead w-lg-85">
              Do you have questions about our products or need a quote? Use the
              contact form below and we will get back to you.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="position-relative">
      <div class="container py-9 py-lg-11">
        <div class="row">
          <div class="col-md-8 col-lg-7 mb-7 mb-md-0 me-auto">
            <div class="position-relative">
              <h1>Contact form</h1>
              <p class="mb-3 w-lg-75">
                Use the contact form if you have questions about our products.
                Our sales team will be happy to help you:
              </p>
              <div class="width-60 pt-1 bg-primary mb-5"></div>

              <form
                action="#"
                method="post"
                role="form"
                class="needs-validation mb-5 mb-lg-7"
                novalidate=""
              >
                <div class="row">
                  <div class="col-sm-6 mb-3">
                    <label class="form-label" for="name">
                      Your name
                    </label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="John Doe"
                      required=""
                    />
                  </div>

                  <div class="col-sm-6 mb-3">
                    <label class="form-label" for="email">
                      Your email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="john@gmail.com"
                      aria-label="jackwayley@gmail.com"
                      required=""
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address
                    </div>
                  </div>

                  <div class="w-100"></div>

                  <div class="col-sm-12 mb-3">
                    <label class="form-label" for="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Web Design"
                      required=""
                      pwa2-uuid="EDITOR/input-09A-DCF-22300-4A0"
                      pwa-fake-editor=""
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <label for="message" class="form-label">
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
    </section>
  </Layout>
)

export default ContactPage
