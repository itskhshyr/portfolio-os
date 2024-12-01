import React from 'react'
import Icon1 from "../assets/icons-notification/safari-mobile.png";
import Icon2 from "../assets/icons-notification/Messages.png";
import Icon3 from "../assets/icons-notification/Item - 7.png";
import Icon4 from "../assets/icons-notification/Item - 10.png";
import Icon5 from "../assets/icons-notification/Item - 12.png";
import Icon6 from "../assets/icons-notification/Item - 21.png";
import Icon7 from "../assets/icons-notification/Item - 3.png";
const FooterSm = () => {
  return (
    <div className='App-mobile-footer'>
           <div className="menu">
        <img src={Icon1} className="mx-2" />
      </div>
      <div className="menu">
        <img src={Icon2} className="mx-2" />
      </div>
      <div className="menu">
        <img src={Icon3} className="mx-2" />
      </div>
      <div className="menu">
        <img src={Icon4} className="mx-2" />
      </div>
      <div className="menu">
        <img src={Icon5} className="mx-2" />
      </div>
    </div>
  )
}

export default FooterSm