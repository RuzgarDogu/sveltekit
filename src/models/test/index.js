import { DB } from '@utils'
class MaxUser {
    constructor() {
        ;(this.id = null)
        this.url = 'https://maxtoria.arnivaokc.com:8080/reservations?profile_id=103'
    }
    get = async () => {
      let products = await DB.get('/products')
      return {
        reservations: products || []
      }
    }
}
let User = new MaxUser()
export default User
