<template>
  <v-app>
    <v-app-bar
      class="grey darken-3 elevation-1 white--text"
      app
    >
      <v-img
        src="@/assets/logo.png"
        aspect-ratio="1"
        max-width="32"
        class="mr-3"
      />
      <v-toolbar-title class="title">
        <span>PicolePixels</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
