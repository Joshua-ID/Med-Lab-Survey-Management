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
            <i class="pi pi-users mr-2"></i>
            <span @click="viewStaff" class="font-medium">All Staffs</span>
          </a>
        </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

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
