<template>
  <div class="user-dashboard-container">
    <!-- Hero Section -->
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <h1>Streamline Your Hospital Management</h1>
          <p>
            An all-in-one platform for healthcare providers to manage patients,
            staff, appointments, and resources efficiently.
          </p>

          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">500+</span>
              <span class="stat-label">Hospitals</span>
            </div>
            <div class="stat">
              <span class="stat-number">10k+</span>
              <span class="stat-label">Medical Staff</span>
            </div>
            <div class="stat">
              <span class="stat-number">1M+</span>
              <span class="stat-label">Patients</span>
            </div>
          </div>
        </div>
        <div class="hero-image">
          <img
            src="../assets/svgs/hero-image.png"
            alt="Hospital Management System"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="features">
      <div class="container">
        <div class="section-header">
          <h2>Comprehensive Hospital Management Features</h2>
          <p>Everything you need to run your healthcare facility efficiently</p>
        </div>

        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="pi pi-calendar"></i>
            </div>
            <h3>Appointment Scheduling</h3>
            <p>
              Efficiently manage appointments with an intuitive calendar
              interface. Reduce no-shows with automated reminders.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="pi pi-user"></i>
            </div>
            <h3>Patient Management</h3>
            <p>
              Track patient records, medical history, and treatment plans in a
              secure, HIPAA-compliant environment.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="pi pi-users"></i>
            </div>
            <h3>Staff Management</h3>
            <p>
              Schedule shifts, manage departments, and track staff credentials
              and certifications.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="pi pi-chart-bar"></i>
            </div>
            <h3>Billing & Insurance</h3>
            <p>
              Streamline billing processes, insurance claims, and financial
              reporting with integrated payment solutions.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="pi pi-box"></i>
            </div>
            <h3>Inventory Management</h3>
            <p>
              Track medical supplies, equipment, and medications with automated
              reordering capabilities.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="pi pi-chart-line"></i>
            </div>
            <h3>Analytics & Reporting</h3>
            <p>
              Make data-driven decisions with comprehensive analytics and
              customizable reports.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
      <div class="container">
        <div class="section-header">
          <h2>How Our System Works</h2>
          <p>Simple, intuitive, and designed for healthcare professionals</p>
        </div>

        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Implementation & Setup</h3>
            <p>
              Our team configures the system to fit your hospital's specific
              needs and workflows.
            </p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Staff Training</h3>
            <p>
              We provide comprehensive training to ensure your team can make the
              most of all features.
            </p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Go Live & Support</h3>
            <p>
              Launch with confidence with our 24/7 support team ready to assist
              with any questions.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="testimonials" class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>Trusted by Leading Healthcare Providers</h2>
          <p>See what our customers have to say about us</p>
        </div>

        <div class="testimonials-slider">
          <div class="testimonial">
            <div class="testimonial-content">
              <p>
                "Implementing this hospital management system has transformed
                our operations. We've seen a 30% reduction in administrative
                work and significantly improved patient satisfaction."
              </p>
            </div>
            <div class="testimonial-author">
              <img
                src="../assets/svgs/groupdoctorr.png"
                alt="Dr. Sarah Johnson"
              />
              <div>
                <h4>Dr. Sarah Johnson</h4>
                <p>Medical Director, City General Hospital</p>
              </div>
            </div>
          </div>

          <div class="testimonial">
            <div class="testimonial-content">
              <p>
                "The patient management features are outstanding. We can access
                complete patient history instantly, which has improved our
                diagnostic accuracy and treatment planning."
              </p>
            </div>
            <div class="testimonial-author">
              <img
                src="../assets/svgs/groupdoctorr.png"
                alt="Dr. Michael Chen"
              />
              <div>
                <h4>Dr. Michael Chen</h4>
                <p>Chief of Medicine, Westside Medical Center</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pricing" class="pricing">
      <div class="container">
        <div class="section-header">
          <h2>Flexible Pricing Options</h2>
          <p>Solutions for hospitals and clinics of all sizes</p>
        </div>

        <div class="pricing-tiers">
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Standard</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">699</span>
                <span class="period">/month</span>
              </div>
              <p>For small clinics and practices</p>
            </div>
            <div class="pricing-features">
              <ul>
                <li>Up to 10 practitioners</li>
                <li>Appointment scheduling</li>
                <li>Patient records</li>
                <li>Basic reporting</li>
                <li>Email support</li>
              </ul>
            </div>
            <button class="btn btn-outline btn-block">Get Started</button>
          </div>

          <div class="pricing-card featured">
            <div class="popular-tag">Most Popular</div>
            <div class="pricing-header">
              <h3>Professional</h3>
              <div class="price">
                <span class="currency">$</span>
                <span class="amount">1,499</span>
                <span class="period">/month</span>
              </div>
              <p>For mid-sized medical facilities</p>
            </div>
            <div class="pricing-features">
              <ul>
                <li>Up to 50 practitioners</li>
                <li>All Standard features</li>
                <li>Advanced billing & insurance</li>
                <li>Staff management</li>
                <li>Inventory tracking</li>
                <li>24/7 phone & email support</li>
              </ul>
            </div>
            <button class="btn btn-primary btn-block">Get Started</button>
          </div>

          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Enterprise</h3>
              <div class="price">
                <span>Custom Pricing</span>
              </div>
              <p>For hospitals and medical networks</p>
            </div>
            <div class="pricing-features">
              <ul>
                <li>Unlimited practitioners</li>
                <li>All Professional features</li>
                <li>Custom integrations</li>
                <li>Advanced analytics</li>
                <li>Dedicated account manager</li>
                <li>On-site training</li>
              </ul>
            </div>
            <button class="btn btn-outline btn-block">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact-content">
          <div class="contact-info">
            <div class="section-header">
              <h2>Ready to Transform Your Hospital Management?</h2>
              <p>
                Schedule a free consultation with our healthcare solutions
                experts
              </p>
            </div>
            <div class="contact-details">
              <div class="contact-item">
                <i class="pi pi-envelope"></i>
                <span>contact@medicareplus.com</span>
              </div>
              <div class="contact-item">
                <i class="pi pi-phone"></i>
                <span>+1 (800) 123-4567</span>
              </div>
              <div class="contact-item">
                <i class="pi pi-map-marker"></i>
                <span>123 Medical Plaza, San Francisco, CA 94103</span>
              </div>
            </div>
          </div>

          <div class="contact-form">
            <form>
              <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" />
              </div>
              <div class="form-group">
                <label for="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  placeholder="Hospital/Clinic name"
                />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button class="btn btn-primary btn-block">Request Demo</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <img
              src="../assets/svgs/groupdoctorr.png"
              alt="Med-Lab-Survey Logo"
            />
            <p>
              Modern hospital management solutions for healthcare providers of
              all sizes.
            </p>
            <div class="social-links">
              <a href="#"><i class="pi pi-facebook"></i></a>
              <a href="#"><i class="pi pi-twitter"></i></a>
              <a href="#"><i class="pi pi-linkedin"></i></a>
              <a href="#"><i class="pi pi-instagram"></i></a>
            </div>
          </div>

          <div class="footer-links">
            <div class="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Leadership</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News & Press</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h4>Solutions</h4>
              <ul>
                <li><a href="#">For Hospitals</a></li>
                <li><a href="#">For Clinics</a></li>
                <li><a href="#">For Specialists</a></li>
                <li><a href="#">For Labs</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">Support Center</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Med-Lab-Survey. All rights reserved.</p>
          <div class="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || {},
    };
  },
};
</script>
<style>
.user-dashboard-container {
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  section {
    padding: 80px 0;
  }

  .section-header {
    text-align: center;
    margin-bottom: 50px;
  }

  .section-header h2 {
    font-size: 36px;
    margin-bottom: 16px;
    color: var(--text);
  }

  .section-header p {
    font-size: 18px;
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto;
  }

  /* Button Styles */
  .btn {
    display: inline-block;
    padding: 10px 20px;
    border-radius: var(--radius);
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
  }

  .btn-lg {
    padding: 12px 24px;
    font-size: 18px;
  }

  .btn-block {
    display: block;
    width: 100%;
  }

  .btn-primary {
    background-color: var(--primary);
    color: var(--white);
    border: none;
  }

  .btn-primary:hover {
    background-color: var(--primary-dark);
  }

  .btn-outline {
    background-color: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
  }

  .btn-outline:hover {
    background-color: var(--primary);
    color: var(--white);
  }

  /* Hero Section */
  .hero {
    background-color: var(--grey-light);
    padding: 100px 0;
  }

  .hero .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
  }

  .hero-content {
    flex: 1;
  }

  .hero-content h1 {
    font-size: 48px;
    line-height: 1.2;
    margin-bottom: 24px;
    color: var(--text);
  }

  .hero-content p {
    font-size: 20px;
    color: var(--text-light);
    margin-bottom: 32px;
  }

  .hero-buttons {
    display: flex;
    gap: 16px;
    margin-bottom: 40px;
  }

  .hero-stats {
    display: flex;
    gap: 32px;
  }

  .stat {
    display: flex;
    flex-direction: column;
  }

  .stat-number {
    font-size: 28px;
    font-weight: 700;
    color: var(--primary);
  }

  .stat-label {
    font-size: 16px;
    color: var(--text-light);
  }

  .hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .hero-image img {
    width: 70%;
  }

  /* Features Section */
  .features {
    background-color: var(--white);
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
  }

  .feature-card {
    background-color: var(--white);
    border-radius: var(--radius);
    padding: 30px;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-5px);
  }

  .feature-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(25, 118, 210, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .feature-icon i {
    font-size: 24px;
    color: var(--primary);
  }

  .feature-card h3 {
    font-size: 22px;
    margin-bottom: 16px;
  }

  .feature-card p {
    color: var(--text-light);
  }

  /* How it Works */
  .how-it-works {
    background-color: var(--grey-light);
  }

  .steps {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .step {
    flex: 1;
    text-align: center;
    position: relative;
  }

  .step:not(:last-child)::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--grey);
    top: 35px;
    left: 60%;
    z-index: 0;
  }

  .step-number {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: var(--primary);
    color: var(--white);
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    position: relative;
    z-index: 1;
  }

  .step h3 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .step p {
    color: var(--text-light);
  }

  /* Testimonials */
  .testimonials {
    background-color: var(--white);
  }

  .testimonials-slider {
    display: flex;
    gap: 30px;
    overflow-x: auto;
    padding-bottom: 20px;
  }

  .testimonial {
    background-color: var(--white);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 30px;
    flex: 0 0 calc(50% - 15px);
  }

  .testimonial-content {
    margin-bottom: 20px;
  }

  .testimonial-content p {
    font-size: 18px;
    font-style: italic;
    color: var(--text);
    line-height: 1.7;
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .testimonial-author img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .testimonial-author h4 {
    font-size: 18px;
    margin-bottom: 4px;
  }

  .testimonial-author p {
    color: var(--text-light);
    font-size: 14px;
  }

  /* Pricing Section */
  .pricing {
    background-color: var(--grey-light);
  }

  .pricing-tiers {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .pricing-card {
    background-color: var(--white);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    padding: 40px;
    flex: 1;
    max-width: 350px;
    position: relative;
  }

  .pricing-card.featured {
    border: 2px solid var(--primary);
    transform: scale(1.05);
  }

  .popular-tag {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary);
    color: var(--white);
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 14px;
  }

  .pricing-header {
    text-align: center;
    margin-bottom: 30px;
  }

  .pricing-header h3 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .price {
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-bottom: 10px;
  }

  .currency {
    font-size: 24px;
    font-weight: 600;
  }

  .amount {
    font-size: 48px;
    font-weight: 700;
    margin: 0 4px;
  }

  .period {
    font-size: 18px;
    color: var(--text-light);
  }

  .pricing-header p {
    color: var(--text-light);
    font-size: 16px;
  }

  .pricing-features {
    margin-bottom: 30px;
  }

  .pricing-features ul {
    list-style: none;
  }

  .pricing-features li {
    padding: 10px 0;
    border-bottom: 1px solid var(--grey);
    color: var(--text);
  }

  .pricing-features li:last-child {
    border-bottom: none;
  }

  .pricing-features li::before {
    content: "✓";
    color: var(--primary);
    margin-right: 10px;
    font-weight: bold;
  }

  /* Contact Section */
  .contact {
    background-color: var(--white);
  }

  .contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .contact-details {
    margin-top: 30px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .contact-item i {
    font-size: 20px;
    color: var(--primary);
    margin-right: 16px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid var(--grey);
    border-radius: var(--radius);
    font-size: 16px;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
  }

  /* Footer */
  .footer {
    background-color: #f8f9fa;
    padding: 60px 0 20px;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .footer-brand {
    max-width: 300px;
  }

  .footer-brand img {
    margin-bottom: 20px;
  }

  .footer-brand p {
    margin-bottom: 20px;
    color: var(--text-light);
  }

  .social-links {
    display: flex;
    gap: 16px;
  }

  .social-links a {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    transition: background-color 0.3s ease;
  }

  .social-links a:hover {
    background-color: var(--primary-dark);
  }

  .footer-links {
    display: flex;
    gap: 60px;
  }

  .footer-column h4 {
    font-size: 18px;
    margin-bottom: 20px;
    color: var(--text);
  }

  .footer-column ul {
    list-style: none;
  }

  .footer-column ul li {
    margin-bottom: 10px;
  }

  .footer-column ul li a {
    text-decoration: none;
    color: var(--text-light);
    transition: color 0.3s ease;
  }

  .footer-column ul li a:hover {
    color: var(--primary);
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    border-top: 1px solid var(--grey);
  }

  .footer-bottom p {
    color: var(--text-light);
  }

  .legal-links {
    display: flex;
    gap: 20px;
  }

  .legal-links a {
    text-decoration: none;
    color: var(--text-light);
    font-size: 14px;
    transition: color 0.3s ease;
  }

  .legal-links a:hover {
    color: var(--primary);
  }

  /* Responsive Design */
  @media (max-width: 992px) {
    .hero .container {
      flex-direction: column;
    }

    .pricing-tiers {
      flex-direction: column;
      align-items: center;
    }

    .pricing-card {
      width: 100%;
      max-width: 400px;
    }

    .pricing-card.featured {
      transform: scale(1);
    }

    .contact-content {
      grid-template-columns: 1fr;
    }

    .steps {
      flex-direction: column;
    }

    .step:not(:last-child)::after {
      display: none;
    }

    .footer-content {
      flex-direction: column;
      gap: 40px;
    }

    .footer-links {
      gap: 30px;
    }

    .footer-bottom {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    nav ul {
      display: none;
    }

    .feature-grid {
      grid-template-columns: 1fr;
    }

    .testimonials-slider {
      flex-direction: column;
    }

    .testimonial {
      flex: 0 0 100%;
    }
  }

  @media (max-device-width: 500px) {
    .footer-links {
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>
