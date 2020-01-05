<template>
  <panel title="Persons">
    <v-list v-for="p in persons" :key="p.uid">
      <v-list-tile avatar ripple>
        <v-list-tile-content>
          <v-list-tile-title>{{p.firstName}}  {{p.lastName}}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{p.email}}</v-list-tile-sub-title>
          <v-list-tile-sub-title>{{ p.phoneNumber }}</v-list-tile-sub-title>
        </v-list-tile-content>
         <v-list-tile-action>
               <v-btn fab flat small @click="deletePerson(p.uid)">
                 <v-icon>delete</v-icon>
               </v-btn>
            </v-list-tile-action>
      </v-list-tile>
      <v-divider></v-divider>
    </v-list>
  </panel>
</template>

<script>
import PersonService from '@/services/PersonService'
import Panel from '@/components/Panel'
import Toastr from 'vue-toastr'
export default {
  components: {
    Panel, Toastr
  },
  data () {
    return {
      persons: null
    }
  },
  async mounted () {
    this.persons = (await PersonService.getPersons()).data
  },
  methods: {
    async deletePerson (uid) {
      PersonService.deletePerson(uid)
      this.$router.go()
    }
  }
}
</script>

<style scoped>
</style>
