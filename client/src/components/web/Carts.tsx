import React from 'react'
import useCartQuery from '../../hooks/carts/useCartQuery'
import useCartMutation from '../../hooks/carts/useCartMutation'
import { Link } from 'react-router-dom'

const Carts = () => {
    const {query,totalCost} = useCartQuery()
    const mutation = useCartMutation('removecart');
    const onRemoveCart  = (id:string|number)=>{
      const res = {
        productId: id
      }
      mutation.mutate(res)
    }
    if(query?.data?.length > 0){
      return (
        <section className="cart">
       <div className="container">
         <div className="cart-inner">
           <div className="cart-list">
             <table className="cart-table">
               <thead className="cart-table_thead">
                 <tr>
                   <th />
                   <th>Product</th>
                   <th>Price</th>
                   <th>Quantity</th>
                   <th>Subtotal</th>
                   <th />
                 </tr>
               </thead>
               <tbody>
                 {query?.data?.map((cart,i)=>(
                       <tr key={i}>
                       <td>
                         <img className="cart-table_img" src={cart.image} />
                       </td>
                       <td>
                         <span className="cart-table_name">{cart.name}</span>
                       </td>
                       <td>
                         <span className="cart-table_price">{cart.price.toLocaleString('vi-VN')} đ</span>
                       </td>
                       <td className="cart-table_quantity">
                         <input className="cart-table_input" type="text" value={cart.quantity} />
                       </td>
                       <td>
                         <span className="cart-table_total">{(cart.price * cart.quantity).toLocaleString('vi-VN')}đ</span>
                       </td>
                       <td>
                         <span className="cart-table_btn" onClick={()=> onRemoveCart(cart.productId)}><i className="fa-solid fa-trash" /></span>
                       </td>
                     </tr>
                 ))}
               
               </tbody>
             </table>
             <div className="cart-mobile">
               <div className="cart-mobile-cards">
     
                 <div className="cart-mobile-item">
                   <div className="cart-mobile_image">
                     <img className="cart-mobile_img" src="https://picsum.photos/id/29/108/105"   />
                   </div>
                   <div className="cart-mobile-content">
                     <h1 className="cart-mobile-content_title">Asgaard sofa</h1>
                     <div className="cart-mobile-content_item">
                       <span className="cart-mobile-content_name">Price</span>
                       <span className="cart-mobile-content_text">25.000.000đ</span>
                     </div>
                     <div className="cart-mobile-content_item">
                       <span className="cart-mobile-content_name">Quantity</span>
                       <span className="cart-mobile-content_text"><input className="cart-table_input" type="text" defaultValue={1} /></span>
                     </div>
                     <div className="cart-mobile-content_item">
                       <span className="cart-mobile-content_name">Total</span>
                       <span className="cart-mobile-content_total">25.000.000đ</span>
                     </div>
                     <span className="cart-table_btn cart-mobile-content_btn"><i className="fa-solid fa-trash" /></span>
                   </div>
                 </div>
                 <div className="cart-mobile-item">
                   <div className="cart-mobile_image">
                     <img className="cart-mobile_img" src="https://picsum.photos/id/29/108/105" />
                   </div>
                   <div className="cart-mobile-content">
                     <h1 className="cart-mobile-content_title">Asgaard sofa</h1>
                     <div className="cart-mobile-content_item">
                       <span className="cart-mobile-content_name">Price</span>
                       <span className="cart-mobile-content_text">25.000.000đ</span>
                     </div>
                     <div className="cart-mobile-content_item">
                       <span className="cart-mobile-content_name">Quantity</span>
                       <span className="cart-mobile-content_text"><input className="cart-table_input" type="text" defaultValue={1} /></span>
                     </div>
                     <div className="cart-mobile-content_item">
                       <span className="cart-mobile-content_name">Total</span>
                       <span className="cart-mobile-content_total">25.000.000đ</span>
                     </div>
                     <span className="cart-table_btn cart-mobile-content_btn"><i className="fa-solid fa-trash" /></span>
                   </div>
                 </div>
                 <div className="cart-mobile-item">
                   <div className="cart-mobile_image">
                     <img className="cart-mobile_img" src="https://picsum.photos/id/29/108/105" alt srcSet />
                   </div>
                   <div className="cart-mobile-content">
                     <h1 className="cart-mobile-content_title">Asgaard sofa</h1>
                     <div className="cart-mobile-content_item">
                       <span className="cart-mobile-content_name">Price</span>
                       <span className="cart-mobile-content_text">25.000.000đ</span>
                     </div>
                     <div className="cart-mobile-content_item">
                       <span className="cart-mobile-content_name">Quantity</span>
                       <span className="cart-mobile-content_text"><input className="cart-table_input" type="text" defaultValue={1} /></span>
                     </div>
                     <div className="cart-mobile-content_item">
                       <span className="cart-mobile-content_name">Total</span>
                       <span className="cart-mobile-content_total">25.000.000đ</span>
                     </div>
                     <span className="cart-table_btn cart-mobile-content_btn"><i className="fa-solid fa-trash" /></span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           <div className="cart-carttotal">
             <h1 className="cart-carttotal_title">Cart Totals</h1>
             <div className="cart-carttotal-item">
               <span className="cart-carttotal-item_name">Subtotal</span>
               <span className="cart-carttotal-item_price">{totalCost.toLocaleString('vi-VN')} đ</span>
             </div>
             <div className="cart-carttotal-item">
               <span className="cart-carttotal-item_name">Total</span>
               <span className="cart-carttotal-item_total">{totalCost.toLocaleString('vi-VN')} đ</span>
             </div>
             <div className="cart-carttotal-checkout">
               <a href="/order"><button className="cart-carttotal_btn">Check Out</button></a>
             </div>
           </div>
         </div>
       </div>
     </section>
     
       )
    }
    else{
      return (
        <div className="container">
        <div className="text-center">
           <div> <h1>Vui Lòng Thêm Sản Phẩm Vào Giỏ Hàng</h1>
           </div>
           <div>
           <Link to='/shop'>Quay lại shop</Link>
           </div>
        </div>
    </div>
      )
    }

  
}

export default Carts