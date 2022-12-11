import React from 'react'
import "../Application/Application.scss"


function Application() {
  return (
    <div>
      <div className="application">
        <div className="application-img">
          <img src="https://barista.qodeinteractive.com/wp-content/uploads/2017/01/home-1-img-6.png" alt="" />
        </div>
        <div className="application-details">
          <h4>Application</h4>
          <h1>USE OUR APPLICATION.</h1>
          <div className="line"></div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis perferendis magni, tempore deleniti soluta est cum a eos saepe veniam unde omnis commodi, doloribus incidunt aut adipisci quibusdam voluptates ipsum.</p>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Application