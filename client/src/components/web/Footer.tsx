import React from 'react'

const Footer = () => {
  return (
  <footer className="footer">
  <div className="container">
    <div className="footer-inner">
      <div className="footer-content">
        <div className="footer_logo">
          <h1 className="footer_title">Funiro.</h1>
          <p className="footer_des">400 University Drive Suite 200 Coral <br /> Gables,<br />
            FL 33134 USA</p>
        </div>
        <div className="footer-wrapper">
          <div className="footer-path">
            <h3 className="footer_name">Links</h3>
            <ul className="footer-list">
              <li className="footer-item"><a href="#" className="footer_link">Home</a></li>
              <li className="footer-item"><a href="#" className="footer_link">Shop</a></li>
              <li className="footer-item"><a href="#" className="footer_link">About</a></li>
              <li className="footer-item"><a href="#" className="footer_link">Contact</a></li>
            </ul>
          </div>
          <div className="footer-path">
            <h3 className="footer_name">Help</h3>
            <ul className="footer-list">
              <li className="footer-item"><a href="#" className="footer_link">Payment Options</a></li>
              <li className="footer-item"><a href="#" className="footer_link">Returns</a></li>
              <li className="footer-item"><a href="#" className="footer_link">Privacy Policies</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-contact">
          <h3 className="footer_name">Newsletter</h3>
          <form  className="footer-form">
            <input type="text" className="footer-form_input" placeholder="Enter Your Email Address" />
            <button className="footer_btn">SUBSCRIBE</button>
          </form>
        </div>
        <hr className="footer_border" />
      </div>
      <div className="footer-extra">
        2023 furino. All rights reverved
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer