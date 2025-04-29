<template>
  <section id="home" class="hero">
    <div class="container hero-container">
      <div class="hero-content">
        <div class="title-and-subtitle">
          <h1>
            <span class="highlight">Transform</span> Your Hospital
            <span class="highlight">Operations</span>
          </h1>
          <p class="subtitle">
            The intelligent healthcare management platform unifying patient
            care, staff coordination, and resource optimization in one seamless
            system.
          </p>
        </div>

        <div class="cta-buttons">
          <Button class="btn-secondary" asChild v-slot="slotProps" raised>
            <RouterLink to="/patient" :class="slotProps.class"
              >Book a schedule</RouterLink
            >
          </Button>
        </div>

        <div class="hero-stats">
          <div v-for="(stat, index) in stats" :key="index" class="stat">
            <span class="stat-number" :data-counter="stat.count">150+</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-image">
        <div class="image-wrapper">
          <img
            src="../assets/svgs/group-medical-background.png"
            alt="Medical team using hospital management system"
            class="main-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroLanding",
  data() {
    return {
      stats: [
        { count: 150, label: "Healthcare Facilities" },
        { count: 300, label: "Medical Professionals" },
        { count: 500, label: "Patients Served" },
      ],
    };
  },

  mounted() {
    // Animate counter numbers
    const counters = document.querySelectorAll("[data-counter]");
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-counter");
      const increment = target / 100;
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current) + "+";
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + "+";
        }
      };

      setTimeout(updateCounter, 300);
    });
  },
};
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
  height: 90dvh;
  overflow: hidden;
  position: relative;
}

.hero-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 40px;
}

.hero-content {
  flex: 1;
  max-width: 600px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

h1 {
  font-size: clamp(2.5rem, 1.7021rem + 2.5532vw, 4rem);
  line-height: 1.1;
  color: var(--text-dark);
  font-weight: 700;
}

.highlight {
  color: var(--primary);
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: "";
  position: absolute;
  bottom: 4px;
  left: 0;
  width: 100%;
  height: 12px;
  background-color: rgba(74, 109, 255, 0.2);
  z-index: -1;
  border-radius: 4px;
}

.subtitle {
  font-size: clamp(1.125rem, 1.0585rem + 0.2128vw, 1.25rem);
  color: var(--text-light);
  line-height: 1.6;
}

.title-and-subtitle {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;

  .p-button {
    text-decoration: none;
  }
}

.btn-primary {
  background: var(--primary);
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(74, 109, 255, 0.1);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(74, 109, 255, 0.15);
}

.btn-secondary {
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: var(--primary);
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  border: 1px solid var(--primary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: rgba(74, 109, 255, 0.05);
}

.icon {
  width: 16px;
  height: 16px;
}

.hero-stats {
  display: flex;
  gap: 2.5rem;
}

.stat {
  display: flex;
  gap: 0.3rem;
  flex-direction: column;
}

.stat-number {
  font-size: clamp(1.5625rem, 1.1968rem + 1.1702vw, 2.25rem);
  font-weight: 800;
  color: var(--primary);
  line-height: 1;
}

.stat-label {
  font-size: clamp(0.8125rem, 0.7793rem + 0.1064vw, 0.875rem);
  color: var(--text-light);
  font-weight: 500;
}

.hero-image {
  position: relative;
  flex: 1;
  min-height: 500px;
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border-radius: 10% 50%;
  overflow: hidden;
  box-shadow: 0 3px 6px rgba(74, 109, 255, 0.1);
  transition: all 0.3s ease;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .hero-container {
    flex-direction: column;
    gap: 3rem;
    text-align: center;
  }

  .hero-content {
    max-width: 100%;
  }

  .cta-buttons {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-image {
    min-height: 400px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-stats {
    /* max-width: 150px;
    width: 100%; */
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
