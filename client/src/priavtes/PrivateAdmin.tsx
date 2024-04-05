
import useLocalStorage from '../hooks/auth/useStorage'
import { Navigate } from 'react-router-dom';

const PrivateAdmin = ({children}) => {
    const [value,setValue] = useLocalStorage('user', {});
    // const [authenticate,setAuthenticate] = useState(false)
    const userId = value.data._id;
    let authenticate = true;
   if(userId!="660c2d21390814f4f5fd2433"){
    authenticate = false;
    alert('bạn không có quyền truy cập')
   }
  return authenticate ? children : <Navigate to='/' />
}

export default PrivateAdmin