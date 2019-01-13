<template>
  <div class="glou">
    <p>{{ drinkTree }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      drinkTree: state => state.drinkTree,
    }),
  },
};
</script>
