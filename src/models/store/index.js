import { DB } from '@utils'
class MaxStore {
    constructor() {
        this.active = true
    }
    get = async () => {
      let store = await DB.get('/products')
      return store.products || []
    }
}
let Store = new MaxStore()
export default Store
