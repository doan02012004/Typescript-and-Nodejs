import instance from "../config/axios"
import { IUser } from "../interfaces/IUser"

export const Singin = async(user:IUser)=>{
    try {
        const res = await instance.post('/users/login',user)
        return res.data
    } catch (error) {
        console.log(error)
    }
}