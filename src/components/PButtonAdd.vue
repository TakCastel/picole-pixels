<template>
  <div class="button">
    <button @click="handleClick">Glou {{ glou }}</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    glou: 0,
  }),
  methods: {
    handleClick() {
      this.glou++;
    },
  },
};
</script>
