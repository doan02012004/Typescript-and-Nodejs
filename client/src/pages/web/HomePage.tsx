
import BannerHome from '../../components/web/BannerHome'
import News from '../../components/web/News'
import Shop from '../../components/web/Shop'
import Blogs from '../../components/web/Blogs'
import Service from '../../components/web/Service'
import { useProductQuery } from '../../hooks/products/useProductQuery'

const HomePage = () => {
    const query = useProductQuery();
  return (
   <>
   <BannerHome />
   <News products={query?.data?.data} />
   <Shop />
   <Blogs />
   <Service />
   </>
  )
}

export default HomePage