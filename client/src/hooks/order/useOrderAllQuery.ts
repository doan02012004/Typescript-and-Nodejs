import { useQuery } from "@tanstack/react-query"
import { getAllOrder, getOrderById } from "../../services/order";


const useOrderAllQuery = (id? : string|number) => {
    const query = useQuery({
        queryKey:["ORDER_KEY",id],
        queryFn: async ()=>{
            try {
                return id? await getOrderById(id) : await getAllOrder();
            } catch (error) {
                console.log(error);
                return []
            }
        }
    })
  return query
}

export default useOrderAllQuery