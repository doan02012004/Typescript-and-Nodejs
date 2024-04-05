
import useOrderAllQuery from '../../../hooks/order/useOrderAllQuery'
import { Link } from 'react-router-dom'
import { IOrder } from '../../../interfaces/IOrder'

const OrderList = () => {
    const orderAll = useOrderAllQuery();
  return (
    <>
     <h2>Danh Sách Sản Phẩm</h2>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Họ Tên</th>
              <th scope="col">Phone</th>
              <th scope="col">Địa Chỉ</th>
              <th scope="col">Thanh Toán</th>
              <th scope="col">Trạng Thái</th>
              <th scope="col">Chi Tiết</th>
            </tr>
          </thead>
          <tbody>
            {orderAll?.data?.map((item:IOrder,i:number)=>(
               <tr key={i}>
               <td>{i+1}</td>
               <td>{item.customerInfo.name}</td>
               <td>
               {item.customerInfo.phone}
               </td>
               <td>{item.customerInfo.city}</td>
               <td>
               {item.customerInfo.payment}
               </td>
               <td >
                    <span className={`order-card-content-item_status ${item.status=="cancelled"? "text-danger":""} `}> {item.status}</span>
               </td>
               <td>
                  <Link to={`/admin/order/${item._id}`} className="btn btn-primary">Chi Tiết</Link>
               </td>
              
             </tr>
            ))}
          </tbody>
        </table>
      </div>
   </>
  )
}

export default OrderList