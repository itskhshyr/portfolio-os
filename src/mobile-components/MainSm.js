import React from 'react'
import telegramIcon from "../assets/icons-notification/tel.svg";
import linkdinIcon from "../assets/icons-notification/link.svg";
import mailIcon from "../assets/icons-notification/email.svg";
import gitIcon from "../assets/icons-notification/git.svg";
const MainSm = () => {
  return (
    <>
 <div className="d-flex px-4 pt-4 main" dir="ltr">
      <div className=" flex-column">
        <div className="d-flex">
          <div className="d-flex flex-column me-4 menu">
            <a
            style={{textDecoration:"none !important" ,color:"white"}}
              target="_blank"
              href="https://t.me/Khashayarrmz"
              className="d-flex flex-column"
            >
              <img src={telegramIcon} width="48" height="48" />
              <span className="span-style-subtitle mt-2">Telegram</span>
            </a>
          </div>
          <div className="d-flex flex-column  ms-2 menu">
            <a
            style={{color:"white"}}
              className="d-flex flex-column"
              target="_blank"
              href="https://www.linkedin.com/in/khashayar-ramezani-127213235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0gNpXf%2BnTxCodTICSDOk2A%3D%3D"
            >
              <img src={linkdinIcon} width="48" height="48" />
              <span className="span-style-subtitle mt-2">Linkdin</span>
            </a>
          </div>
        </div>

        <div className="d-flex mt-4">
          <div className="d-flex flex-column me-4 menu">
            <a
            className="d-flex flex-column"
            style={{color:"white"}}
            target="_blank"
              href="mailto: khashayarrm1999@gmail.com"
            >
              <img src={mailIcon} width="48" height="48" />
              <span className="span-style-subtitle mt-2">E-Mail</span>
            </a>
          </div>
          <div className="d-flex flex-column ms-2 menu">
            <a className="d-flex flex-column" style={{color:"white"}}  href="https://github.com/itskhshyr" target="_blank">
            <img src={gitIcon} width="48" height="48" />
            <span className="span-style-subtitle mt-2">Git Hub</span>
            </a>
      
          </div>
        </div>
      </div>
       
    
    </div>
    </>
  )
}

export default MainSm