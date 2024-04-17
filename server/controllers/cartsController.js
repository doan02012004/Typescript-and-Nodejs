const cartsModel = require('../models/Carts')
const productModel = require('../models/Products')
const getCartbyId = async(req,res)=>{
    try {
        const {userId} = req.params;
        const cart = await cartsModel.findOne({ userId });
        // console.log(cart.products[0])
        // .populate("products.productId")
        for (let index = 0; index < cart.products.length; index++) {
            const product = await productModel.findOne({_id:cart.products[index].productId});
            if(!product){
                const newCart =  cart.products.filter(item => item.productId != cart.products[index].productId)
                // console.log("sản phẩm đã bị xóa" + cart.products[index].productId);
                 await cartsModel.updateOne({ userId }, { products: newCart });
                
            }

        }
        // lấy dữ liệu giỏ hàng
            cartItem = await cartsModel.findOne({ userId }).populate("products.productId");

        const cartData = {
            products: cartItem.products.map((item) => ({
                productId: item.productId._id,
                name: item.productId.name,
                image: item.productId.image,
                quantity: item.quantity,
                price: item.productId.price
            })),
        };
       return res.status(200).json({
        data:cartData.products
       })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}

const addToCart = async(req,res)=>{
    try {
        const {userId,productId,quantity} = req.body
            // kiểm tra giỏ hàng có tồn tại chưa? dựa theo UserId
            let cart = await cartsModel.findOne({ userId });
            // nếu giỏ hàng không tồn tại thì chúng ta tạo mới
            if (!cart) {
                cart = new cartsModel({ userId, products: [] });
            }
            const existProductIndex = cart.products.findIndex(
                (item) => item.productId.toString() == productId
            );
    
            // { userId: 1, productId: 2, quantity: 100}
            // cart: { userId: 1, products: [ { productId: 1, quantity: 2 }]}
                // kiểm tra xem sản có tồn tại trong giỏ hàng không?
        if (existProductIndex !== -1) {
            // nếu mà sản phẩm tồn tại trong giỏ hàng thì chúng ta cập nhật số lượng
            cart.products[existProductIndex].quantity += quantity;
        } else {
            // nếu sản phẩm chưa có trong giỏ hàng thì chúng ta thêm mới
            cart.products.push({ productId, quantity });
        }
        await cart.save();
        return res.status(200).json({
            message: "Add To Cart thành công",
            data: cart
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

const removeCart = async(req,res)=>{
    const {userId,productId} = req.body;
    try {
    const cart = await cartsModel.findOne({userId});
        if(!cart){
            return res.status(200).json({
                message:"Cart not found"
            })
        }
        
    cart.products =  cart.products.filter((item) =>item.productId && item.productId.toString() !== productId)
    await cart.save();
    return res.status(200).json({
        message:"Delete thành công",
        data : cart.products
    })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {
    addToCart,
    getCartbyId,
    removeCart
}