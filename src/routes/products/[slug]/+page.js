import { Product } from '@models'


/** @type {import('./$types').PageServerLoad} */
export async function load({params}) {
    console.log(params)
    let product = new Product(params.slug)
    let res = await product.get()
    return {
        product: res.product || {}
    };
};