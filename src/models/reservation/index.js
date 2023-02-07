var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
    
  class MaxReservation {
      constructor() {
          ;(this.id = null)
          this.url = 'https://maxtoria.arnivaokc.com:8080/reservations?operator_id='
      }
      get = async (id) => {
        console.log("id",id)
        let reservation
        await fetch("https://maxtoria.arnivaokc.com:8080/reservations?operator_id="+id, requestOptions)
          .then(response => response.text())
          .then(result => reservation = (JSON.parse(result)).data[0])
          .catch(error => console.log('error', error))
        return {
          reservation: reservation || []
        }
  


        // const res = await fetch("https://maxtoria.arnivaokc.com:8080/reservations?operator_id="+id, requestOptions)

        // const data = await res.json()
        // console.log("data",data)
        // return {
        //     reservation: data
        // }

        //   .then(response => response.text())
        //   .then(result => reservations = (JSON.parse(result)).data)
        //   .catch(error => console.log('error', error))
        // return {
        //   reservations: reservations || []
        // }
      }
  }
  let Reservation = new MaxReservation()
  export default Reservation
  