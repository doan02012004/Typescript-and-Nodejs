import cup from '../../assets/images/Group.png'
import chungnhan from '../../assets/images/guarantee.png'
import shipping from '../../assets/images/shipping.png'
import customersupport from '../../assets/images/customer-support.png'

const Service = () => {
  return (
  <section className="service">
  <div className="list-service">
    <div className="list-service-item">
      <div className="list-service_icon">
        <img src={cup}  />
      </div>
      <div className="list-service_content">
        <h1 className="list-service_title">High Quality</h1>
        <p className="list-service_text">crafted from top materials</p>
      </div>
    </div>
    <div className="list-service-item">
      <div className="list-service_icon">
        <img src={chungnhan}  />
      </div>
      <div className="list-service_content">
        <h1 className="list-service_title">Warranty Protection</h1>
        <p className="list-service_text">Over 2 years</p>
      </div>
    </div>
    <div className="list-service-item">
      <div className="list-service_icon">
        <img src={shipping}  />
      </div>
      <div className="list-service_content">
        <h1 className="list-service_title">Free Shipping</h1>
        <p className="list-service_text">Order over 150 $</p>
      </div>
    </div>
    <div className="list-service-item">
      <div className="list-service_icon">
        <img src={customersupport} />
      </div>
      <div className="list-service_content">
        <h1 className="list-service_title">24 / 7 Support</h1>
        <p className="list-service_text">Dedicated support</p>
      </div>
    </div>
  </div>
</section>

  )
}

export default Service