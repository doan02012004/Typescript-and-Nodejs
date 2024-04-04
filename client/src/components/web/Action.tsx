import React from 'react'

const Action = () => {
  return (
 <section className="action">
  <div className="container">
    <div className="action-inner">
      <div className="action-filter">
        <div className="action-filter_list">
          <span className="action-filter_extra"><i className="fa-solid fa-sliders" />Filter</span>
          <span><i className="fa-solid fa-list" /></span>
          <span><i className="fa-solid fa-list" /></span>
        </div>
        <div className="action-filter_des">
          <p className="action-filter_text">Showing 1–16 of 32 results</p>
        </div>
      </div>
      <div className="action-short">
        <div className="action-short_item">
          <span className="action-short_name">Show</span>
          <select className=" action-short_select" name id>
            <option value>8</option>
            <option value>16</option>
            <option value>32</option>
          </select>
        </div>
        <div className="action-short_item">
          <span className="action-short_name">Short By</span>
          <input type="text" className=" action-short_input" placeholder="Default" />
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Action