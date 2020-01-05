import Api from '@/services/Api'

export default {
  getTransactions () {
    return Api().get('transactions')
  },
  addTransaction (data) {
    return Api().post('transactions', data)
  },
  editTransaction (uid, data) {
    return Api().put(`transactions/${uid}`, data)
  },
  deleteTransaction (uid, personUID) {
    return Api().delete(`transactions/${uid}/${personUID}`)
  },
  getTransaction (uid) {
    return Api().get(`transactions/${uid}`)
  },
  getTransactionsByPerson (uid) {
    return Api().get(`transactions/person/${uid}`)
  }
}
