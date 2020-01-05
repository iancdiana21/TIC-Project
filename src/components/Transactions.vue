<template>
  <div>
    <panel title="Persons">
      <v-btn slot="action" @click="sortPersons()" right flat icon absolute>
        <v-icon>sort</v-icon>
      </v-btn>
      <v-list v-for="p in persons" :key="p.uid">
        <v-list-tile avatar ripple @click.stop>
          <v-list-tile-content @click="showTransactions(p.uid)">
            <v-list-tile-title>{{p.firstName}} {{p.lastName}}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{p.email}}</v-list-tile-sub-title>
            <v-list-tile-sub-title>{{ p.phoneNumber }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </panel>
    <panel title="Transactions">
      <v-btn slot="action" :to="{ name: 'addTransaction' }" right flat icon absolute>
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn @click="sortTransactionsByAmount(1)" small>By Amount
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
      <v-btn @click="sortTransactionsByAmount(0)" small>By Amount
        <v-icon>keyboard_arrow_down</v-icon>
      </v-btn>
      <v-btn @click="sortTransactionsByCurrencyName(1)" small>By Currency
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
      <v-btn @click="sortTransactionsByCurrencyName(0)" small>By Currency
        <v-icon>keyboard_arrow_down</v-icon>
      </v-btn>
      <v-list v-for="t in transactions" :key="t.uid">
        <v-list-tile avatar ripple @click.stop>
          <v-list-tile-content>
            <v-list-tile-title>Account {{t.account}}</v-list-tile-title>
            <v-list-tile-sub-title class="text--primary">{{t.transactionType}} in {{t.currencyName}}</v-list-tile-sub-title>
            <v-list-tile-sub-title>Sum: {{ t.amount }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn flat icon :to="{ name: 'editTransaction',  params: { transactionUID: t.uid }}">
              <v-icon>edit</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-action>
            <v-btn flat icon @click="deleteTransaction(t)">
              <v-icon>delete</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </panel>
  </div>
</template>

<script>
/* eslint-disable */
import PersonService from "@/services/PersonService";
import TransactionService from "@/services/TransactionService";
import Panel from "@/components/Panel";
export default {
  components: {
    Panel
  },
  data() {
    return {
      persons: null,
      transactions: null,
      selectedPersonUID: ""
    };
  },
  async mounted() {
    this.persons = (await PersonService.getPersons()).data;
    this.transactions = (await TransactionService.getTransactions()).data;
  },
  methods: {
    async deleteTransaction(t) {
      console.log('uid of transaction to delete - ' + t.uid)
      console.log('personUID part of transaction to delete - ' + t.personUID)
      this.transactions = (await TransactionService.deleteTransaction(
        t.uid,
        // this.selectedPersonUID
        t.personUID
      )).data;
    },
    async showTransactions(uid) {
      this.selectedPersonUID = uid;
      this.transactions = (await TransactionService.getTransactionsByPerson(
        uid
      )).data;
    },
    sortPersons() {
      this.persons.sort(function(a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      });
    },
    sortTransactionsByAmount(asc) {
      this.transactions.sort(function(a, b) {
        if (asc == 1) return a.amount - b.amount;
        else if (asc == 0) return b.amount - a.amount;
      });
    },
    sortTransactionsByCurrencyName(asc) {
      this.transactions.sort(function(a, b) {
        if (asc == 1) {
          if (a.currencyName < b.currencyName) {
            return -1;
          }
          if (a.currencyName > b.currencyName) {
            return 1;
          }
        } else {
          if (b.currencyName < a.currencyName) {
            return -1;
          }
          if (b.currencyName > a.currencyName) {
            return 1;
          }
        }
        return 0;
      });
    }
  }
};
</script>

<style scoped>
</style>
