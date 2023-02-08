import { DB } from '@utils'
class Product {
    constructor(id) {
        this.id = id
    }
    get = async () => {
      let product = await DB.get('/products/'+this.id)
      return {
        product: product || {}
      }
    }
}

export default Product
