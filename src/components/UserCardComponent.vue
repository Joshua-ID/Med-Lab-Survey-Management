<template>
  <div class="user-card-container">
    <div class="top-content-wrapper">
      <div>
        <img v-if="image" class="image" :src="image" />
        <Skeleton v-else shape="circle" size="3rem" />
      </div>
      <div class="right-content">
        <div v-if="age"><span>Age:</span> {{ age }}</div>
        <Skeleton v-else width="70%" />
        <div v-if="gender"><span>Height:</span> {{ gender }}</div>
        <Skeleton v-else width="70%" />
      </div>
    </div>
    <div class="mid-content-wrapper">
      <div v-if="firstName">
        <span>Name: </span> {{ firstName }} {{ lastName }}
      </div>
      <Skeleton v-else width="100%" />
      <div v-if="city"><span>City:</span> {{ city }}</div>
      <Skeleton v-else width="80%" />
      <div v-if="country"><span>Country:</span> {{ country }}</div>
      <Skeleton v-else width="50%" />
    </div>
  </div>
</template>

<script>
import { Skeleton } from "primevue";

export default {
  name: "UserCardComponent",
  components: { Skeleton },
  props: {
    image: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: undefined,
    },
    firstName: {
      type: String,
      default: undefined,
    },
    lastName: {
      type: String,
      default: undefined,
    },
    age: {
      type: Number,
      default: undefined,
    },
    country: {
      type: String,
      default: undefined,
    },
    city: {
      type: String,
      default: undefined,
    },
    phone: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style>
.user-card-container {
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  span {
    font-weight: bold;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  .top-content-wrapper {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
      transform 0.3s ease-in-out;

    .image {
      max-width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 4px solid var(--st-surface-sleek);
    }

    .right-content {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      align-items: flex-end;
    }
  }

  .mid-content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .skeleton {
    width: 70% !important;
  }
}
</style>
