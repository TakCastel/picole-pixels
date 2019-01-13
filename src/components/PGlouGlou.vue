<template>
  <div class="glou">
    Vous avez bu {{ glou }} fois
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      glou: state => state.glou,
    }),
  },
};
</script>
