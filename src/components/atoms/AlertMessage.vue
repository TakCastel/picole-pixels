<template>
  <v-alert
    v-model="alert"
    border="left"
    color="primary"
    class="elevation-1"
    icon="fa-beer"
    transition="scale-transition"
    colored-border
  >
    <slot />
    <v-layout>
      <v-spacer />
      <v-btn
        color="primary"
        class="mt-3"
        depressed
        outlined
        @click="handleClick"
      >
        J'ai compris
      </v-btn>
    </v-layout>
  </v-alert>
</template>

<script>
export default {
  props: {
    alert: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    handleClick () {
      this.$emit('dismiss')
    }
  }
}
</script>
