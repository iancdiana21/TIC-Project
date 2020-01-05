import Api from '@/services/Api'

export default {
  getPersons () {
    return Api().get('persons')
  },
  addPerson (data) {
    return Api().post('persons', data)
  },
  deletePerson (uid) {
    return Api().delete(`persons/${uid}`)
  },
  addFakePerson () {
    Api().get('fakePersons/1')
    return Api().get('persons')
  }
}
