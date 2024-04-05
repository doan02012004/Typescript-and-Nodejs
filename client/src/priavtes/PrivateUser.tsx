import React from 'react'
import { Navigate } from 'react-router-dom';
import useLocalStorage from '../hooks/auth/useStorage';

const PrivateUser = ({children}) => {
    const [value,setValue] = useLocalStorage('user', {});
    // const [authenticate,setAuthenticate] = useState(false)
    let checkUser = true;
   if(!value?.data?._id){
    checkUser = false;
    alert('Bạn cần đăng nhập!')
   }
  return checkUser ? children : <Navigate to='/' />
}

export default PrivateUser