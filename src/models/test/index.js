var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// fetch("https://maxtoria.arnivaokc.com:8080/reservations?profile_id=103", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

class MaxUser {
    constructor() {
        ;(this.id = null)
        this.url = 'https://maxtoria.arnivaokc.com:8080/reservations?profile_id=103'
    }
    get = async () => {
      let reservations
      await fetch("https://maxtoria.arnivaokc.com:8080/reservations?profile_id=103", requestOptions)
        .then(response => response.text())
        .then(result => reservations = (JSON.parse(result)).data)
        .catch(error => console.log('error', error))
      return {
        reservations: reservations || []
      }
    }
}
let User = new MaxUser()
export default User
