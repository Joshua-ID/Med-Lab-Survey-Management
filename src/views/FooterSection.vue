<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-brand">
          <img
            class="brand-logo"
            src="../assets/svgs/brand-logo.svg"
            alt="Med-Lab-Survey Logo"
          />
          <p>
            Modern hospital management solutions for healthcare providers of all
            sizes.
          </p>
          <div class="social-links">
            <a href="www.facebook.com" target="_blank"
              ><i class="pi pi-facebook"></i
            ></a>
            <a href="www.twitter.com" target="_blank"
              ><i class="pi pi-twitter"></i
            ></a>
            <a href="www.linkedin.com" target="_blank"
              ><i class="pi pi-linkedin"></i
            ></a>
            <a href="www.instagram.com" target="_blank"
              ><i class="pi pi-instagram"></i
            ></a>
          </div>
        </div>

        <div class="footer-links">
          <div class="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="">About Us</a></li>
              <li><a href="">Leadership</a></li>
              <li><a href="">Careers</a></li>
              <li><a href="">News & Press</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Solutions</h4>
            <ul>
              <li><a href="">For Hospitals</a></li>
              <li><a href="">For Clinics</a></li>
              <li><a href="">For Specialists</a></li>
              <li><a href="">For Labs</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="">Blog</a></li>
              <li><a href="">Case Studies</a></li>
              <li><a href="">Documentation</a></li>
              <li><a href="">Support Center</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ getYear }} Med-Lab-Survey. All rights reserved.</p>
        <div class="legal-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">HIPAA Compliance</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterSection",

  computed: {
    getYear() {
      return new Date().getUTCFullYear();
    },
  },
};
</script>

<style>
.footer {
  background-color: #f8f9fa;
  padding: 60px 0 20px;
  font-size: clamp(0.875rem, 0.8393rem + 0.1786vw, 1rem);

  @media (max-device-width: 500px) {
    padding: 30px 0 20px;
  }
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.footer-brand {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (max-device-width: 500px) {
    text-align: center;
    margin: 0 auto;
  }
}

.brand-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 5px;
  box-shadow: var(--shadow);
  background-color: var(--primary);

  @media (max-device-width: 500px) {
    margin: auto;
  }
}

.footer-brand p {
  color: var(--text-light);
}

.social-links {
  display: flex;
  gap: 16px;

  @media (max-device-width: 500px) {
    justify-content: center;
  }
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
  text-decoration: none;
  transition: background-color 0.3s ease, background-color 0.3s ease-in-out,
    transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.social-links a:hover {
  background-color: var(--primary-dark);
  transform: translateY(-5px) scale(1.08);
}

.footer-links {
  display: flex;
  gap: 60px;
}

.footer-column h4 {
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
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: var(--primary);
}
</style>
