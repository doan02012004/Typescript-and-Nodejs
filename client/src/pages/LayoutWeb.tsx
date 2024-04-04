import { Outlet } from "react-router-dom"
import Footer from "../components/web/Footer"
import HeaderWeb from "../components/web/HeaderWeb"
import Login from "../components/web/Login"


const LayoutWeb = () => {
  return (
    <>
    <Login />
    <HeaderWeb />
    <Outlet />
    <Footer />
    </>
  )
}

export default LayoutWeb