<template>
  <Dialog v-model:visible="visible" modal :header="modalTitle">
    <div class="confirmation-modal">
      <span>{{ modalDescription }}</span>

      <div class="confirmation-ctx-btn">
        <Button
          class="action-btn"
          type="button"
          label="No"
          severity="secondary"
          raised
          variant="outlined"
          @click="$emit('update:visible', false)"
        />
        <Button
          class="action-btn"
          severity="danger"
          type="button"
          raised
          label="Yes"
          @click="confirm"
        />
      </div>
    </div>
  </Dialog>
</template>

<script>
export default {
  name: "ConfirmationDialog",
  props: {
    modalDescription: {
      type: String,
      required: true,
    },
    modalTitle: {
      type: String,
      required: true,
    },
    isDialogVisible: {
      type: Boolean,
      required: false,
    },
    action: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    confirm() {
      this.$emit("confirm");
      this.$emit("update:visible", false);
    },
  },
};
</script>

<style>
.confirmation-modal {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .confirmation-ctx-btn {
    display: flex;
    gap: 3rem;
    justify-content: center;
    align-items: center;

    .action-btn {
      width: 120px;
    }
  }
}
</style>
