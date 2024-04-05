import { useQuery } from '@tanstack/react-query'
import instance from '../../config/axios'
import { Link } from 'react-router-dom'
import { IProduct } from '../../interfaces/IProduct'
import useCartMutation from '../../hooks/carts/useCartMutation'


type Props = {
    product:IProduct
}
const Related = ({product}:Props) => {
        const query = useQuery({
            queryKey:['PRODUCT_KEY',product],
            queryFn:async()=>{
                try {
                  if(product){
                    const res = await instance.get(`/products/${product.category}/related/${product._id}`)
                    return res
                  }
                } catch (error) {
                    console.log(error)
                }
            }
        })
        const mutation = useCartMutation("addtocart")
        const onAddToCart = (id:string)=>{
          const res = {
              productId: id,
              quantity: 1
          }
          mutation.mutate(res)
        }
  return (
   <section className="related">
  <div className="container">
    <div className="related-title">
      <h1 className="related-title_item">RELATED PRODUCTS</h1>
    </div>
    <div className="relate-products">
      <div className="products products-shop ">
        {query?.data?.data.map((product,i)=>{

            if(i<4){
                return  <div className="product" key={i}>
                <div className="product-image">
                  <img src={product.image} className="product-image_item"  />
                  {product.discount != 0 && ( <span className="product-image_sale">-{product.discount}%</span>)}
                </div>
                <div className="product-content">
                  <h1 className="product-content_name">{product.name}</h1>
                  <a className="product-content_link" href="#"><span>Category</span></a>
                  <div className="product-content-price">
                    <span className="product-content-price_new">{(product.price-(product.price*product.discount / 100)).toLocaleString('vi-VN')} đ</span>
                    <span className="product-content-price_old">{product.price.toLocaleString('vi-VN')} đ</span>
                  </div>
                </div>
                <div className="product-extra">
                  <Link to={`/product-detail/${product._id}`} className="product-extra_link"> <button className="product-extra_btn">Quick View</button></Link>
                  <a  className="product-extra_link"> <button className="product-extra_btn" onClick={()=>onAddToCart(product._id)}>Add To Cart</button></a>
                  <div className="product-extra-block">
                    <span>Compare</span>
                    <span>Share</span>
                    <span>Like</span>
                  </div>
                </div>
              </div>
            }
        })}
      </div>
      <div className="related-showmore">
        <button className="related-showmore_btn">Show More</button>
      </div>
    </div>
  </div>
</section>

  )
}

export default Related