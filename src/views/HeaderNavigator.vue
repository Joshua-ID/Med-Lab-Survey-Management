<template>
  <div class="container-wrapper">
    <Menubar
      class="header-navigator-container"
      :model="items"
      breakpoint="768px"
    >
      <template #start>
        <img src="../assets/svgs/brand-logo.svg" />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple v-bind="props.action">
          <span>{{ item.label }}</span>
          <Badge
            v-if="item.badge"
            :class="{ 'ml-auto': !root, 'ml-2': root }"
            :value="item.badge"
          />
          <span v-if="hasSubmenu" class="sub-menu pi pi-fw pi-angle-down" />
        </a>
      </template>
      <template #end>
        <div class="search-and-user-icon">
          <InputText class="search-input" placeholder="Search" type="text" />
          <Avatar
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            shape="circle"
          />
          <ToggleMoodComponent />
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script>
import { Avatar, Badge, Menubar } from "primevue";
import ToggleMoodComponent from "../components/toggleMoodComponent.vue";

export default {
  name: "HeaderNavigator",
  components: {
    ToggleMoodComponent,
    Avatar,
    Badge,
    Menubar,
  },
  data() {
    return {
      items: [
        {
          label: "Product",
        },
        {
          label: "Service",
          badge: 3,
          items: [
            {
              label: "Core",
              icon: "pi pi-bolt",
            },
            {
              label: "Blocks",
              icon: "pi pi-server",
            },
            {
              label: "UI Kit",
              icon: "pi pi-pencil",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style>
.container-wrapper {
  background: #043873;
  display: flex;
  justify-content: center;

  .header-navigator-container {
    background-color: transparent !important;
    border: none !important;
    border-radius: 0 !important;
    max-width: 1440px;
    width: 100%;

    .p-menubar-item-content {
      color: #ffff;
    }

    .p-menubar-submenu {
      a {
        color: var(--st-surface-text);
      }
    }

    .search-and-user-icon {
      display: flex;
      gap: 1rem;
      align-items: center;

      .search-input {
        width: 70%;
      }
    }
  }
}
</style>
