<template>
  <span>{{ totalDrink.length }}</span>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      totalDrink: state => state.glou
    })
  }
}
</script>
