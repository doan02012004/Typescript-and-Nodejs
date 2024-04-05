import { useMutation, useQueryClient } from '@tanstack/react-query'

import { updateOrderStatus } from '../../services/order'

const useOrderMutation = () => {
    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn:async(options:{_id:number|string, status:string})=>{
            try {
                const res = await updateOrderStatus(options)
                return res
            } catch (error) {
                console.log(error)
            }
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:["ORDER_KEY"]})
        }
    })
  return mutation
}

export default useOrderMutation