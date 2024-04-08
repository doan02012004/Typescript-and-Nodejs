
import { Link } from 'react-router-dom'
import useOrderQuery from '../../hooks/order/useOrderQuery'
import { format } from 'date-fns';
import useOrderMutation from '../../hooks/order/useOrderMutation';
import { useState } from 'react';


const Order = () => {
  const [type,setType] = useState(1)
  const query = useOrderQuery();
  const mutation = useOrderMutation()
 const onHandleStatus = (options:{id:string,status:string})=>{
  mutation.mutate(options)
 }
if(query.isLoading){
   return <div>...Loading</div>
}

  
  return (
    <section className='order'>
    <section className="address-page">
    <div className="container">
      <div className="address-inner">
        <div className="address-content">
          <div className="address-item address_border">
            <a href="#" className="address_link">Home</a>
            <span className="address_icon"><i className="fa-solid fa-angle-right" /></span>
            <a href="#" className="address_link">User</a>
            <span className="address_icon"><i className="fa-solid fa-angle-right" /></span>
          </div>
          <div className="address-item">
            <h3 className="address_name">Check-Order</h3>
          </div>
        </div>
      </div>
    </div>
        </section>
        <div className="container">
          <div className="order-type mb-5">
            <button className='btn btn-primary m-1' onClick={()=> setType(1)}>Đơn hàng hoạt động</button>
            <button className='btn btn-success m-1' onClick={()=> setType(2)}>Đơn hàng đã nhận</button>
            <button className='btn btn-danger m-1' onClick={()=> setType(3)}>Đơn hàng đã hủy</button>
          </div>
            <div className="order-list">
             {query?.data?.map((item,i)=>{
              if(item.status!="cancelled" &&item.status!="received"  && type==1){
                return   <div className="order-content" key={i}>
                <div className="order-card">
                      <h3 className='order-card_title'>Đơn Hàng {i+1}</h3>
                      <div className="order-card-content">
                          <div className="order-card-content_infor">
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Fullname:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.name}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Phone:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.phone}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Email:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.email}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>City:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.city}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Ngày đặt hàng:</span>
                                  <span className='order-card-content-item_text'>{format(new Date(item.updatedAt), 'dd-MM-yyyy')}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Trạng Thái:</span>
                                  <span className={`order-card-content-item_status ${item.status == "cancelled" ? "text-danger" : ""}`}>{item.status}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Tổng tiền:</span>
                                  <span className='order-card-content-item_status'>{item.totalPrice.toLocaleString('vi-VN')} đ</span>
                               
                              </div>
                          </div>
                          <div className="order-card-content_extra">
                              <span className='order-card-content_extra_item'><i className="fa-solid fa-basket-shopping"></i></span>
                          </div>
                      </div>
                      <div className="order-card-action">
                          <div className="order-card-action-status">
                            {item.status=="pending" && (  <button className='order-card-action_btn btn btn-danger' onClick={()=>onHandleStatus({id:item._id,status:"cancelled"})}>Hủy Đơn Hàng</button>)}
                             {item.status=="delivered" && ( <button className='order-card-action_btn btn btn-primary' onClick={()=>onHandleStatus({id:item._id,status:"received"})} >Đã Nhận Hàng</button>)}
                          </div>
                         <Link to={`/check-order-detail/${item._id}`}> <button className='order-card-action_btn  btn btn-warning'>Chi Tiết</button></Link>
                      </div>
                  </div>
                </div>
              }
              else if(item.status =="received"  && type==2){
                return   <div className="order-content" key={i}>
                <div className="order-card">
                      <h3 className='order-card_title'>Đơn Hàng {i+1}</h3>
                      <div className="order-card-content">
                          <div className="order-card-content_infor">
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Fullname:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.name}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Phone:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.phone}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Email:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.email}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>City:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.city}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Ngày đặt hàng:</span>
                                  <span className='order-card-content-item_text'>{format(new Date(item.updatedAt), 'dd-MM-yyyy')}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Trạng Thái:</span>
                                  <span className={`order-card-content-item_status ${item.status == "cancelled" ? "text-danger" : ""}`}>{item.status}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Tổng tiền:</span>
                                  <span className='order-card-content-item_status'>{item.totalPrice.toLocaleString('vi-VN')} VNĐ</span>
                               
                              </div>
                          </div>
                          <div className="order-card-content_extra">
                              <span className='order-card-content_extra_item'><i className="fa-solid fa-basket-shopping"></i></span>
                          </div>
                      </div>
                      <div className="order-card-action">
                          <div className="order-card-action-status">
                            {item.status=="pending" && (  <button className='order-card-action_btn btn btn-danger' onClick={()=>onHandleStatus({id:item._id,status:"cancelled"})}>Hủy Đơn Hàng</button>)}
                             {item.status=="delivered" && ( <button className='order-card-action_btn btn btn-primary' onClick={()=>onHandleStatus({id:item._id,status:"received"})} >Đã Nhận Hàng</button>)}
                          </div>
                         <Link to={`/check-order-detail/${item._id}`}> <button className='order-card-action_btn  btn btn-warning'>Chi Tiết</button></Link>
                      </div>
                  </div>
                </div>
              }
              else if(item.status =="cancelled"  && type==3){
                return   <div className="order-content" key={i}>
                <div className="order-card">
                      <h3 className='order-card_title'>Đơn Hàng {i+1}</h3>
                      <div className="order-card-content">
                          <div className="order-card-content_infor">
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Fullname:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.name}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Phone:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.phone}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Email:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.email}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>City:</span>
                                  <span className='order-card-content-item_text'>{item.customerInfo.city}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Ngày đặt hàng:</span>
                                  <span className='order-card-content-item_text'>{format(new Date(item.updatedAt), 'dd-MM-yyyy')}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Trạng Thái:</span>
                                  <span className={`order-card-content-item_status ${item.status == "cancelled" ? "text-danger" : ""}`}>{item.status}</span>
                              </div>
                              <div className="order-card-content-item">
                                  <span className='order-card-content-item_name'>Tổng tiền:</span>
                                  <span className='order-card-content-item_status'>{item.totalPrice.toLocaleString('vi-VN')} VNĐ</span>
                               
                              </div>
                          </div>
                          <div className="order-card-content_extra">
                              <span className='order-card-content_extra_item'><i className="fa-solid fa-basket-shopping"></i></span>
                          </div>
                      </div>
                      <div className="order-card-action">
                          <div className="order-card-action-status">
                            {item.status=="pending" && (  <button className='order-card-action_btn btn btn-danger' onClick={()=>onHandleStatus({id:item._id,status:"cancelled"})}>Hủy Đơn Hàng</button>)}
                             {item.status=="delivered" && ( <button className='order-card-action_btn btn btn-primary' onClick={()=>onHandleStatus({id:item._id,status:"received"})} >Đã Nhận Hàng</button>)}
                          </div>
                         <Link to={`/check-order-detail/${item._id}`}> <button className='order-card-action_btn  btn btn-warning'>Chi Tiết</button></Link>
                      </div>
                  </div>
                </div>
              }
              // else{
              //   return  <div className="order-content" key={i}>
              //   <div className="order-card">
              //         <h3 className='order-card_title'>Đơn Hàng {i+1}</h3>
              //         <div className="order-card-content">
              //             <div className="order-card-content_infor">
              //                 <div className="order-card-content-item">
              //                     <span className='order-card-content-item_name'>Fullname:</span>
              //                     <span className='order-card-content-item_text'>{item.customerInfo.name}</span>
              //                 </div>
              //                 <div className="order-card-content-item">
              //                     <span className='order-card-content-item_name'>Phone:</span>
              //                     <span className='order-card-content-item_text'>{item.customerInfo.phone}</span>
              //                 </div>
              //                 <div className="order-card-content-item">
              //                     <span className='order-card-content-item_name'>Email:</span>
              //                     <span className='order-card-content-item_text'>{item.customerInfo.email}</span>
              //                 </div>
              //                 <div className="order-card-content-item">
              //                     <span className='order-card-content-item_name'>City:</span>
              //                     <span className='order-card-content-item_text'>{item.customerInfo.city}</span>
              //                 </div>
              //                 <div className="order-card-content-item">
              //                     <span className='order-card-content-item_name'>Ngày đặt hàng:</span>
              //                     <span className='order-card-content-item_text'>{format(new Date(item.updatedAt), 'dd-MM-yyyy')}</span>
              //                 </div>
              //                 <div className="order-card-content-item">
              //                     <span className='order-card-content-item_name'>Trạng Thái:</span>
              //                     <span className={`order-card-content-item_status ${item.status == "cancelled" ? "text-danger" : ""}`}>{item.status}</span>
              //                 </div>
              //                 <div className="order-card-content-item">
              //                     <span className='order-card-content-item_name'>Tổng tiền:</span>
              //                     <span className='order-card-content-item_status'>{item.totalPrice.toLocaleString('vi-VN')} VNĐ</span>
                               
              //                 </div>
              //             </div>
              //             <div className="order-card-content_extra">
              //                 <span className='order-card-content_extra_item'><i className="fa-solid fa-basket-shopping"></i></span>
              //             </div>
              //         </div>
              //         <div className="order-card-action">
              //             <div className="order-card-action-status">
              //               {item.status=="pending" && (  <button className='order-card-action_btn btn btn-danger' onClick={()=>onHandleStatus({id:item._id,status:"cancelled"})}>Hủy Đơn Hàng</button>)}
              //                {item.status=="delivered" && ( <button className='order-card-action_btn btn btn-primary' onClick={()=>onHandleStatus({id:item._id,status:"received"})} >Đã Nhận Hàng</button>)}
              //             </div>
              //            <Link to={`/check-order-detail/${item._id}`}> <button className='order-card-action_btn  btn btn-warning'>Chi Tiết</button></Link>
              //         </div>
              //     </div>
              //   </div>
              // }
             })}
              
            </div>
        
        </div>
    </section>
  )
}

export default Order