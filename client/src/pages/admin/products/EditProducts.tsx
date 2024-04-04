
import { useForm } from "react-hook-form";
import { IProduct } from "../../../interfaces/IProduct";
import useProductMutation from "../../../hooks/products/useProductMutation";
import { useParams } from "react-router-dom";
import { useProductQuery } from "../../../hooks/products/useProductQuery";
import { useEffect } from "react";
import useCategoriesQuery from "../../../hooks/categories/useCategoriesQuery";

const EditProducts = () => {
    const {register,handleSubmit,formState:{errors},reset}= useForm();
    const {id} = useParams()
    const query = useProductQuery({id})
    const categories = useCategoriesQuery()
    useEffect(()=>{
        reset(query?.data?.data)
    },[id,query?.data?.data])
  const mutation = useProductMutation("updateproducts")
const onSubmit = async (product:IProduct) =>{
    try {
        
      const galleryArray = product?.gallery?.join(",").split(',').slice(0, 500);
    const tagsArray = product?.tags?.join(",").split(',').slice(0, 500);
     product.gallery = galleryArray
    product.tags = tagsArray
    mutation.mutate(product)
    } catch (error) {
      console.log(error)
    }
}
  return (
    <>
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-6">
                <div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Tên sản phẩm
                </label>
                <input
                  type="text"
                  {...register('name',{required:true})}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              {errors.name && errors.name.type =="required" && (  <div id="emailHelp" className="form-text text-danger"> Không để trống</div>)}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Ảnh
                </label>
                <input
                  type="text"
                  {...register('image',{required:true})}
                  className="form-control"
                  id="exampleInputPassword1"
                />
                  {errors.image && errors.image.type =="required" && (  <div id="emailHelp" className="form-text text-danger"> Không để trống</div>)}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Gallery(mỗi ảnh cách nhau bởi dấy phảy ",")
                </label>
               <textarea {...register('gallery',{required:true})}id="" cols={40} rows={5}></textarea>
                {errors.gallery && errors.gallery.type =="required" && (  <div id="emailHelp" className="form-text text-danger"> Không để trống</div>)}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Giá
                </label>
                <input
                  type="number"
                  {...register('price',{required:true})}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                    {errors.price && errors.price.type =="required" && (  <div id="emailHelp" className="form-text text-danger"> Không để trống</div>)}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Giảm giá (%)
                </label>
                <input
                  type="number"
                  {...register('discount',{required:true})}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                {errors.discount && errors.discount.type =="required" && (  <div id="emailHelp" className="form-text text-danger"> Không để trống</div>)}
              </div>
              <button type="submit" className="btn btn-primary">
                Cập Nhật Sản Phẩm
              </button>
            </div>
                </div>
                <div className="col-6">
                <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Số lượng nhập kho
                </label>
                <input
                  type="number"
                  {...register('countInStock',{required:true})}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              {errors.countInStock && errors.countInStock.type =="required" && (  <div id="emailHelp" className="form-text text-danger"> Không để trống</div>)}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Mô tả
                </label>
                <br />
               <textarea     {...register('description',{required:true})}  rows={3} cols={60} id="" ></textarea>
               {errors.description && errors.description.type =="required" && (  <div id="emailHelp" className="form-text text-danger"> Không để trống</div>)}
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Danh Mục
                </label>
                <select {...register('category',{required:true})} id="">
                  {categories?.data?.map((category,i)=>(
                     <option key={i} value={category._id}>{category.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Featured
                </label>
                <select {...register('featured')} id="">
                    <option value="false">Flase(Mặc định)</option>
                    <option value="true">True</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Tags
                </label>
                <input
                  type="text"
                  {...register('tags',{required:true})}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                
              </div>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProducts;
