import instance from "../config/axios"
import { ICart } from "../interfaces/ICart"

export const addToCart = async(cart:ICart) =>{
    try {
        await instance.post('/carts/addtocart',cart)
    } catch (error) {
        console.log(error)
    }
}
export const removeItemCart = async(cart:ICart)=>{
    try {
        const res = await instance.post(`/carts/remove`, cart)
        return res.data
    } catch (error) {
        console.log(error)
    }
}
export const getAllCarts = async(userId:string)=>{
    try {
        const res = await instance.get(`/carts/${userId}`)
        return res.data
    } catch (error) {
        console.log(error)
    }
}