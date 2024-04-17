import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IProduct } from "../../interfaces/IProduct";
import { addProduct, deleteProducts, updateProducts } from "../../services/products";
import { useNavigate } from "react-router-dom";

const useProductMutation = (action:string) => {
    const navigate = useNavigate()
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn:async(product:IProduct)=>{
            try {
                switch (action) {
                    case "addproducts":
                            await addProduct(product)
                            alert('Thêm thành công')
                            navigate("/admin/products")
                        break;
                    case "updateproducts":
                        await updateProducts(product)
                        alert('Cập nhật thành công')
                          navigate("/admin/products")
                        break;
                    case "deleteproducts":
                        await deleteProducts(product._id)
                    break;
                    default:
                        break;
                   }
            } catch (error) {
                console.log(error)
            }
        },
        onSuccess: ()=>{
            switch (action) {
                case "add":
                    alert("Thêm Thành Công")
                    
                    break;
                case "updateproducts":
                    alert("Cập nhật Thành Công")
                        break;
                case "deleteproducts":
                    alert("Xóa Thành Công")
                    break;
                default:
                    break;
            }
            queryClient.invalidateQueries({queryKey:["PRODUCT_KEY"]})
        }
    })
  return (
    mutation
  )
}

export default useProductMutation