
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/IProduct";
import useCartMutation from "../../hooks/carts/useCartMutation";


type Props = {
    products:IProduct[]
}

const News = ({products}:Props) => {
  const featuredProducts = products?.filter((product: IProduct) => product.featured === true)
  const mutation = useCartMutation("addtocart")
  const onAddToCart = (id:string)=>{
    const res = {
        productId: id,
        quantity: 1
    }
    mutation.mutate(res)
  }
  return (
    <section className="new">
      <div className="container">
        <section className="section-heading">
          <div className="section-heading-item">
            <h1 className="section-heading_title">New</h1>
          </div>
        </section>
      </div>
      <section className="section-body">
        <div className="container">
          <div className="products">
            {featuredProducts?.map((product,i)=>{
                if(i<4){
                    return   <div className="product" key={i}>
                    <div className="product-image">
                      <img
                        src={product.image}
                        className="product-image_item"
                      />
                     {product.discount != 0 && ( <span className="product-image_sale">-{product.discount}%</span>)}
                    </div>
                    <div className="product-content">
                      <h1 className="product-content_name">{product.name}</h1>
                      <a className="product-content_link" href="#">
                        <span>Category</span>
                      </a>
                      <div className="product-content-price">
                        <span className="product-content-price_new">{(product.price-(product.price*product.discount / 100)).toLocaleString('vi-VN')} đ</span>
                        <span className="product-content-price_old">{product.price.toLocaleString('vi-VN')} đ</span>
                      </div>
                    </div>
                    <div className="product-extra">
                      <Link to={`/product-detail/${product._id}`} className="product-extra_link">
                        
                        <button className="product-extra_btn">Quick View</button>
                      </Link>
                      <a  className="product-extra_link">
                        <button className="product-extra_btn" onClick={()=> onAddToCart(product._id)}>Add To Cart</button>
                      </a>
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
        </div>
      </section>
    </section>
  );
};

export default News;
