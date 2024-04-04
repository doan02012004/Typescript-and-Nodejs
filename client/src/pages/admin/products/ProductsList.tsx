import { Link } from "react-router-dom"
import { useProductQuery } from "../../../hooks/products/useProductQuery"
import { IProduct } from "../../../interfaces/IProduct"
import useProductMutation from "../../../hooks/products/useProductMutation"


const ProductsList = () => {
  const query = useProductQuery({ _expand: "category" })
  const mutation = useProductMutation("deleteproducts")
  const onHandleRemove = (product:IProduct)=>{
      mutation.mutate(product)
  }
  return (
   <>
     <h2>Section title</h2>
      <div className="table-responsive small">
        <Link to='/admin/products/add' className="btn btn-primary" >Thêm sản phẩm</Link>
        
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên Sản Phẩm</th>
              <th scope="col">Ảnh</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng trong kho</th>
              <th scope="col">Chi Tiết</th>
              <th scope="col">Chức Năng</th>
            </tr>
          </thead>
          <tbody>
            {query?.data?.data.map((item:IProduct,i:number)=>(
               <tr key={i}>
               <td>{i+1}</td>
               <td>{item.name}</td>
               <td>
                <img width={"70px"} src={item.image} alt={item.name} />
               </td>
               <td>{item.price}</td>
               <td>{item.countInStock}</td>
               <td>
                  <Link to={''} className="btn btn-primary">Chi Tiết</Link>
               </td>
               <td>
               <Link to={`/admin/products/edit/${item._id}`} className="btn btn-warning">Cập Nhật</Link>
                  <button className="btn btn-danger" onClick={()=>onHandleRemove(item)}>Xóa</button>
               </td>
             </tr>
            ))}
          </tbody>
        </table>
      </div>
   </>
  )
}

export default ProductsList