import { Store } from '@models'
import { invalidate } from '$app/navigation';
let count = 5
/** @type {import('./$types').PageServerLoad} */

export async function load({depends}) {
    let res = await Store.get(count)
    depends('update');
    return {
        store: res,
        count: count,
        loadMore: (e) => {
            invalidate('update');
            count+= e
        },
        reset: () => {
            invalidate('update');
            count = 5
        }
    };
}