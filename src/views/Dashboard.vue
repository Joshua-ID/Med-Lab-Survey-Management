<template>
  <div class="user-dashboard-container">DASHBOARD USER</div>
</template>

<script>
export default {
  components: { StaffUsers, DoctorsStaff, PatientControl },
  data() {
    return {
      user: JSON.parse(localStorage.getItem("user")) || {},
    };
  },
};
</script>
<style>
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

/* Navbar */
.navbar {
  padding: 20px 0;
  position: sticky;
  top: 0;
  background-color: var(--white);
  box-shadow: var(--shadow);
  z-index: 100;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 40px;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 30px;
}

nav ul li a {
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
  transition: color 0.3s ease;
}

nav ul li a:hover {
  color: var(--primary);
}

.auth-buttons {
  display: flex;
  gap: 10px;
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
  flex: 1;
}

.hero-image img {
  width: 100%;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
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

  .footer-links {
    flex-direction: column;
  }
}
</style>
