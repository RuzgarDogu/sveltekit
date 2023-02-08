import { DB } from '@utils'
class MaxStore {
    constructor() {
        this.active = true
    }
    get = async (count=1) => {
      let store = await DB.get('/products?limit='+count)
      return store.products || []
    }
}
let Store = new MaxStore()
export default Store
