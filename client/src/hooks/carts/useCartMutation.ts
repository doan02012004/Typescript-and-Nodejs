import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addToCart, removeItemCart } from "../../services/carts"


const useCartMutation = (action:string) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn:async (res:{productId:string|number,quantity:number})=>{
                const cart = {
                    userId : user?.data?._id,
                    productId: res.productId,
                    quantity: res.quantity
                }
                try {
                        switch (action) {
                            case "addtocart":
                                await addToCart(cart)
                                break;
                            case "removecart":
                                    await removeItemCart(cart)
                                    break;
                            default:
                                break;
                        }
                    } catch (error) {
                        console.log(error)
                    }
            
           
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:['CARTS_KEY']})
        }
    })
  return mutation
}

export default useCartMutation