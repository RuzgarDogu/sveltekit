import { Test } from '@models'
// console.log("Test",Test)
export async function load({ params }) {
    console.log("params",params)
    let asd = await Test.get()
    return asd
}
