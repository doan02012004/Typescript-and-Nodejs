
import { useState } from 'react'
import useCartMutation from '../../hooks/carts/useCartMutation'
import { IProduct } from '../../interfaces/IProduct'
import { useNavigate } from 'react-router-dom'

type Props = {
    product:IProduct
}
const ProductDetail = ({product}:Props) => {
  const navigate = useNavigate()
  const [quantity,setQuantity] = useState(1)
  const onHandleQuantity = (quantity:number)=>{
    // Kiểm tra nếu giá trị mới là một số và lớn hơn hoặc bằng 1 thì set giá trị mới vào state quantity
    if (!isNaN(quantity) && parseInt(quantity) >= 1) {
      setQuantity(parseInt(quantity));
    }
    
  }
  const onDecrease = ()=>{
    if(quantity>1){
      const newQuantity = parseInt(quantity)-1
      setQuantity(newQuantity)
    }
  }
  const onIncrease = ()=>{
      const newQuantity = parseInt(quantity)+1
      setQuantity(newQuantity)
  }
  const mutation = useCartMutation("addtocart")
  const onAddToCart = (id:string|number)=>{
    const res = {
      productId : id,
      quantity: quantity
    }
   
  mutation.mutate(res)
  navigate('/carts')
  }
  return (
   <>
  <div>
  <section className="address-page">
    <div className="container">
      <div className="address-inner">
        <div className="address-content">
          <div className="address-item address_border">
            <a href="#" className="address_link">Home</a>
            <span className="address_icon"><i className="fa-solid fa-angle-right" /></span>
            <a href="#" className="address_link">Shop</a>
            <span className="address_icon"><i className="fa-solid fa-angle-right" /></span>
          </div>
          <div className="address-item">
            <h3 className="address_name">{product?.name}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="product-detail">
    <div className="container">
      <div className="product-detail-inner">
        <div className="product-detail-image">
          <div className="product-detail-image-extra">
            {product?.gallery?.map((item,i)=>(
                  <div className="product-detail-image-extra_item" key={i}>
                  <img src={item} />
                </div>
            ))}
           
          </div>
          <div className="product-detail-image-main">
            <div className="product-detail-image-main_item">
              <img src={product?.image}  />
            </div>
          </div>
        </div>
        <div className="product-detail-content">
          <h1 className="product-detail-content_name">{product?.name}</h1>
          <p className="product-detail-content_price">{product?.price-(product?.price*product?.discount / 100)}đ</p>
          <div className="product-detail-content-star">
            <div className="product-detail-content-star_item">
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
              <i className="fa-solid fa-star" />
            </div>
            <div className="product-detail-content-star_border">
              |
            </div>
            <div className="product-detail-content-star_text">
              <p>5 Customer Review</p>
            </div>
          </div>
          <div className="product-detail-content-des">
            <p>Setting the bar as one of the loudest speakers in its class,
              the Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a sound.
            </p>
          </div>
          <div className="product-detail-content-size">
            <h3 className="product-detail-content-size_title">Size</h3>
            <div className="product-detail-content-size_item">
              <button className="product-detail-content-size_btn active">L</button>
              <button className="product-detail-content-size_btn">XL</button>
              <button className="product-detail-content-size_btn">XS</button>
            </div>
          </div>
          <div className="product-detail-content-color">
            <h3 className="product-detail-content-color_title">Color</h3>
            <div className="product-detail-content-color_item">
              <div className="product-detail-content-color_btn violet" />
              <div className="product-detail-content-color_btn blue" />
              <div className="product-detail-content-color_btn black" />
            </div>
          </div>
          <div className="product-detail-content-btn">
            <div className="product-detail-content-btn_quantity">
              <span className="product-detail-content-btn_knot reduced " onClick={onDecrease}>-</span>
              <input className="product-detail-content-btn_input product-quantity" value={quantity} type="number"  min={1}  onChange={(e)=>onHandleQuantity(e.target.value)} />
             
              <span className="product-detail-content-btn_knot increase" onClick={onIncrease}>+</span>
            </div>
            <button className="product-detail-content-btn_btn" onClick={()=>onAddToCart(product._id)}>Add To Cart</button>
            <button className="product-detail-content-btn_btn">Compare</button>
          </div>
          <div className="product-detail-content-extra">
            <div className="product-detail-content-extra-border">
              <hr />
            </div>
            <div className="product-detail-content-extra_item">
              <span className="product-detail-content-extra_title">SKU</span>
              <span className="product-detail-content-extra_name"><span className="product-detail-content-extra_dot">:</span>SS001</span>
            </div>
            <div className="product-detail-content-extra_item">
              <span className="product-detail-content-extra_title">Category</span>
              <span className="product-detail-content-extra_name"><span className="product-detail-content-extra_dot">:</span>Sofas</span>
            </div>
            <div className="product-detail-content-extra_item">
              <span className="product-detail-content-extra_title">Tags</span>
              <span className="product-detail-content-extra_name"><span className="product-detail-content-extra_dot">:</span>Sofa, Chair, Home, Shop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="description">
    <div className="container">
      <div className="description-title">
        <div className="description-title_item active">
          <h1>Description</h1>
        </div>
        <div className="description-title_item">
          <h1>Additional Information</h1>
        </div>
        <div className="description-title_item">
          <h1>Reviews [5]</h1>
        </div>
      </div>
      <div className="description-text">
        <p className="description-text_item">
          Weighing in under 7 pounds, the Kilburn is a lightweight
          piece of vintage styled engineering. Setting the bar as one of the
          loudest speakers in its class, the Kilburn is a compact, stout-hearted 
          hero with a well-balanced audio which boasts a clear midrange and extended 
          highs for a sound that is both articulate and pronounced. The analogue knobs
          allow you to fine tune the controls to your 
          personal preferences while the guitar-influenced leather 
          strap enables easy and stylish travel.
        </p>
      </div>
      <div className="description-image">
        <div className="description-image_item">
          <a  className="description-image_link"><img className="description-image_img" src="https://picsum.photos/id/15/605/348"   /></a>
        </div>
        <div className="description-image_item">
          <a  className="description-image_link"><img className="description-image_img" src="https://picsum.photos/id/15/605/348"   /></a>
        </div>
      </div>
    </div>
  </section>
</div>

   </>
  )
}

export default ProductDetail