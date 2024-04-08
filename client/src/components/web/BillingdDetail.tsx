
import useCartQuery from "../../hooks/carts/useCartQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import useLocalStorage from "../../hooks/auth/useStorage";
import instance from "../../config/axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

type billing = {
  name: string,
  phone: string,
  email:string,
  city:string,
  payment:string
}

const BillingdDetail = () => {
  const navigate = useNavigate();
  const {register,handleSubmit, formState:{errors}}= useForm()
  const queryClient = useQueryClient()
  const [value,] = useLocalStorage('user',{})
  const userId = value.data._id;
      const {query,totalCost} = useCartQuery()
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
            queryClient.invalidateQueries({queryKey:["CARTS_KEY",userId]})
            alert("Bạn đặt hàng thành công");
            navigate('/check-order')
        },
        onError: (error) => {
          console.error('Error placing order:', error);
          // Xử lý lỗi nếu cần
      }
      })
      
      const onSubmit = (option:billing) => {
        const options = {
          userId,
          items: query?.data,
          totalPrice: totalCost,
          customerInfo:option
        }
        if(options.items.length>0){
          mutation.mutate(options)
        }else{
          alert("Vui lòng đặt đơn hàng mới")
          navigate('/')
        }
       
      };
    
     

  return (
   <section className="pay">
  <div className="container">
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className="pay-inner">
      <div className="pay-fill">
        <h1 className="pay-fill_title">Billing details</h1>
        <div  className="pay-form">
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
            <input type="text" {...register('name',{required:true})} className="pay-form_input" />
            {errors.name&& errors.name.type =="required" && (<p className="text-danger">Vui lòng không để trống!</p>)}
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
            <input type="text" {...register('email',{required:true})} className="pay-form_input"/>
            {errors.email&& errors.email.type =="required" && (<p className="text-danger">Vui lòng không để trống!</p>)}
          </div>
          <div className="pay-form-item">
            <label  className="pay-form_name">City</label>
            <input type="text" {...register('city',{required:true})} name="city" className="pay-form_input"  />
            {errors.city&& errors.city.type =="required" && (<p className="text-danger">Vui lòng không để trống!</p>)}
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
            <input type="text" className="pay-form_input"  {...register('phone',{required:true})}  />
            {errors.city&& errors.city.type =="required" && (<p className="text-danger">Vui lòng không để trống!</p>)}
          </div>
          {/* <div className="pay-form-item">
            <label  className="pay-form_name" />
            <input type="text" className="pay-form_input" placeholder="Additional information" />
          </div> */}
        </div>
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
            <span className="pay-content-item_price">{(cart.price * cart.quantity)?.toLocaleString('vi-VN')} đ</span>
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
            <span className="pay-content-item_total">{totalCost?.toLocaleString('vi-VN')} đ</span>
          </div>
        </div>
        <div className="pay-bank">
          <div className="pay-bank-item">
            <div className="pay-bank_input">
              <input className="pay-bank_radio pay-bank_one" type="radio"  {...register('payment',{required:true})} value="Tiền Mặt" name="payment" id="banking_one" /><label htmlFor="banking_one" className="banking_one-lb">Tiền Mặt</label>
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
              <input className="pay-bank_radio pay-bank_two" type="radio"  {...register('payment',{required:true})} value="Thanh Toán Online" name="payment" id="banking_two" /><label htmlFor="banking_two" className="banking_two-lb">Thanh Toán Online</label>
            </div>
            <div className="pay-bank_description des-two">
              <p className="pay-bank_description-item">Make your payment directly into our bank account. Please use your
                Order
                ID as the payment reference. Your order will
                not be shipped until the funds have cleared in our account.
              </p>
            </div>
          </div>
          {errors.payment&& errors.payment.type =="required" && (<p className="text-danger">Vui lòng chọn phương thức thanh toán!</p>)}
          <div className="pay-bank-last">
            <p className="pay-bank-last_text">Your personal data will be used to support your experience throughout this
              website, to manage access to your account,
              and for other purposes described in our <strong>privacy policy</strong></p>
          </div>
          <div className="pay-bank-order">
            <button className="pay-bank_btn" type="submit">Place Order</button>
          </div>
        </div>
      </div>
    </div>
    </form>
  </div>
</section>

  )
}

export default BillingdDetail