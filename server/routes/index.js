const ProductsRoutes = require('./ProductsRoutes');
const MenusRoutes = require('./MenusRoutes')
const UserRouter = require('./Users')
const CartRouter = require('./Carts')
const CategoriesRouter = require('./Categories')
const AttributeRouter = require('./Attribute')
const OrderRouter = require('./Order')
const routes = (app)=>{
    //Router Products
app.use("/products",ProductsRoutes)
app.use("/menus",MenusRoutes)
app.use('/users',UserRouter)
app.use('/carts',CartRouter)
app.use('/categories',CategoriesRouter)
app.use('/attributes',AttributeRouter)
app.use('/orders',OrderRouter)
}

module.exports = routes