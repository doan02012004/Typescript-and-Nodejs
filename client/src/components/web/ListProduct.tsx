import { Link, useSearchParams } from "react-router-dom"
import { IProduct } from "../../interfaces/IProduct"
import useCartMutation from "../../hooks/carts/useCartMutation"

type ProductList = {
  products: IProduct[],
  pagination?:{
    currentPage: number,
    totalPages: number,
    totalItems: number
}
}

const ListProduct = ({products, pagination}:ProductList) => {
  const [params] = useSearchParams()
  const page = params.get('page')
  const { totalPages } = pagination || { totalPages: 1 }
  const mutation = useCartMutation("addtocart")
  const onAddToCart = (id:string)=>{
    const res = {
        productId: id,
        quantity: 1
    }
    mutation.mutate(res)
  }
  return (
   <section className="list-product">
  <div className="container">
    <div className="products products-shop">
     {products?.map((product:IProduct,i:number)=>(
      <div className="product" key={i}>
      <div className="product-image">
        <img src={product.image} className="product-image_item"  />
        {product.discount != 0 && ( <span className="product-image_sale">-{product.discount}%</span>)}
      </div>
      <div className="product-content">
        <h1 className="product-content_name">{product.name}</h1>
        <a className="product-content_link" href="#"><span>Category</span></a>
        <div className="product-content-price">
          <span className="product-content-price_new">{product.price-(product.price*product.discount / 100)}đ</span>
          <span className="product-content-price_old">{product.price}đ</span>
        </div>
      </div>
      <div className="product-extra">
      <Link to={`/product-detail/${product._id}`} className="product-extra_link"> <button className="product-extra_btn">Quick View</button></Link>
        <a className="product-extra_link"> <button className="product-extra_btn" onClick={()=> onAddToCart(product._id)}>Add To Cart</button></a>
        <div className="product-extra-block">
          <span>Compare</span>
          <span>Share</span>
          <span>Like</span>
        </div>
      </div>
    </div>
     ))}
    </div>
    <div className="product-page">
    {Array.from({ length: totalPages }, (_, i) => (
                <Link key={i + 1} to={`?page=${i + 1}`} className={parseInt(page || '1') === i + 1 ? 'product-page_link active' : 'product-page_link'}>
                    <button className="product-page_btn">{i+1}</button>
                </Link>
            ))}
      {/* <a href="#" className=""><button className="product-page_btn">1</button></a>
      <a href="#" className="product-page_link"><button className="product-page_btn">2</button></a>
      <a href="#" className="product-page_link"><button className="product-page_btn">3</button></a>
      <a href="#" className="product-page_link"><button className="product-page_btn">Next</button></a> */}
    </div>
  </div>
</section>

  )
}

export default ListProduct