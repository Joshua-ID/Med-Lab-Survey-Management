<template>
  <div class="doctor-view-container">
    <h2>Our Doctors</h2>
    <div class="grid">
      <div v-for="(doctor, index) in paginatedDoctor" :key="index">
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

    <Paginator
      :rows="itemsPerPage"
      :totalRecords="doctorList.length"
      :rowsPerPageOptions="[16, 32, 48]"
      @page="onPageChange"
      class="custom-paginator"
    />
  </div>
</template>

<script>
import { Paginator } from "primevue";
import UserCardComponent from "../components/userCardComponent.vue";
import { fetchStaffRandom } from "../utils/fetchDataStore";

export default {
  name: "DoctorsView",
  components: { UserCardComponent, Paginator },
  data() {
    const placeholderData = Array(30).fill({});
    return {
      doctorList: placeholderData,
      isLoading: true,
      first: 0,
      itemsPerPage: 16,
      paginatedDoctor: placeholderData.slice(0, 16), // Initial fake page
    };
  },

  async created() {
    this.updatePaginatedDoctor();
    try {
      const doctors = await fetchStaffRandom(30);
      this.doctorList = doctors;
      this.updatePaginatedDoctor(); // Refresh paginated with real data
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    } finally {
      this.isLoading = false;
    }
  },

  methods: {
    onPageChange(event) {
      this.first = event.first;
      this.itemsPerPage = event.rows;
      this.updatePaginatedDoctor();
    },
    updatePaginatedDoctor() {
      const start = this.first;
      const end = this.first + this.itemsPerPage;
      this.paginatedDoctor = this.doctorList.slice(start, end);
    },
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
