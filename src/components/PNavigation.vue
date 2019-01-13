<template>
  <div class="nav">
    <div class="nav-logo">
      <img src="@/assets/logo.png" alt="logo" width="32">
    </div>
    <div class="nav-title">
      <h1>Picole Pixels</h1>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  .nav {
    display: flex;
    align-items: center;
    justify-content: start;
    background: #3c3a30;
    color: #f5d20a;
    padding: 16px;
    * + * {
      margin-left: 10px
    }
  }
</style>
