
import { useQuery } from '@tanstack/react-query'
import { getAllCarts } from '../../services/carts'
import useLocalStorage from '../auth/useStorage'


const useCartQuery = () => {
    
    const [value,] = useLocalStorage('user',{})
    
    const userId = value?.data._id;
    
    const query = useQuery({
        queryKey:["CARTS_KEY", userId ],
        queryFn: async()=>{
            try {
                const res = await getAllCarts(userId)
                return res.data
            } catch (error) {
                console.log(error)
            }
        }
    })
      // Tính tổng giá của tất cả sản phẩm
  const totalCost = query?.data?.reduce((total, cart) => total + (cart.price * cart.quantity), 0);
  return {
    query,
    totalCost
  }
}

export default useCartQuery