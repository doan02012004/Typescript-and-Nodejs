
import { Route, Routes } from 'react-router-dom'
import LayoutAdmin from './pages/LayoutAdmin'
import ProductsList from './pages/admin/products/ProductsList'
import Dashboard from './pages/admin/products/Dashboard'
import AddProducts from './pages/admin/products/AddProducts'
import EditProducts from './pages/admin/products/EditProducts'
import LayoutWeb from './pages/LayoutWeb'
import HomePage from './pages/web/HomePage'
import ShopPage from './pages/web/ShopPage'
import DetailPage from './pages/web/DetailPage'
import CartsPage from './pages/web/CartsPage'
import PayPage from './pages/web/PayPage'
import OrderPage from './pages/web/OrderPage'

function App() {
 

  return (
    <>
     <Routes>
      <Route path='/' element={<LayoutWeb />}>
          <Route index element={<HomePage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='product-detail/:id' element={<DetailPage />} />
          <Route path='carts' element={<CartsPage />} />
          <Route path='order' element={<PayPage />} />
          <Route path='check-order' element={<OrderPage />} />
      </Route>
      <Route path='/admin' element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path='products' element={<ProductsList />} />
        <Route path='products/add' element={<AddProducts />} />
        <Route path='products/edit/:id' element={<EditProducts />} />
      </Route>
     </Routes>
    </>
  )
}

export default App
