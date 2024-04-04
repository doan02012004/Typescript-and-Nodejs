import { useQuery } from "@tanstack/react-query"
import { getAllCategories } from "../../services/categories"


const useCategoriesQuery = () => {
    const query = useQuery({
        queryKey:['CATEGORY_KEY'],
        queryFn:async()=>{
            try {
                return await getAllCategories()
            } catch (error) {
                return []
            }
        }
    })
  return query
  
}

export default useCategoriesQuery
