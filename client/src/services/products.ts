import instance from "../config/axios"
import { IProduct } from "../interfaces/IProduct"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllProducts = async(params?: any)=>{
    try {
        const response = await instance.get('/products', { params })
        return response.data
        
    } catch (error) {
        return []
    }
}
export const getProductById = async (id: number | string) => {
    try {
        const response = await instance.get(`/products/${id}`)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const addProduct = async (product: IProduct) => {
    
    try {
        const response = await instance.post(`/products`, product)
        return response.data
    } catch (error) {
        console.log(error)
    }
}
export const updateProducts = async(product:IProduct)=>{
    try {
        await instance.put(`/products/${product._id}`,product)
    } catch (error) {
        console.log(error)
    }
}
export const deleteProducts = async(id:number|string)=>{
    try {
        await instance.delete(`/products/${id}`)
    } catch (error) {
        console.log(error)
    }
}