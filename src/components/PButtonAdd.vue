<template>
  <div class="button">
    <button @click="handleDrink">Glou</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'drink',
    ]),

    handleDrink() {
      this.drink({ date: new Date(), glou: 1 });
    },
  },
};
</script>
