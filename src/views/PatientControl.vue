<template>
  <div class="patient-container">
    <h2>Patient List</h2>

    <!-- Add Patient Button (Only for Non-Admin Users) -->
    <button v-if="!isAdmin" @click="showModal = true" class="add-button">
      Add Patient
    </button>

    <!-- Table -->
    <DataTable
      :value="patients"
      :loading="loading"
      responsiveLayout="scroll"
      class="patient-table"
    >
      <Column field="name" header="Name"></Column>
      <Column field="gender" header="Gender"></Column>
      <Column field="guardian" header="Guardian"></Column>
      <Column field="address" header="Address"></Column>
      <Column field="phone" header="Phone"></Column>
      <Column field="createdAt" header="Created At"></Column>
    </DataTable>

    <!-- Patient Form Modal -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>Add New Patient</h3>

        <label>Name:</label>
        <input v-model="newPatient.name" type="text" />

        <label>Gender:</label>
        <select v-model="newPatient.gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label>Guardian:</label>
        <input v-model="newPatient.guardian" type="text" />

        <label>Address:</label>
        <input v-model="newPatient.address" type="text" />

        <label>Phone:</label>
        <input v-model="newPatient.phone" type="text" />

        <div class="modal-actions">
          <button @click="addPatient" class="save-button">Save</button>
          <button @click="showModal = false" class="close-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, onSnapshot } from "firebase/firestore";
import { db, addPatientToFirestore } from "../firebase";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      patients: [],
      showModal: false,
      loading: true,
      newPatient: {
        name: "",
        gender: "Male",
        guardian: "",
        address: "",
        phone: "",
        createdAt: "",
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
      if (!this.newPatient.name || !this.newPatient.phone) {
        alert("Please fill in required fields!");
        return;
      }

      this.newPatient.createdAt = new Date().toLocaleString();

      try {
        await addPatientToFirestore(this.newPatient);
      } catch (error) {
        console.error("Error adding patient:", error);
      }

      // Clear form and close modal
      this.newPatient = {
        name: "",
        gender: "Male",
        guardian: "",
        address: "",
        phone: "",
        createdAt: "",
      };
      this.showModal = false;
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
      this.loading = false;
      console.log("Fetched Patients:", this.patients);
    });
  },
};
</script>

<!-- <style >
.patient-container {
  padding: 20px;
  text-align: center;
}
.add-button {
  padding: 8px 15px;
  background: green;
  color: white;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}
.patient-table {
  width: 100%;
  margin-top: 10px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
.modal-actions {
  display: flex;
  justify-content: space-between;
}
.save-button {
  background: blue;
  color: white;
  padding: 8px 15px;
  cursor: pointer;
}
.close-button {
  background: red;
  color: white;
  padding: 8px 15px;
  cursor: pointer;
}
</style> -->

<style>
.patient-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
