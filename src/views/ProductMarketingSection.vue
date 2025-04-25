<template>
  <section id="features" class="features">
    <div class="container">
      <div class="section-header">
        <h2>Comprehensive Hospital Management Features</h2>
        <p>Everything you need to run your healthcare facility efficiently</p>
      </div>

      <div class="feature-grid">
        <FeatureCard
          v-for="(item, index) in featureCardItems"
          :key="index"
          :item="item"
        />
      </div>
    </div>
  </section>
</template>

<script>
import FeatureCard from "../components/FeatureCard.vue";

export default {
  name: "ProductMarketingSection",
  components: {
    FeatureCard,
  },
  data() {
    return {
      featureCardItems: [
        {
          icon: "pi pi-user",
          title: "Patient Management",
          description:
            "Track patient records, medical history, and treatment plans in a secure, HIPAA-compliant environment.",
        },
        {
          icon: "pi pi-calendar",
          title: "Appointment Scheduling",
          description:
            "Efficiently manage appointments with an intuitive calendar interface. Reduce no-shows with automated reminders.",
        },
        {
          icon: "pi pi-user",
          title: "Staff Management",
          description:
            "Schedule shifts, manage departments, and track staff credentials and certifications.",
        },
        {
          icon: "pi pi-chart-bar",
          title: "Billing & Insurance",
          description:
            "Streamline billing processes, insurance claims, and financial reporting with integrated payment solutions.",
        },
        {
          icon: "pi pi-box",
          title: "Inventory Management",
          description:
            "Track medical supplies, equipment, and medications with automated reordering capabilities.",
        },
        {
          icon: "pi pi-chart-line",
          title: "Analytics & Reporting",
          description:
            "Make data-driven decisions with comprehensive analytics and customizable reports.",
        },
      ],
    };
  },
};
</script>

<style>
.features {
  background-color: var(--white);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card:hover {
  transform: translateY(-5px);
}
</style>
