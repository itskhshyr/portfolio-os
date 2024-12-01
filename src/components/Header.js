import React from "react";
import onOffIcon from "../assets/icons-notification/control.svg";
import batteryIcon from "../assets/icons-notification/Battery.svg";
import UserIcon from "../assets/icons-notification/User.svg";
import SoundIon from "../assets/icons-notification/Sound.svg";
import AppleIcon from "../assets/icons-notification/Apple.svg";
import ControlModal from "./ControlModal";
import LiveClock from "./LiveClock";
const Header = () => {
  return (
    <div className="App-header">
      <div className="d-flex ">
        <div className="mx-2"><LiveClock /></div>
        <div className="mx-2">
          <ControlModal />
        </div>
        <div className="mx-2">
          <img src={batteryIcon} />
        </div>
        <div className="mx-2">
          <img src={UserIcon} />
        </div>
        <div className="mx-2">
          <img src={SoundIon} />
        </div>
      </div>
      <div className="d-flex  align-items-center mt-1 ">
        <div className="mx-2" >Help</div>
        <div className="mx-2" >Window</div>
        <div className="mx-2" >Go</div>
        <div className="mx-2">View</div> 
        <div className="mx-2">Edit</div>
        <div className="mx-2">File</div>
        <div className="mx-2">Finder</div>
        <div className="mx-2 mb-2"><img src={AppleIcon}  /></div>
      </div>
    </div>
  );
};

export default Header;
