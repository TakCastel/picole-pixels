<template>
  <div class="button">
    <button @click="drink">Glou</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations([
      'drink',
    ]),
  },
};
</script>
