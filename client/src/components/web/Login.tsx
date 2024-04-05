
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { Singin } from '../../services/auth'
import { IUser } from '../../interfaces/IUser'
import useLocalStorage from '../../hooks/auth/useStorage'




const Login = () => {
    const [, setValue] = useLocalStorage('user', {})
    const {register,handleSubmit,formState:{errors}} = useForm()
    const onCloseLogin = ()=>{
        const loginElement = document.querySelector(".login") as HTMLElement
        loginElement.style.bottom = "100%";
        loginElement.style.opacity = "0";
        loginElement.style.height = "auto";
    }
    const mutation = useMutation({
        mutationFn: async(user:IUser)=>{
            try {
                const res = await Singin(user);
                if(res){
                    alert("Đăng nhập thành công")
                    setValue(res);
                    onCloseLogin();
                    setTimeout(()=>{
                      window.location.reload()
                    },1000)
                }
                return res
            } catch (error) {
                console.log(error)
            }
        },
    })
    const onSubmit = (user:IUser)=>{
       mutation.mutate(user)
    }
  return (
    <section className="login">
  <div className="login-wrapper">
    <span className="login-close" onClick={onCloseLogin}>X</span>
    <form  className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="login_title">LOGIN</h1>
      <div className="login-item">
        <label  className="login-item_name">Username</label>
        <input {...register('email',{required:true})} type="text" className="login-item_input" />
        {errors.email && errors.email.type =="required" && (  <div id="emailHelp" className="form-text text-danger"> Không để trống</div>)}
      </div>
      <div className="login-item">
        <label className="login-item_name">Password</label>
        <input {...register('password',{required:true})}  type="password" className="login-item_input" />
        {errors.password && errors.password.type =="required" && (  <div id="emailHelp" className="form-text text-danger"> Không để trống</div>)}
      </div>
      <div className="login-btn">
        <button type="submit" className="login-btn_item">Login</button>
      </div>
      <div className="login-different">
        <a href="#" className="login-different_link"><button className="login-different_fb"> <span className="login-different_fb-icon">f</span>Facebook</button></a>
        <a href="#" className="login-different_link"><button className="login-different_gg"><span className="login-different_gg-icon">G</span>Google</button></a>
      </div>
    </form>
  </div>
</section>

  )
}

export default Login