<template>
  <section id="pricing" class="pricing">
    <div class="container">
      <div class="section-header">
        <h2>Flexible Pricing Options</h2>
        <p>Solutions for hospitals and clinics of all sizes</p>
      </div>

      <div class="pricing-tiers">
        <div
          class="pricing-card"
          :class="tier.selectedPlan ? 'featured' : ''"
          v-for="(tier, index) in pricingTiers"
          :key="index"
        >
          <div>
            <div v-if="tier.popularFeature" class="popular-tag">
              Most Popular
            </div>
            <div class="pricing-header">
              <h3>{{ tier.name }}</h3>
              <div class="price">
                <div v-if="tier.amount">
                  <span class="currency">$</span>
                  <span class="amount">{{ tier.amount }}</span>
                  <span class="period">/{{ tier.month }}</span>
                </div>
                <span class="price currency" v-else>Custom</span>
              </div>
              <p>{{ tier.description }}</p>
            </div>
            <div class="pricing-features">
              <ul>
                <li
                  class="tier-item"
                  v-for="(item, index) in tier.listItems"
                  :key="index"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <!-- class="btn btn-outline btn-block" -->
          <button
            @click="activatePlan(tier)"
            class="btn btn-block btn-primary"
            :class="tier.selectedPlan ? 'btn-primary' : 'btn-outline'"
          >
            {{ tier.selectedPlan ? "Current Plan" : tier.actionBtn }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PricingSection",
  data() {
    return {
      selectedPlan: false,
      pricingTiers: [
        {
          name: "Standard",
          amount: 699,
          month: "Month",
          listItems: [
            "Up to 10 practitioners",
            "Appointment scheduling",
            "Patient records",
            "Basic features",
            "Email support",
          ],
          selectedPlan: false,
          popularFeature: false,
          description: "For small clinics and practices",
          actionBtn: "Get Started",
        },
        {
          name: "Professional",
          amount: 1499,
          month: "Month",
          selectedPlan: false,
          popularFeature: true,
          listItems: [
            "Up to 50 practitioners",
            "All Standard features",
            "Advanced billing & insurance",
            "Staff management",
            "Inventory tracking",
            "24/7 phone & email support",
          ],
          description: "For mid-sized medical facilities",
          actionBtn: "Get Started",
        },
        {
          name: "Enterprise",
          amount: 0,
          month: "",
          popularFeature: false,
          selectedPlan: false,
          listItems: [
            "Unlimited practitioners",
            "All Professional features",
            "Custom integrations",
            "Advanced analytics",
            "Dedicated account manager",
            "On-site training",
          ],
          description: "For hospitals and medical networks",
          actionBtn: "Contact Sales",
        },
      ],
    };
  },

  methods: {
    activatePlan(tier) {
      this.pricingTiers.forEach((x) => (x.selectedPlan = false));
      tier.selectedPlan = true;
    },
  },
};
</script>

<style>
.pricing {
  background-color: var(--grey-light);
}

.pricing-tiers {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.pricing-card {
  background-color: var(--st-surface-card);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 40px;
  flex: 1;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
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

.pricing-features ul {
  list-style: none;
  color: var(--st-surface-text);
}

.pricing-features li {
  padding: 10px 0;
  border-bottom: 1px solid var(--grey);
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
</style>
