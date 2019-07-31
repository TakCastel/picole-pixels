<template>
  <v-btn
    color="primary"
    depressed
    large
    @click="userDrink(new Date)"
  >
    Glou
  </v-btn>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'userDrink'
    ])
  }
}
</script>
