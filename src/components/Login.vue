<template>
    <panel title="Login">
        <v-text-field
            color="black"
            v-model="username"
            name="username"
            type="text"
            label="Username"
        ></v-text-field>
        <v-text-field
            color="black"
            v-model="password"
            name="password"
            type="password"
            label="Password"
        ></v-text-field>
        <v-btn dark
            @click="signup">
            Login
        </v-btn>
    </panel>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  methods: {
    data () {
      return {
        username: this.username,
        password: this.password
      }
    },
    signup () {
      AuthenticationService.login({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>
