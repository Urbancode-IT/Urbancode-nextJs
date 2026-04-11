'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

function Footer() {
  const pathname = usePathname();
  const isFeedbackPage = pathname.startsWith('/feedback');

  if (isFeedbackPage) return null;

  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4 justify-content-lg-between">
          {/* Logo + Social */}
          <div className="col-12 col-md-6 col-lg-3 col-xl-3">
            <div className="footer-logo">
              <img src="/images/home/logo.png" alt="UrbanCode Logo" />
            </div>
            <h4>Social Media</h4>
            <div className="social-icons">
              <a href="https://www.linkedin.com/company/99156099/admin/dashboard/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61563183054002#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/urbancode_edutech/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC7ngZ5r2ov-qoXJRjaXJGKA" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              {!isFeedbackPage && (
                <a href="https://wa.me/919429694123?text=Hello%20Team%20Urbancode" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="col-6 col-md-6 col-lg-auto col-xl-auto">
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li><Link href="/"> Home</Link></li>
              <li><Link href="/about-us"> About Us</Link></li>
              <li><Link href="/contact-us"> Contact Us</Link></li>
              <li><Link href="/projects"> Projects</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
          </div>

          {/* Demand Software Courses */}
          <div className="col-6 col-md-6 col-lg-auto col-xl-auto">
            <h4>Trending Courses</h4>
            <ul className="list-unstyled">
              <li><Link href="/courses/fullstack-development/mern-stack"> MERN Stack</Link></li>
              <li><Link href="/courses/fullstack-development/next.js-development"> Next.js</Link></li>
              <li><Link href="/courses/fullstack-development/python-full-stack"> Python</Link></li>
              <li><Link href="/courses/data-analytics"> Data Analytics</Link></li>
              <li><Link href="/courses/cloud-and-devops/aws"> AWS Cloud</Link></li>
              <li><Link href="/courses/software-testing"> Testing</Link></li>
            </ul>
          </div>

          {/* Kids Courses */}
          <div className="col-6 col-md-6 col-lg-auto col-xl-auto">
            <h4>Kids Courses</h4>
            <ul className="list-unstyled">
              <li><Link href="/courses/kidz-space/python-core"> Core Python</Link></li>
              <li><Link href="/courses/kidz-space/ai-and-ml"> AI & ML</Link></li>
              <li><Link href="/courses/kidz-space/junior-web-development"> Web Dev</Link></li>
              <li><Link href="/courses/kidz-space/graphic-designing"> Graphics</Link></li>
              <li><Link href="/courses/kidz-space/c-programming"> C Programming</Link></li>
            </ul>
          </div>

          {/* Career */}
          <div className="col-6 col-md-6 col-lg-auto col-xl-auto">
            <h4>Career</h4>
            <ul className="list-unstyled">
              <li><Link href="/be-our-mentor"> Mentor</Link></li>
              <li><Link href="/internship"> Internship</Link></li>
              <li><a href="#"> Job Portal</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="col-6 col-md-6 col-lg-auto col-xl-auto">
            <h4>Policies</h4>
            <ul className="list-unstyled">
              <li><Link href="/terms-and-conditions"> Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy"> Privacy Policy</Link></li>
              <li><Link href="/policies"> Institute Policies</Link></li>
              <li><Link href="/disclaimer"> Disclaimer</Link></li>
              <li><Link href="/cookie-policy"> Cookie Policy</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="container-fluid footer-bottom text-center mt-4">
        <p className="m-0 py-3">
          Copyright © 2026 Urbancode Edutech Solutions Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
