import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../../../interfaces/IProduct";
import useProductMutation from "../../../hooks/products/useProductMutation";
import useCategoriesQuery from "../../../hooks/categories/useCategoriesQuery";
import axios from "axios";

const AddProducts = () => {
  const [images, setImages] = useState([]);
  const [avatar, setAvatar] = useState("")
  const {register,handleSubmit,formState:{errors}}= useForm();
  const categories = useCategoriesQuery()
  
  const mutation = useProductMutation("addproducts")
  const onChangeGallery = async(e)=>{
    const files = e.target.files
    const formData = new FormData();
    let imagesUrl: any[] = [];
    for (let i = 0; i < files.length; i++) {
      
      formData.append('file', files[i]);
      formData.append('upload_preset', 'i6jgs1ps');
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dwm0cabq4/image/upload`, // Replace 'cloudName' with your Cloudinary cloud name
          formData
        );
       
        imagesUrl = [...imagesUrl, response.data.secure_url]
      } catch (error) {
        console.error('Error uploading images: ', error);
      }
  }
  setImages(imagesUrl)
}
const onChangeImage = async(e) =>{
  const file = e.target.files
  const formData = new FormData();
    formData.append('file', file[0]);
    formData.append('upload_preset', 'i6jgs1ps');
    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dwm0cabq4/image/upload`, // Replace 'cloudName' with your Cloudinary cloud name
        formData
      );
      setAvatar( response.data.secure_url)
    } catch (error) {
      console.error('Error uploading images: ', error);
    }
}
const onSubmit = async (product:IProduct) =>{
    try {
      // const galleryArray = product.gallery?.split(',').slice(0, 500);
    const tagsArray = product.tags?.split(',').slice(0, 500);
     product.gallery = images
    product.tags = tagsArray;
    product.image = avatar
    console.log(product)
    mutation.mutate(product)
    } catch (error) {
      console.log(error)
    }
}
  return (
    <>
      <div className="container">
        <div className="row">
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
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
                  type="file"
                  {...register('image',{required:true})}
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e)=>onChangeImage(e)}
                />
                <img width="130px" src={avatar?avatar:""}/>
        
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                Gallery
                </label>
                <input type="file" onChange={(e)=>onChangeGallery(e)}  multiple />
                <div className="row">
                   {images?.map((item,i)=>(
                    <div className="col-3" key={i}>
                    <img src={item} width='80px'/>
                   </div>
                   ))}
                </div>
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
                Thêm Sản Phẩm
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
                  <option value="">Chọn danh mục</option>
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

export default AddProducts;
