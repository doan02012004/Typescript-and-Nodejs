import { useQuery } from "@tanstack/react-query"
import useLocalStorage from "../auth/useStorage"
import {  getAllOrderByUserId, getOrderById } from "../../services/order";


const useOrderQuery = (id?:string) => {
    const [value,] = useLocalStorage('user',{});
    const options ={
        userId:  value?.data._id,
        orderId: id 
    }
    const query = useQuery({
        queryKey:['ORDER_KEY',options],
        queryFn: async()=>{
            try {
               return options.orderId? await getOrderById(options.orderId) : await getAllOrderByUserId(options.userId);
            } catch (error) {
                console.log(error)
            }
        }
    })

  return query
}

export default useOrderQuery