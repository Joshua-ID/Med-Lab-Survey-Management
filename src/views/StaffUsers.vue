<template>
  <div class="staff-view-container">
    <h2>Staff Sector</h2>

    <div class="grid">
      <div v-for="(staff, index) in paginatedStaff" :key="index">
        <UserCardComponent
          :image="staff.picture?.medium"
          :age="staff.dob?.age"
          :gender="staff.gender"
          :first-name="staff.name?.first"
          :last-name="staff.name?.last"
          :country="staff.location?.country"
          :city="staff.location?.city"
          :phone="staff?.phone"
          :loading="isLoading"
        />
      </div>
    </div>

    <Paginator
      :rows="itemsPerPage"
      :totalRecords="staffList.length"
      :rowsPerPageOptions="[16, 32, 48]"
      @page="onPageChange"
      class="custom-paginator"
    />
  </div>
</template>

<script>
import { ProgressSpinner } from "primevue";
import UserCardComponent from "../components/userCardComponent.vue";
import { fetchStaffRandom } from "../utils/fetchDataStore";
import Paginator from "primevue/paginator";

export default {
  name: "StaffUsers",
  components: {
    UserCardComponent,
    Paginator,
    ProgressSpinner,
  },
  data() {
    const placeholderData = Array(60).fill({}); // Fake staff
    return {
      staffList: placeholderData,
      paginatedStaff: placeholderData.slice(0, 16), // Initial page
      isLoading: true,
      first: 0,
      itemsPerPage: 16,
    };
  },

  async created() {
    // Show placeholder paginated
    this.updatePaginatedStaff();

    try {
      const staffs = await fetchStaffRandom(60);
      this.staffList = staffs;
      this.updatePaginatedStaff(); // Refresh with real data
    } catch (error) {
      console.error("Failed to fetch staffs:", error);
    } finally {
      this.isLoading = false;
    }
  },

  methods: {
    onPageChange(event) {
      this.first = event.first;
      this.itemsPerPage = event.rows;
      this.updatePaginatedStaff();
    },
    updatePaginatedStaff() {
      const start = this.first;
      const end = this.first + this.itemsPerPage;
      this.paginatedStaff = this.staffList.slice(start, end);
    },
  },
};
</script>

<style scoped>
.staff-view-container {
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

  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70dvh;
  }
}
</style>
