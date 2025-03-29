<template>
  <div class="doctor-list">
    <h2>Our Doctors</h2>

    <!-- Loading Indicator -->
    <p v-if="loading" class="loading-text">Loading doctor...</p>

    <div v-else class="grid">
      <div
        v-for="(doctor, index) in doctorList"
        :key="index"
        class="doctor-card"
      >
        <img :src="doctor.image" alt="doctor Photo" class="doctor-img" />
        <h3>{{ doctor.firstName }} {{ doctor.lastName }}</h3>
        <h3>age: {{ doctor.age }}</h3>
        <h3>Blood group: {{ doctor.bloodGroup }}</h3>
        <p>
          <strong>Occupation:</strong>
          {{ doctor.occupation || "Medical doctor" }}
        </p>
        <p><strong>Height:</strong> {{ doctor.height || "Medical doctor" }}</p>
        <p>
          <strong>Location:</strong> {{ doctor.address.city }}, city:
          {{ doctor.address.address }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchStaff } from "../utils/fetchDataStore";

export default {
  data() {
    return {
      doctorList: [],
      loading: true, // Set loading to true initially
    };
  },
  async mounted() {
    try {
      this.doctorList = await fetchStaff(10);
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    } finally {
      this.loading = false; // Hide loading state once data is fetched
    }
  },
};
</script>

<style scoped>
.doctor-list {
  text-align: center;
  padding: 20px;
}

.loading-text {
  font-size: 18px;
  color: #ff9800;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
}

.doctor-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.doctor-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>
