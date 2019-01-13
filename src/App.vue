<template>
  <div id="app">
    <p-navigation/>
    <router-view/>
  </div>
</template>

<script>
import PNavigation from '@/components/PNavigation.vue';

export default {
  components: {
    PNavigation,
  },
};
</script>


<style lang="scss">
body, * {
  margin: 0;
}
h1 {
  font-size: 1.5em;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #3c3a30;
  button {
    padding: 8px 16px;
    background: #f5d20a;
    font-size: 1em;
    border: none;
    border-bottom: 2px solid #e4c617;
    border-radius: 4px;
  }
}
</style>
