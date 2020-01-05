<template>
        <panel title="Sign up">
        <v-text-field
            color="black"
            v-model="email"
            name="email"
            type="email"
            label="Email"
        ></v-text-field>
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
            Sign up
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
        email: this.email,
        username: this.username,
        password: this.password
      }
    },
    signup () {
      AuthenticationService.signup({
        email: this.email,
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>

<style scoped>

</style>
