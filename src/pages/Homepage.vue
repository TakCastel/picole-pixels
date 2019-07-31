<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <alert-message
          :alert="showRules"
          @dismiss="userUnderstandRules"
        >
          A chaque fois que vous prenez une dose d'alcool, ajoutez-la à votre
          consommation en cliquant sur le bouton des Glous. Le tableau sera
          automatiquement mis à jour.
        </alert-message>
      </v-flex>
      <v-flex text-center>
        <p>
          <button-drink />
        </p>
      </v-flex>
      <v-flex>
        <counter-drink />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import AlertMessage from '@/components/atoms/AlertMessage'
import ButtonDrink from '@/components/atoms/ButtonDrink'
import CounterDrink from '@/components/atoms/CounterDrink'

export default {
  components: {
    AlertMessage,
    ButtonDrink,
    CounterDrink
  },

  data: () => ({
    hasUnderstoodRules: true
  }),

  computed: {
    ...mapState({
      showRules: state => state.showRules
    })
  },

  methods: {
    ...mapActions([
      'userUnderstandRules'
    ])
  }
}
</script>
