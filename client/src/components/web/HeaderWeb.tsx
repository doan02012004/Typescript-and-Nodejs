
import { Link } from 'react-router-dom'
import useCartQuery from '../../hooks/carts/useCartQuery'

const HeaderWeb = () => {
    const check = JSON.parse(localStorage.getItem('user'))
    const onOpenLogin =()=>{
        const loginElement = document.querySelector(".login") as HTMLElement
        loginElement .style.bottom = "0"
        loginElement.style.opacity = "1"
        loginElement.style.height = "100vh";
    }
    const {query} = useCartQuery();
    
  // Tính tổng quantity của tất cả sản phẩm
    const totalQuantity = query?.data?.reduce((total, cart) => total + cart.quantity, 0);

  return (
    <header className="header">
  <div className="container">
    <div className="header-inner">
      <div className="header-logo">
        <img src="../image/Frame 168.png" />
      </div>
      <div className="header-mobile">
        <label  className="header-mobile_bars" id="checkopen"><i className="fa-solid fa-bars" /></label>
      </div>
      <nav className="header-nav">
        <ul className="main-menu">
          <div className="header_close">
            <label  id="checkclose"><i className="fa-solid fa-x" /></label>
          </div>
          <li className="main-menu_item"><Link to="/" className="main-menu_link">Home</Link></li>
          <li className="main-menu_item"><Link to="/shop" className="main-menu_link">Shop</Link></li>
          <li className="main-menu_item"><a href="#" className="main-menu_link">About</a></li>
          <li className="main-menu_item"><a href="#" className="main-menu_link">Contact</a></li>
        </ul>
      </nav>
      <div className="header-block">
        <div className="header-user">
          <span className="header-block_icon"><i className="fa-regular fa-user" /></span>
          <div className="header-block-dropmenu">
        {!check?.data && ( 
            <button className="header-block-dropmenu_btn" onClick={onOpenLogin}>Đăng Nhập</button>
          )}
        {check.data && (
         <>
          <Link to=''><button  className="header-block-dropmenu_btn">Thông tin tài khoản</button></Link> <br />
          <Link to=''> <button className="header-block-dropmenu_btn">Kiểm tra đơn hàng</button></Link><br />
          <button className="header-block-dropmenu_btn">Đăng Xuất</button>
         </>
        )}
          </div>
        </div>
        <div className="header-search">
          <span className="header-block_icon"><i className="fa-solid fa-magnifying-glass" /></span>
        </div>
        <div className="header-wishlish">
          <span className="header-block_icon"><i className="fa-regular fa-heart" /></span>
        </div>
        <div className="header-cart">
          <Link to='/carts' className="header-block_icon header-block_icon-carts"><i className="fa-solid fa-cart-shopping" /> <span className='header-block_icon-total'>{totalQuantity}</span></Link>
        </div>
      </div>
    </div>
  </div>
</header>

  )
}

export default HeaderWeb