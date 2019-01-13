<template>
  <div class="home">
    <p-button-add/>
    <p-glou-glou/>
  </div>
</template>

<script>
import PButtonAdd from '@/components/PButtonAdd.vue';
import PGlouGlou from '@/components/PGlouGlou.vue';

export default {
  name: 'home',
  components: {
    PButtonAdd,
    PGlouGlou,
  },
};
</script>

<style lang="scss">
.home {
  margin: 16px
}
</style>
