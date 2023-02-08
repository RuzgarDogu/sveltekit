import { Store } from '@models'

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    let res = await Store.get()
    return {
        store: res
    };
};