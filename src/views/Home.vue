<template>
  <div class="home">
    <p-button-add/>
  </div>
</template>

<script>
import PButtonAdd from '@/components/PButtonAdd.vue';

export default {
  name: 'home',
  components: {
    PButtonAdd,
  },
};
</script>

<style lang="scss">
.home {
  margin: 16px
}
</style>
