<template>
  <div class="feature-card">
    <div class="feature-icon">
      <i class="icon" :class="item.icon"></i>
    </div>
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-description">{{ item.description }}</p>
  </div>
</template>

<script>
export default {
  name: "FeatureCard",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style>
.feature-card {
  background-color: var(--st-surface-card);
  border-radius: var(--radius);
  padding: 30px;
  box-shadow: var(--shadow);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 500px) {
    padding: 20px;
    padding: 10px;
  }

  .feature-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(25, 118, 210, 0.1);
    display: flex;
    align-items: center;
    color: green;
    justify-content: center;

    @media (max-width: 500px) {
      width: 40px;
      height: 40px;
    }

    .icon {
      font-size: clamp(1.125rem, 0.9255rem + 0.6383vw, 1.5rem);
      color: var(--primary);
    }
  }

  .card-title {
    font-size: clamp(0.875rem, 0.8085rem + 0.2128vw, 1rem);
  }

  .card-description {
    color: var(--st-surface-text);
    font-size: clamp(0.8125rem, 0.7128rem + 0.3191vw, 1rem);
  }
}
</style>
