<template>
  <div class="patient-container">
    <h2>Patient List</h2>

    <!-- Table -->
    <DataTable
      :value="patients"
      stripedRows
      responsiveLayout="scroll"
      paginator
      :rows="10"
      :rowsPerPageOptions="[5, 10, 20, 50]"
      removableSort
      v-model:filters="filters"
      filterDisplay="row"
      :globalFilterFields="['name', 'guardian', 'address', 'phone']"
      class="table-data"
    >
      <template #header>
        <div class="table-action-wrapper">
          <Button
            v-if="!isAdmin"
            @click="isModalVisible = true"
            class="add-button"
          >
            Add Patient
          </Button>

          <InputText
            v-model="filters['global'].value"
            placeholder="Search Patients..."
            class="filter-input"
          />
        </div>
      </template>
      <Column field="name" header="Full Name" />
      <Column field="address" header="Address" />
      <Column field="guardian" header="Guardian" />
      <Column field="gender" header="Gender" sortable />
      <Column field="phone" header="Phone" />
      <Column field="bookAppointment" header="Book Appointment" />
      <Column field="createdAt" header="Created At" sortable />

      <template #empty>
        <div class="table-empty-state">
          <label class="empty-state-text">No table data</label>
        </div>
      </template>
    </DataTable>

    <!-- Patient Form Modal -->
    <Dialog
      class="add-patient-modal"
      v-model:visible="isModalVisible"
      modal
      header="Book Appointment"
    >
      <span> Book a schedule with out medical staff </span>
      <div class="body-content">
        <FloatLabel class="input-field" variant="on">
          <label for="name">Full Name</label>
          <InputText v-model="newPatient.name" id="name" autocomplete="off" />
        </FloatLabel>
        <FloatLabel class="input-field" variant="on">
          <label for="address">Address</label>
          <InputText
            v-model="newPatient.address"
            id="address"
            autocomplete="off"
          />
        </FloatLabel>
      </div>
      <div class="grid-style">
        <FloatLabel class="input-field" variant="on">
          <Select
            id="gender"
            v-model="newPatient.gender"
            :options="genderOptions"
            optionLabel="name"
            checkmark
            :highlightOnSelect="false"
          />
          <label for="gender">Select Gender</label>
        </FloatLabel>
        <FloatLabel class="input-field" variant="on">
          <label for="phone">Phone Number</label>
          <InputText v-model="newPatient.phone" id="phone" autocomplete="on" />
        </FloatLabel>
        <FloatLabel class="input-field" variant="on">
          <Select
            id="guardian"
            v-model="newPatient.guardian"
            :options="guardianOptions"
            optionLabel="name"
            checkmark
            :highlightOnSelect="false"
          />
          <label for="guardian">Guardian</label>
        </FloatLabel>
        <FloatLabel variant="on" class="input-field">
          <DatePicker
            id="book_date"
            dateFormat="D-M-y"
            v-model="newPatient.bookAppointment"
            showTime
            hourFormat="12"
            showIcon
            iconDisplay="input"
            fluid
            showButtonBar
            :manualInput="false"
            :minDate="minDate"
          />
          <label for="book_date">Book Appointment Date</label>
        </FloatLabel>
      </div>
      <template #footer>
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="isModalVisible = false"
        ></Button>
        <Button
          :loading="isLoading"
          type="button"
          label="Save"
          @click="addPatient"
        ></Button>
      </template>
    </Dialog>
  </div>
</template>

<script>
import { collection, onSnapshot } from "firebase/firestore";
import { db, addPatientToFirestore } from "../firebase";
import {
  Select,
  FloatLabel,
  Column,
  DataTable,
  Toast,
  DatePicker,
  ProgressSpinner,
} from "primevue";

export default {
  components: {
    DataTable,
    Column,
    Select,
    FloatLabel,
    Toast,
    DatePicker,
    ProgressSpinner,
  },
  data() {
    return {
      isLoading: false,
      patients: [],
      isModalVisible: false,
      isLoadingTable: false,
      newPatient: {
        name: "",
        address: "",
        phone: "",
        bookAppointment: "",
        createdAt: "",
      },
      genderOptions: [
        { name: "Male", value: 1 },
        { name: "Female", value: 2 },
      ],
      guardianOptions: [
        { name: "Parent", value: 1 },
        { name: "Neighbour", value: 2 },
        { name: "Self", value: 3 },
        { name: "Siblings", value: 4 },
      ],

      filters: {
        global: { value: null, matchMode: "contains" },
        name: { value: null, matchMode: "contains" },
        gender: { value: null, matchMode: "equals" },
        guardian: { value: null, matchMode: "contains" },
        address: { value: null, matchMode: "contains" },
        phone: { value: null, matchMode: "contains" },
      },
      user: null,
    };
  },
  computed: {
    isAdmin() {
      return this.user?.role === "admin";
    },
  },
  methods: {
    async addPatient() {
      if (
        !this.newPatient.name ||
        !this.newPatient.phone ||
        !this.newPatient.phone ||
        !this.newPatient.gender ||
        !this.newPatient.address ||
        !this.newPatient.bookAppointment
      ) {
        this.$toast.add({
          severity: "error",
          summary: "Empty Fields",
          details: "Please fill in required fields!",
          life: 3000,
        });
        return;
      }

      if (this.newPatient.bookAppointment instanceof Date) {
        this.newPatient.bookAppointment = this.newPatient.bookAppointment =
          this.newPatient.bookAppointment.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          });
      }

      const patientData = {
        ...this.newPatient,
        gender: this.newPatient.gender.name,
        guardian: this.newPatient.guardian.name,

        createdAt: new Date().toLocaleString(),
      };

      try {
        this.isLoading = true;
        await addPatientToFirestore(patientData);
      } catch (error) {
        console.error("Error adding patient:", error);
        this.$toast.add({
          severity: "error",
          detail: "Fail to Book Appointment",
          summary:
            "Error persist! Refresh and try again. If error Persist contact the Developer ",
        });
      } finally {
        this.isLoading = false;
      }

      // Clear form and close modal
      this.newPatient = {
        name: "",
        gender: "",
        guardian: "",
        address: "",
        phone: "",
        bookAppointment: "",
        createdAt: "",
      };
      this.isModalVisible = false;
      this.$toast.add({
        severity: "success",
        detail: "Your form is been booked successfully",
        summary: "Appointment Booked",
      });
    },
  },
  mounted() {
    // Fetch user from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    }

    const patientsRef = collection(db, "patients");

    onSnapshot(patientsRef, (snapshot) => {
      this.patients = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Fetched Patients:", this.patients);
    });
  },

  created() {
    this.minDate = new Date();
  },
};
</script>

<style>
.patient-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.table-data {
  .table-action-wrapper {
    display: flex;
    gap: 1rem;
    justify-self: end;

    .filter-input {
      width: 400px !important;

      @media (max-device-width: 768px) {
        width: auto;
      }
    }

    .add-button {
      white-space: nowrap;
      padding: 10px 2rem !important;
    }
  }
}

.add-patient-modal {
  .body-content {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .input-field {
    width: 100%;
  }

  .p-dialog-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .grid-style {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 1rem;

    .p-select {
      width: 100%;
    }
  }
}
</style>
