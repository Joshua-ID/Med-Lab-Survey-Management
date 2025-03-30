<template>
  <Drawer
    class="drawer-container"
    v-model:visible="visible"
    header="Med Lab Survery"
  >
    <div class="drawer-content">
      <ul>
        <li class="list-item">
          <a class="item">
            <i class="pi pi-objects-column"></i>
            <span @click="" class="font-medium">Overview</span>
          </a>
        </li>
        <li class="list-item">
          <a class="item">
            <i class="pi pi-users"></i>
            <span @click="viewStaff" class="font-medium">Staff Members</span>
          </a>
        </li>
        <li class="list-item">
          <a class="item">
            <i class="pi pi-user"></i>
            <span @click="viewDoctor" class="font-medium">Medical Staff</span>
          </a>
        </li>
        <li class="list-item">
          <a class="item">
            <i class="pi pi-chart-line"></i>
            <span @click="" class="font-medium">Monitoring</span>
          </a>
        </li>
      </ul>

      <LogoutButton />
    </div>
  </Drawer>
  <Button icon="pi pi-list" @click="visible = true" size="medium" raised />
</template>

<script>
import { Drawer } from "primevue";
import LogoutButton from "./LogoutButton.vue";

export default {
  name: "AppDrawer",
  components: { Drawer, LogoutButton },
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    viewStaff() {
      this.$router.push("view-staff");
    },
    viewDoctor() {
      this.$router.push("view-doctor");
    },
  },
};
</script>
<style>
.drawer-container {
  border: none;
  padding: 0;
  outline: 0;
}

.drawer-content {
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  ul {
    .list-item {
      padding: 1rem;
      border-radius: 15px;
      list-style: none;
      cursor: pointer;

      &:hover {
        background-color: aliceblue;
      }

      .item {
        display: flex;
        gap: 1rem;
      }
    }
  }
}
</style>
