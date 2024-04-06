import { Link } from "react-router-dom"
import { useProductQuery } from "../../../hooks/products/useProductQuery"
import { IProduct } from "../../../interfaces/IProduct"
import useProductMutation from "../../../hooks/products/useProductMutation"
import { useState } from "react"


const ProductsList = () => {
  const [search,setSearch] = useState("")
  const query = useProductQuery({ _expand: "category" })
  const mutation = useProductMutation("deleteproducts")
  const onHandleRemove = (product:IProduct)=>{
      mutation.mutate(product)
  }
  const onHandleSearch = async(e)=>{
    setSearch(e.target.value.toLowerCase())
  // const newProduct =  query?.data?.data.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
  // console.log(newProduct)
  }
  return (
   <>
     <h2>Danh Sách Sản Phẩm</h2>
      <div className="table-responsive small">
        <Link to='/admin/products/add' className="btn btn-primary" >Thêm sản phẩm</Link>
        <input className="form-control m-5" type="text" placeholder="Search" aria-label="Search" style={{width:300}} onChange={(e)=>onHandleSearch(e)}/>
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
            {query?.data?.data.map((item:IProduct,i:number)=>{
               if(item.name.toLowerCase().includes(search)){
                return    <tr key={i}>
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
               }
            })}
          </tbody>
        </table>
      </div>
   </>
  )
}

export default ProductsList