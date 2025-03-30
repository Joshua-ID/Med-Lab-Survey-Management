<template>
  <div class="doctor-view-container">
    <h2>Our Doctors</h2>
    <div class="grid">
      <div v-for="(doctor, index) in doctorList" :key="index">
        <UserCardComponent
          :image="doctor.picture?.medium"
          :age="doctor.dob?.age"
          :gender="doctor.gender"
          :first-name="doctor.name?.first"
          :last-name="doctor.name?.last"
          :country="doctor.location?.country"
          :city="doctor.location?.city"
          :phone="doctor?.phone"
          :loading="isLoading"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserCardComponent from "../components/userCardComponent.vue";
import { fetchStaffRandom } from "../utils/fetchDataStore";

export default {
  name: "DoctorsView",
  components: { UserCardComponent },
  data() {
    return {
      doctorList: Array(18).fill({}),
      isLoading: true,
    };
  },

  async mounted() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const doctors = await fetchStaffRandom(30);
      this.doctorList = doctors;
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    } finally {
      this.isLoading = false;
    }
  },
};
</script>

<style scoped>
.doctor-view-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    justify-content: center;
  }
}
</style>
