import React from "react";
import "./Home.css";
var icon = require("./files/icons_choice.png");

const Homepage = () => {
  return (
    <>
      <main className="main">
        <div className="top-banner" />
        <div className="header-gradient" />
        <div className="page-title">
          <div className="grid-container">
            <h1>
              CHECK US OUT
            </h1>

            <h2 className="header-span">
              Whether you’re looking for software solutions to suit you story or
              a crop of excellent partners to execute that, we are here for you.
            </h2>
          </div>
        </div>

        <div className="grid-container full">
          <div className="grid-x page-content">
            <section>
              <article>
                <div className=" general-section">
                  <div className="wrap grid-big grid-container full">
                    <div className=" large-9">
                      <p>
                        We are a team of vibrant thinkers, dedicated to the
                        concepts of great value, excellence, and love. We always
                        work to solve problems and deliver results on time. We
                        are constantly reinventing ourselves to outdo our best
                        inventions.
                      </p>

                      <p>
                        We take away our customers’ pain points by delivering
                        tech solutions that make their business processes
                        easier, faster and more reliable. As a social
                        enterprise, the ability to provide tech solutions and
                        empower Africans and their businesses uniquely motivate
                        us. Our default mindset is to make life easier for
                        people around us, both in words and action.
                      </p>

                      <h2>Want to know more?</h2>

                      <ul>
                        <li>
                          <a href="#!">Our vision</a>
                        </li>
                        <p>
                          Our vision is to be Africa’s leading tech platform
                          that connects innovation to global opportunities.
                        </p>

                        <li>
                          <a href="#!">Our Mission</a>
                        </li>
                        <p>
                          Our mission is to inspire and empower the next
                          generation of tech experts and innovators to build
                          transferable and transportable skills set for the
                          fast-changing global workspace.
                        </p>
                      </ul>

                      <h3 className="check-out">
                        Check out the chart below to see our service payment flexibility
                      </h3>

                      <table>
                        <thead>
                          <tr>
                            <th></th>
                            <th>Cost</th>
                            <th>Payment Plan</th>
                            <th>Customers Certisfaction</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">Sofware Solutions</th>
                            <td>Negotiable</td>
                            <td>Flexible</td>
                            <td>&#10004;</td>
                          </tr>
                          <tr>
                            <th scope="row">Outsourcing</th>
                            <td>$5000</td>
                            <td>Flexible</td>
                            <td>&#10004;</td>
                          </tr>
                          <tr>
                            <th scope="row">Hosting and Application Management</th>
                            <td>Vavies</td>
                            <td>Negotiable</td>
                            <td>&#10004;</td>
                          </tr>
                          <tr>
                            <th scope="row">Software Development*</th>
                            <td>Varies</td>
                            <td>None</td>
                            <td>&#10004;</td>
                          </tr>
                          <tr>
                            <td>&nbsp;</td>

                            <td>
                              <a className="button" href="#!">
                                Reach Out
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <h2>Our Services</h2>
                      <p>
                        We are driven by impact! We take away our customers’
                        pain points by delivering tech solutions that make their
                        business processes easier, faster and more reliable. As
                        a social enterprise, the ability to provide tech
                        solutions and empower Africans and their businesses
                        uniquely motivate us. Our default mindset is to make
                        life easier for people around us, both in words and
                        action.
                      </p>
                      <ul>
                        <li>
                          <a href="#!">Software Solutions</a>
                        </li>
                        <li>
                          <a href="#!">Outsourcing</a>
                        </li>
                        <li>
                          <a href="#!">Software Development</a>
                        </li>
                        <li>
                          <a href="#!">Hosting and Application Management</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="wrap grid-container">
                  <div className="grid">
                    <div className="align-center media-image">
                      <img className="img-fluid b-lazy" src={icon}  alt=" "/>
                    </div>
                    <div style={{ marginLeft: "-5rem" }}>
                      <h2>Why Raven Access?</h2>

                      <h4>We Are Experts</h4>
                      <p>
                        Deep expertise in enterprise technology, software and
                        platform services.
                      </p>

                      <h4>We are agile.</h4>
                      <p>A flexible, adaptive, extension of your teams.</p>

                      <h4>We care about you</h4>
                      <p>
                        Cultivating a caring culture that transfers to your
                        customers.
                      </p>

                      <h4>We think ahead</h4>
                      <p>We focus on your long-term and strategic success.</p>

                      <a href="#!" className="button">
                        Meet With Us
                      </a>
                    </div>
                  </div>
                </div>

                <div className=" accordion-section">
                  <div className="wrap">
                        <ul
                          className="accordion"
                          data-responsive-accordion-tabs="accordion"
                          data-multi-expand="true"
                          data-allow-all-closed="true"
                        >
                          <li
                            className=" accordion-item"
                            data-accordion-item="data-accordion-item"
                            data-q2-deep-link-id="cash-back-checking-163"
                          >
                            <div className="accordion-title">
                              <h2>One Time Payment</h2>
                            </div>
                            <div
                              className="accordion-content"
                              data-tab-content="data-tab-content"
                            ></div>
                          </li>

                          <li
                            className=" accordion-item"
                            data-accordion-item="data-accordion-item"
                            data-q2-deep-link-id="cartwheel-checking-161"
                          >
                            <div className="accordion-title">
                              <h2>Installment</h2>
                            </div>
                          </li>

                          <li
                            className=" accordion-item"
                            data-accordion-item="data-accordion-item"
                            data-q2-deep-link-id="verity-checking-165"
                          >
                            <div className="accordion-title">
                              <h2>Colateral</h2>
                            </div>
                           
                          </li>

                          <li
                            className=" accordion-item"
                            data-accordion-item="data-accordion-item"
                            data-q2-deep-link-id="frequently-asked-questions-1924"
                          >
                            <div className="accordion-title">
                              <h2>Credit</h2>
                            </div>
                          </li>
                        </ul>
                  </div>
                </div>

                <div className=" general-section gutter-top-bottom">
                  <div className="wrap grid-x grid-container full">
                    <h2>CAREERS</h2>
                    <h4>Progress to your full potential</h4>
                    <p>
                      Part of being human is our desire to reach our full
                      potential, to progress in our careers and in life. At
                      Raven Access, we care about both. You get the opportunity
                      to work with the biggest names in technology, to learn and
                      gain valuable experience. You are part of a global team
                      that cares about each other and about making a difference.
                      How can we help you progress to your full potential?
                    </p>
                  </div>
                </div>
                <div></div>
              </article>
            </section>
          </div>
        </div>

        <div className="bottom-banner" />
      </main>

      <footer>
        <div className="footer-wrapper grid-x align-center">
          <div className="social-icons ">
            <ul>
              <li>
                <a href="#!">
                  <i className="fab fa-facebook-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-instagram-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-twitter-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#!">
                  <i className="fab fa-youtube-square" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-menu ">
            <nav className="menu-wrapper footer" id="footer-menu">
              <ul>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Disclosures</a>{" "}
                </li>
                <li>
                  <a href="#!">Careers</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-content">
          <div className="grid-x grid-padding-y align-center">
            <div className=" large-7  footer-text">
              <div className="copyright">
                <div>
                  <div id="block-copyright">
                    <p>
                      <strong>
                        Copyright 2022 Raven Access | RAV #7856945
                      </strong>
                    </p>
                    <p>
                      If you have problems accessing this site, including
                      problems using a screen reader, please call{" "}
                      <a href="#!">07062926449</a> or email{" "}
                      <a href="#!">info@ravenaccess.com</a> for assistance and
                      to report the issue.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" large-5 footer-icons">
              <div id="block-gabvlogo">
                <div className="footer-compliance">
                  <div className="align-center media-image">
                    <img
                      className="img-fluid b-lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://q2-canvas-prd-files.s3.amazonaws.com/veritycu-com/files/image/gabv.png?VersionId=RDQEOZ16JTNT4hTkEIiPS4rJn6QIodvI"
                      alt="images"
                    />
                  </div>
                </div>

                <div className="footer-compliance">
                  <div className="align-center media-image">
                    <img
                      className="img-fluid b-lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://q2-canvas-prd-files.s3.amazonaws.com/veritycu-com/files/image/ehl_0.png?VersionId=_FkXv5_QQPhMnOgtKP7oFJBhZypnFjLp"
                      alt="footer-img"
                    />
                  </div>
                </div>

                <div className="footer-compliance">
                  <div className="align-center media-image">
                    <img
                      className="img-fluid b-lazy"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      data-src="https://q2-canvas-prd-files.s3.amazonaws.com/veritycu-com/files/image/ncu_0.png?VersionId=YXFXoUIJlhI4x3KgOnCq01BnihCX8tuA"
                      alt="footer-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Homepage;
