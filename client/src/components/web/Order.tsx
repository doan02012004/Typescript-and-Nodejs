import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
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
            <div className="order-list">
              <div className="order-content">
              <div className="order-card">
                    <h3 className='order-card_title'>Đơn Hàng 1</h3>
                    <div className="order-card-content">
                        <div className="order-card-content_infor">
                            <div className="order-card-content-item">
                                <span className='order-card-content-item_name'>Fullname:</span>
                                <span className='order-card-content-item_text'>Bùi Văn Đoàn</span>
                            </div>
                            <div className="order-card-content-item">
                                <span className='order-card-content-item_name'>Phone:</span>
                                <span className='order-card-content-item_text'>01234567</span>
                            </div>
                            <div className="order-card-content-item">
                                <span className='order-card-content-item_name'>Email:</span>
                                <span className='order-card-content-item_text'>doana1k24@gmail.com</span>
                            </div>
                            <div className="order-card-content-item">
                                <span className='order-card-content-item_name'>City:</span>
                                <span className='order-card-content-item_text'>Hà Nội</span>
                            </div>
                            <div className="order-card-content-item">
                                <span className='order-card-content-item_name'>Ngày đặt hàng:</span>
                                <span className='order-card-content-item_text'>20/10/2004</span>
                            </div>
                            <div className="order-card-content-item">
                                <span className='order-card-content-item_name'>Trạng Thái:</span>
                                <span className='order-card-content-item_status'>Pending</span>
                            </div>
                        </div>
                        <div className="order-card-content_extra">
                            <span className='order-card-content_extra_item'><i className="fa-solid fa-basket-shopping"></i></span>
                        </div>
                    </div>
                    <div className="order-card-action">
                        <div className="order-card-action-status">
                            <button className='order-card-action_btn btn btn-danger'>Hủy Đơn Hàng</button>
                            <button className='order-card-action_btn btn btn-primary'>Đã Nhận Hàng</button>
                        </div>
                       <Link to=''> <button className='order-card-action_btn  btn btn-warning'>Chi Tiết</button></Link>
                    </div>
                </div>
              </div>
              
            </div>
        
        </div>
    </section>
  )
}

export default Order