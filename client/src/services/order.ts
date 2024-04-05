import instance from "../config/axios"

export const getAllOrderByUserId = async(userId: string | number)=>{
    try {
        const res = await instance.get(`/orders/userId/${userId}`);
        return res.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getOrderById = async(id:string|number)=>{
    try {
        const res = await instance.get(`/orders/${id}`);
        return res.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getAllOrder = async()=>{
    try {
        const res = await instance.get('/orders')
        return res.data
    } catch (error) {
        console.log(error)
        return []
    }
}

export const updateOrderStatus = async(options:{id:number|string, status:string})=>{
    try {
        await instance.put(`/orders/status/${options.id}`, options)
    } catch (error) {
        console.log(error)
    }
}