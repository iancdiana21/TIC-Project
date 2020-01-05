import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import Login from '@/components/Login'
import HomePage from '@/components/HomePage'
import Persons from '@/components/Persons'
import Transactions from '@/components/Transactions'
import TransactionForm from '@/components/TransactionForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/persons',
      name: 'persons',
      component: Persons
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    },
    {
      path: '/transactions/add',
      name: 'addTransaction',
      component: TransactionForm
    },
    {
      path: '/transactions/:transactionUID',
      name: 'editTransaction',
      component: TransactionForm
    }
  ]
})
