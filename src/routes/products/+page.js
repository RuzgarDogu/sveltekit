import { Store } from '@models'
let count = 3
/** @type {import('./$types').PageServerLoad} */
export async function load({depends}) {
    depends('test');
    count++
    let res = await Store.get(count)
    return {
        store: res,
        count: count
    };
};