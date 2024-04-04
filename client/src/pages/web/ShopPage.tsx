import { useEffect, useState } from "react"
import Action from "../../components/web/Action"
import BannerExtra from "../../components/web/BannerExtra"
import ListProduct from "../../components/web/ListProduct"
import Service from "../../components/web/Service"
import { useProductQuery } from "../../hooks/products/useProductQuery"
import { useSearchParams } from "react-router-dom"


const ShopPage = () => {
    const [params] = useSearchParams()
    const page = params.get('page')

    const [limit, setLimit] = useState(10)
    const [currentPage, setCurrentPage] = useState(page || 1)

    const { data, isLoading, refetch } = useProductQuery({ _page: page, _limit: limit })
    useEffect(() => {
        if (page && +page !== currentPage) {
            setCurrentPage(+page)
        }
    }, [page, currentPage])
    const { data: products, pagination } = data || { data: [], pagination: {} }
    // const query = useProductQuery();
    // console.log(query.data.data)
  return (
    <>
    <BannerExtra />
    <Action />
    <ListProduct  products={products} pagination={pagination} />
    <Service />
    </>
  )
}

export default ShopPage