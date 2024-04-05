import { Link, useParams } from "react-router-dom"
import useOrderQuery from "../../hooks/order/useOrderQuery";
import { useEffect } from "react";
import useOrderMutation from "../../hooks/order/useOrderMutation";


const OrderDetail = () => {
  const {id} = useParams();
  const query = useOrderQuery(id);
  useEffect(()=>{

  },[id])
  const mutation = useOrderMutation()
  const onHandleStatus = (options:{id:string,status:string})=>{
   mutation.mutate(options)
  }
  return (
  <section className="cart">
  <div className="container">
    <Link to='/check-order' className="btn btn-primary">Quay Lại</Link>
    <div className="d-flex justify-content-center align-item-center mb-3">
            {query?.data?.status == "pending" && (  <button className="btn btn-danger" onClick={()=>onHandleStatus({id:query?.data?._id,status:"cancelled"})}>Hủy Đơn Hàng</button>)}
            {query?.data?.status == "delivered" && (  <button className="btn btn-primary" onClick={()=>onHandleStatus({id:query?.data?._id,status:"received"})} >Đã Nhận Hàng</button>)}
          </div>
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
            {query?.data?.items.map((order,i)=>(
                <tr>
                <td>
                  <img className="cart-table_img" src={order.image} />
                </td>
                <td>
                  <span className="cart-table_name">{order.name}</span>
                </td>
                <td>
                  <span className="cart-table_price">{order.price.toLocaleString('vi-VN')} đ</span>
                </td>
                <td className="cart-table_quantity">
                  <input className="cart-table_input" type="text" value={order.quantity} disabled />
                </td>
                <td>
                  <span className="cart-table_total">{(order.price*order.quantity).toLocaleString('vi-VN')} đ</span>
                </td>
                <td>
                 
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
      <div className="cart-carttotal">
        <h1 className="cart-carttotal_title">Cart Totals</h1>
        <div className="cart-carttotal-item">
            <span className="cart-carttotal-item_name">Họ Tên</span>
            <span className="cart-carttotal-item_price">{query?.data?.customerInfo.name}</span>
          </div>
        <div className="cart-carttotal-item">
            <span className="cart-carttotal-item_name">Số điện thoại</span>
            <span className="cart-carttotal-item_price">{query?.data?.customerInfo.phone}</span>
          </div>
          <div className="cart-carttotal-item">
            <span className="cart-carttotal-item_name">Trạng thái</span>
            <span className={`order-card-content-item_status ${query?.data?.status == "cancelled" ? "text-danger" : ""}`}>{query?.data?.status}</span>
          </div>
        <div className="cart-carttotal-item">
          <span className="cart-carttotal-item_name">Total</span>
          <span className="cart-carttotal-item_total">{query?.data?.totalPrice.toLocaleString('vi-VN')} VNĐ</span>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default OrderDetail