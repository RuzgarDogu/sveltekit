import  { Reservation } from '@models'
/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    console.log(params)
    let asd = await Reservation.get(params.slug)
    console.log("asd",asd)
    return asd;
};