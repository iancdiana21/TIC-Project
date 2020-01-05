<template>
  <v-toolbar dark fixed>
    <v-toolbar-title>TRANSACTIONS NOTES</v-toolbar-title>
    <v-toolbar-items>
      <v-btn dark :to="{ name: 'persons' }">Persons</v-btn>
      <v-btn dark :to="{ name: 'transactions' }">Transactions</v-btn>
      <!-- <v-btn dark :to="{ name: 'login' }">Login</v-btn> -->
      <!-- <v-btn dark :to="{name: 'signup' }">SignUp</v-btn> -->
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
</style>
