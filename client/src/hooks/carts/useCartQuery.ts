
import { useQuery } from '@tanstack/react-query'
import { getAllCarts } from '../../services/carts'


const useCartQuery = () => {
    
    const user = JSON.parse(localStorage.getItem('user'));
    const query = useQuery({
        queryKey:["CARTS_KEY", user],
        queryFn: async()=>{
            const userId = user?.data?._id;
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