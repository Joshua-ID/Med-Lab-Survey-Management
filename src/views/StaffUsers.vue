<template>
  <div class="staff-list">
    <h2>Our Medical Staff</h2>

    <!-- Loading Indicator -->
    <p v-if="loading" class="loading-text">Loading staff...</p>

    <div v-else class="grid">
      <div v-for="(staff, index) in staffList" :key="index" class="staff-card">
        <img :src="staff.picture.medium" alt="Staff Photo" class="staff-img" />
        <h3>{{ staff.name.first }} {{ staff.name.last }}</h3>
        <h3>age: {{ staff.dob.age }}</h3>
        <h3>age: {{ staff.dob.date }}</h3>
        <h3>Email: {{ staff.email }}</h3>
        <p><strong>Phone:</strong> {{ staff.phone }}</p>
        <p><strong>Gender:</strong> {{ staff.gender }}</p>
        <p>
          <strong>Location:</strong> {{ staff.location.city }}, Country:
          {{ staff.location.country }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { fetchStaffRandom } from "../utils/fetchDataStore";

export default {
  data() {
    return {
      staffList: [],
      loading: true, // Set loading to true initially
    };
  },
  async mounted() {
    try {
      this.staffList = await fetchStaffRandom(50);
    } catch (error) {
      console.error("Failed to fetch staff data:", error);
    } finally {
      this.loading = false; // Hide loading state once data is fetched
    }
  },
};
</script>

<style scoped>
.staff-list {
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

.staff-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.staff-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
</style>
