
import useOrderAllQuery from '../../../hooks/order/useOrderAllQuery'
import { Link } from 'react-router-dom'
import { IOrder } from '../../../interfaces/IOrder'
import { useState } from 'react'

const OrderList = () => {
  const [search,setSearch] = useState("")
    const orderAll = useOrderAllQuery();
    const onHandleSearch = async(e)=>{
      setSearch(e.target.value.toLowerCase())
    // const newProduct =  query?.data?.data.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    // console.log(newProduct)
    }
  return (
    <>
     <h2>Danh Sách Sản Phẩm</h2>
     <input className="form-control m-5" type="text" placeholder="Search" aria-label="Search" style={{width:300}} onChange={(e)=>onHandleSearch(e)}/>
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
            {orderAll?.data?.map((item:IOrder,i:number)=>{
              if(item.customerInfo.name.toLowerCase().includes(search)){
                return  <tr key={i}>
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
              }
            })}
          </tbody>
        </table>
      </div>
   </>
  )
}

export default OrderList