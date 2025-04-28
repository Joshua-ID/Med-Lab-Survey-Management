<template>
  <div class="user-dashboard-container">
    <!-- Hero Section -->
    <HeroLanding />

    <!-- Features Section -->
    <ProductMarketingSection />

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
    <TestimonialSection />

    <!-- Pricing -->
    <PricingSection />

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
    <FooterSection />

    <CookiesBanner />
  </div>
</template>

<script>
import CookiesBanner from "../components/CookiesBanner.vue";
import FooterSection from "./FooterSection.vue";
import HeroLanding from "./HeroLanding.vue";
import PricingSection from "./PricingSection.vue";
import ProductMarketingSection from "./ProductMarketingSection.vue";
import TestimonialSection from "./TestimonialSection.vue";

export default {
  name: "Dashboard",
  components: {
    TestimonialSection,
    FooterSection,
    ProductMarketingSection,
    CookiesBanner,
    PricingSection,
    HeroLanding,
  },
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

    @media (max-width: 768px) {
      padding: 40px 0;
    }

    @media (max-width: 400x) {
      padding: 20px 0;
    }
  }

  .section-header {
    text-align: center;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-bottom: 20px;
    }
  }

  .section-header h2 {
    font-size: clamp(1.1875rem, 0.8839rem + 1.5179vw, 2.25rem);
    margin-bottom: 16px;
    color: var(--text);
  }

  .section-header p {
    font-size: clamp(1rem, 0.9643rem + 0.1786vw, 1.125rem);
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
  }

  @media (max-device-width: 500px) {
    .container {
      padding: 10px;
    }

    .footer-links {
      align-items: center;
      flex-direction: column;
    }
  }
}
</style>
