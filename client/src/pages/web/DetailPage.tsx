import React, { useEffect } from 'react'
import ProductDetail from '../../components/web/ProductDetail'
import Related from '../../components/web/Related'
import { useProductQuery } from '../../hooks/products/useProductQuery'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
    const {id} = useParams()
    const query = useProductQuery({id})
    useEffect(()=>{
    },[id,query?.data?.data])
  return (
    <>
    <ProductDetail product = {query?.data?.data} />
    <Related product = {query?.data?.data} />
    </>
  )
}

export default DetailPage