import { useState } from "react";
import useCartQuery from "../../hooks/carts/useCartQuery";
import { useMutation } from "@tanstack/react-query";

import useLocalStorage from "../../hooks/auth/useStorage";
import instance from "../../config/axios";



const BillingdDetail = () => {
  const [value,] = useLocalStorage('user',{})
  const userId = value.data._id;
    const [formData, setFormData] = useState({
        name: '',
        city: '',
        email: '',
        phone: '',
        payment: ''
      });
      const {query,totalCost} = useCartQuery()
    //   const { name, city, email, phone, payment } = formData;
    
      const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const mutation = useMutation({
        mutationFn: async(order:{userId:string;items: [],totalPrice: number,customerInfo: object})=>{
                try {
                   const res = await instance.post('/orders', order);
                   return res.data
                } catch (error) {
                    console.log(error)
                }
        },
        onSuccess:()=>{
            alert("Bạn đặt hàng thành công")
        },
      })
      const onHandleOrder = () => {
        mutation.mutate({
          userId,
          items: query?.data,
          totalPrice: totalCost,
          customerInfo:formData
        })
        console.log(formData);
      };
    
     

  return (
   <section className="pay">
  <div className="container">
    <div className="pay-inner">
      <div className="pay-fill">
        <h1 className="pay-fill_title">Billing details</h1>
        <form  className="pay-form">
          <div className="pay-form-fullname">
            {/* <div className="pay-form-item">
              <label  className="pay-form_name">First Name</label>
              <input type="text" className="pay-form_input-name" />
            </div>
            <div className="pay-form-item">
              <label  className="pay-form_name">Last Name</label>
              <input type="text" className="pay-form_input-name" />
            </div> */}
          </div>
          <div className="pay-form-item">
            <label  className="pay-form_name">Full Name</label>
            <input type="text" name="name" className="pay-form_input" onChange={onChange}/>
          </div>
          {/* <div className="pay-form-item">
            <label  className="pay-form_name">City</label>
            <select className="pay-form_select" name="city" onChange={onChange} >
              <option value=''>Ha Noi</option>
              <option value=''>Ho Chi Minh</option>
            </select>
          </div> */}
          <div className="pay-form-item">
            <label  className="pay-form_name">Email</label>
            <input type="text" className="pay-form_input" name="email" onChange={onChange} />
          </div>
          <div className="pay-form-item">
            <label  className="pay-form_name">City</label>
            <input type="text" name="city" className="pay-form_input"  onChange={onChange} />
          </div>
          {/* <div className="pay-form-item">
            <label  className="pay-form_name">Province</label>
            <select className="pay-form_select" >
              <option value=''>Western Province</option>
              <option value=''>Ho Chi Minh</option>
            </select>
          </div>
          <div className="pay-form-item">
            <label  className="pay-form_name">ZIP code</label>
            <input type="text" className="pay-form_input" />
          </div> */}
          <div className="pay-form-item">
            <label  className="pay-form_name">Phone</label>
            <input type="text" className="pay-form_input" name="phone" onChange={onChange} />
          </div>
          {/* <div className="pay-form-item">
            <label  className="pay-form_name" />
            <input type="text" className="pay-form_input" placeholder="Additional information" />
          </div> */}
        </form>
      </div>
      <div className="pay-content">
        <div className="pay-content-info">
          <div className="pay-content-item">
            <span className="pay-content-item_nameproduct">Product</span>
            <span className="pay-content-item_nameproduct">Subtotal</span>
          </div>
          {query?.data?.map((cart,i)=>(
            
            <div className="pay-content-item" key={i}>
            <span className="pay-content-item_name">{cart.name}<span className="pay-content-item_quantity">x {cart.quantity}</span></span>
            <span className="pay-content-item_price">{cart.price * cart.quantity}đ</span>
          </div>
          ))}
          {/* <div className="pay-content-item">
            <span className="pay-content-item_name">Asgaard sofa <span className="pay-content-item_quantity">x 1</span></span>
            <span className="pay-content-item_price">25.000.000đ</span>
          </div> */}
          
          {/* <div className="pay-content-item">
            <span className="pay-content-item_title"> Subtotal </span>
            <span className="pay-content-item_price">25.000.000đ</span>
          </div> */}
          <div className="pay-content-item">
            <span className="pay-content-item_title">Toal</span>
            <span className="pay-content-item_total">{totalCost}đ</span>
          </div>
        </div>
        <div className="pay-bank">
          <div className="pay-bank-item">
            <div className="pay-bank_input">
              <input className="pay-bank_radio pay-bank_one" type="radio" onChange={onChange} value={"Tiền Mặt"} name="payment" id="banking_one" /><label htmlFor="banking_one" className="banking_one-lb">Tiền Mặt</label>
            </div>
            <div className="pay-bank_description des-one">
              <p className="pay-bank_description-item">Make your payment directly into our bank account. Please use your
                Order
                ID as the payment reference. Your order will
                not be shipped until the funds have cleared in our account.
              </p>
            </div>
          </div>
          <div className="pay-bank-item">
            <div className="pay-bank_input">
              <input className="pay-bank_radio pay-bank_two" type="radio" onChange={onChange} value={"Thanh Toán Online"} name="payment" id="banking_two" /><label htmlFor="banking_two" className="banking_two-lb">Thanh Toán Online</label>
            </div>
            <div className="pay-bank_description des-two">
              <p className="pay-bank_description-item">Make your payment directly into our bank account. Please use your
                Order
                ID as the payment reference. Your order will
                not be shipped until the funds have cleared in our account.
              </p>
            </div>
          </div>
          <div className="pay-bank-last">
            <p className="pay-bank-last_text">Your personal data will be used to support your experience throughout this
              website, to manage access to your account,
              and for other purposes described in our <strong>privacy policy</strong></p>
          </div>
          <div className="pay-bank-order">
            <button className="pay-bank_btn" onClick={onHandleOrder}>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default BillingdDetail