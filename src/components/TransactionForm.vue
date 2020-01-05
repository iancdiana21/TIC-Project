<template>
  <panel title="Add transaction">
    <v-form ref="form" v-model="valid" >
      <v-select
        v-model="person"
        :items="persons"
        :rules="[v => !!v || 'Person is required']"
        item-text="fullName"
        item-value="uid"
        label="Person"
        required
      ></v-select>
      <v-text-field
        v-model="account"
        label="Account"
        :rules="[v => !!v || 'Account is required']"
        required
      ></v-text-field>
      <v-text-field
        v-model="amount"
        label="Amount"
        :rules="[v => !!v || 'Amount is required']"
        required
        type="number"
      ></v-text-field>
      <v-text-field
        v-model="currency"
        label="Currency"
        :rules="[v => !!v || 'Currency is required']"
        required
      ></v-text-field>
      <v-text-field
        v-model="transactionType"
        label="Transaction type"
        :rules="[v => !!v || 'Transaction type is required']"
        required
      ></v-text-field>
      <v-btn :disabled="!valid" color="success" @click="submit">Submit</v-btn>
      <v-btn color = "error" to='/transactions'> Reset Form</v-btn>
    </v-form>
  </panel>
</template>

<script>
import PersonService from '@/services/PersonService'
import TransactionService from '@/services/TransactionService'
import Panel from '@/components/Panel'
import Toastr from 'vue-toastr'
export default {
  components: {
    Panel, Toastr
  },
  data () {
    return {
      persons: null,
      valid: true,
      person: null,
      personUID: '',
      account: '',
      amount: '',
      currency: '',
      transactionType: '',
      editTransactionUID: ''
    }
  },
  async mounted () {
    this.persons = (await PersonService.getPersons()).data
    this.persons.forEach(element => {
      element.fullName = element.firstName + ' ' + element.lastName
    })

    this.editTransactionUID = this.$route.params.transactionUID
    console.log('this.editTransactionUID - ' + this.editTransactionUID)
    if (this.editTransactionUID !== undefined) {
      var editTransaction = (await TransactionService.getTransaction(this.editTransactionUID)).data
      console.log('this.editTransaction - ' + this.editTransaction)
      if (editTransaction !== undefined) {
        this.person = editTransaction.personUID
        console.log('person = ' + this.person)
        console.log('editTransaction pt personUID: ' + editTransaction.personUID)
        this.personUID = editTransaction.personUID
        this.account = editTransaction.account
        this.amount = editTransaction.amount
        this.currency = editTransaction.currencyName
        this.transactionType = editTransaction.transactionType
      }
    }
  },
  methods: {/* eslint-disable */
    submit () {
      this.persons.forEach(element => {
        element.fullName = element.firstName + ' ' + element.lastName
        console.log('element.fullName = ' + element.fullName + ' and this.person = ' + this.person)
        if (element.fullName === this.person) {
          console.log('element.personUID = ' + element.personUID)
          this.personUID = element.personUID
        }
      })

      var transactionToSubmit = {
        uid: this.editTransactionUID,
        personUID: this.personUID,
        account: this.account,
        amount: this.amount,
        currencyName: this.currency,
        transactionType: this.transactionType
      }
      console.log('in submit() method, this.editTransactionUID - ' + this.editTransactionUID)
      console.log('this.person - ' + this.person)
      console.log('this.personUID - ' + this.personUID)
      if (this.editTransactionUID !== undefined) {
        TransactionService.editTransaction(this.editTransactionUID, transactionToSubmit)
      }
      else {
        TransactionService.addTransaction(transactionToSubmit)
      }
      this.$router.push({ name: 'transactions' })
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
</style>
