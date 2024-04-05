import  { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import useOrderAllQuery from '../../../hooks/order/useOrderAllQuery';
import useOrderMutation from '../../../hooks/order/useOrderMutation';

const OrderDetailAdmin = () => {
    const {id} = useParams();
    const query = useOrderAllQuery(id);
    useEffect(()=>{
  
    },[id])
    const mutation = useOrderMutation()
    const onHandleStatus = (status:string)=>{
        const options = {
            id,
            status
        }
        mutation.mutate(options)
    }
  return (
    <section className="cart">
    <div className="container">

      <Link to='/admin/order' className="btn btn-primary">Quay Lại</Link>
      <div className="d-flex justify-content-center align-items-center mb-3" style={{gap:10}}>
                <span className='font-weight-bold text-18'>Trạng Thái Đơn Hàng:</span>
                <h2 className={`font-weight-bold text-21 pl-4` + `${query?.data?.status=="cancelled" ? "  text-danger": " text-success"}`}>{query?.data?.status}</h2>
            </div>
      <div className="d-flex justify-content-center align-item-center mb-3">
             {query?.data?.status !="cancelled"&& (
                <>
                    {query?.data?.status=="pending" && (<button className='btn btn-warning' onClick={()=>onHandleStatus("confirmed")}>confirmed</button>)}
                    {query?.data?.status=="confirmed" && (<button className='btn btn-warning'  onClick={()=>onHandleStatus("shipped")} >shipped</button>)}
                    {query?.data?.status=="shipped" && (<button className='btn btn-warning'  onClick={()=>onHandleStatus("delivered")} >delivered</button>)}
                </>
             )}
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
                  <tr key={i}>
                  <td>
                    <img className="cart-table_img" src={order.image} />
                  </td>
                  <td>
                    <span className="cart-table_name">{order.name}</span>
                  </td>
                  <td>
                    <span className="cart-table_price">{order.price.toLocaleString('vi-VN')} VNĐ</span>
                  </td>
                  <td className="cart-table_quantity">
                    <input className="cart-table_input" type="text" value={order.quantity} disabled />
                  </td>
                  <td>
                    <span className="cart-table_total">{(order.price*order.quantity).toLocaleString('vi-VN')} VNĐ</span>
                  </td>
                  <td>
                   
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
        <div className="cart-carttotal">
          <h1 className="cart-carttotal_title">Thông Tin</h1>
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
              <span className="order-card-content-item_status">{query?.data?.status}</span>
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

export default OrderDetailAdmin