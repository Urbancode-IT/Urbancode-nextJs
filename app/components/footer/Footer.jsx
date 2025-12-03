'use client';

import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">
          {/* Logo + Social */}
          <div className="col-lg-3 col-md-6">
            <div className="footer-logo">
              <img src="/images/home/logo.png" alt="UrbanCode Logo" />
            </div>
            <h4 className="ms-4">Social Media</h4>
            <div className="social-icons ms-4">
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
              <a href="https://wa.me/919429694123?text=Hello%20Team%20Urbancode" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-lg-2 col-md-6">
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
          <div className="col-lg-3 col-md-6">
            <h4>Trending Software Courses</h4>
            <ul className="list-unstyled">
              <li><Link href="/courses/web-and-app-development/mern-stack"> MERN Stack</Link></li>
              <li><Link href="/courses/web-and-app-development/mean-stack"> MEAN Stack</Link></li>
              <li><Link href="/courses/web-and-app-development/python-full-stack"> Python Stack</Link></li>
              <li><Link href="/courses/web-and-app-development/.net-plus-angular"> .Net + Angular Full Stack</Link></li>
              <li><Link href="/courses/data-science"> Data Analytics</Link></li>
              <li><Link href="/courses/cloud-and-devops/aws"> AWS Cloud Computing</Link></li>
              <li><Link href="/courses/software-testing"> Software Testing</Link></li>
            </ul>
          </div>

          {/* Kids Courses */}
          <div className="col-lg-2 col-md-6">
            <h4>Kids Courses</h4>
            <ul className="list-unstyled">
              <li><Link href="/courses/kidz-space/python-core"> Core Python</Link></li>
              <li><Link href="/courses/kidz-space/ai-and-ml"> AI & ML For Kids</Link></li>
              <li><Link href="/courses/kidz-space/junior-web-development"> Web Development For Kids</Link></li>
              <li><Link href="/courses/kidz-space/graphic-designing"> Graphic Designing</Link></li>
              <li><Link href="/courses/kidz-space/c-programming"> C Programming</Link></li>
              <li><Link href="/courses/kidz-space/sql-for-kids"> SQL</Link></li>
              <li><Link href="/courses/kidz-space/cpp-programming"> C++</Link></li>
            </ul>
          </div>

          {/* Internships */}
          <div className="col-lg-2 col-md-6">
            <h4>Career</h4>
            <ul className="list-unstyled">
              <li><Link href="be-our-mentor"> Mentor</Link></li>
              <li><Link href="internship"> Internship</Link></li>
              <li><a href="#"> Job Portal</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="container-fluid footer-bottom text-center mt-4">
        <p className="m-0 py-3">
          Copyright © 2025 Urbancode Edutech Solutions Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
