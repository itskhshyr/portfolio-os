import React, { useState } from "react";
import controlImage from "../assets/icons-notification/control.svg";
import wifiIcon from "../assets/icons-notification/wifi.png";
import BluetoothIcon from "../assets/icons-notification/Radio-waves.png";
import AirDropIcon from "../assets/icons-notification/AirDrop.png";
import arrowIcon from "../assets/icons-notification/arrow.png";
import doNotDisturb from "../assets/icons-notification/Enabled.png";
import keyboardImage from "../assets/icons-notification/keyboardBrightness.png";
import screenMirror from "../assets/icons-notification/screen-mirroring.png";
import AppleMusicIcon from "../assets/icons-notification/Music.png";
import PlayIcon from "../assets/icons-notification/play.png";
import PauseIcon from "../assets/icons-notification/pause.png";
import NextIcon from "../assets/icons-notification/next.png";
import { useSelector, useDispatch } from "react-redux";
import {
  openModal,
  closeModal,
  playAudio,
  pauseAudio,
} from "../redux/actions/modalActions";
const ControlModal = () => {
  const dispatch = useDispatch(); // دسترسی به dispatch برای ارسال اکشن‌ها
  const isOpen = useSelector((state) => state.modal.isOpen); // دسترسی به state از Redux
  const audioFileName = useSelector((state) => state.modal.audioFileName);
  const isPlaying = useSelector((state) => state.modal.isPlaying);

  const handleOpenModal = () => dispatch(openModal());
  const handleCloseModal = () => dispatch(closeModal());

  const toggleAudio = () => {
    if (isPlaying) {
      dispatch(pauseAudio());
    } else {
      dispatch(playAudio());
    }
  };

  return (
    <div>
      <img src={controlImage} onClick={handleOpenModal} />

      {isOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()} // جلوگیری از بسته شدن با کلیک روی خود مودال
          >
            {/* <div className="modal-header">
              <div className="modal-controls">
                <span className="control-btn red"></span>
                <span className="control-btn yellow"></span>
                <span className="control-btn green"></span>
              </div>
            </div> */}
            <div className="modal-content">
              <div className="d-flex modal-content_top">
                <div className="modal-content_top-right ms-2">
                  <div className="do-not-disturb px-2">
                    <div>
                      <img src={arrowIcon} />
                    </div>

                    <div className="d-flex  align-items-center">
                      <div
                        className="ps-2"
                        style={{ color: "#000000", fontSize: "13px" }}
                      >
                        Do Not <br />
                        Disturb
                      </div>
                      <div>
                        <img src={doNotDisturb} />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex mt-2 ">
                    <div className="d-flex flex-column control-keyboard ms-1">
                      <div>
                        <img src={screenMirror} />
                      </div>
                      <div className="pt-1">
                        screen
                        <br />
                        Mirroring
                      </div>
                    </div>
                    <div className="d-flex flex-column control-keyboard me-1">
                      <div>
                        <img src={keyboardImage} />
                      </div>
                      <div className="pt-1">
                        keyboard
                        <br />
                        Brightness
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-content_top-left">
                  <div className="d-flex justify-content-between px-2 mt-2">
                    <div>
                      <img src={arrowIcon} />
                    </div>
                    <div className="d-flex">
                      <div className="d-flex ms-2 text-start flex-column">
                        <div className="Title">Wi-Fi</div>
                        <div className="Information">My iPhone</div>
                      </div>
                      <div>
                        <img src={wifiIcon} />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between px-2 mt-2">
                    <div>
                      <img src={arrowIcon} />
                    </div>
                    <div className="d-flex">
                      <div className="d-flex ms-2 text-start flex-column">
                        <div className="Title">Wi-Fi</div>
                        <div className="Information">My iPhone</div>
                      </div>
                      <div>
                        <img src={BluetoothIcon} />
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between px-2 mt-2">
                    <div>
                      <img src={arrowIcon} />
                    </div>
                    <div className="d-flex">
                      <div className="d-flex ms-2 text-start flex-column">
                        <div className="Title">Wi-Fi</div>
                        <div className="Information">My iPhone</div>
                      </div>
                      <div>
                        <img src={AirDropIcon} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="control-music mt-2 px-2">
                <div className="d-flex">
                  <div className="ms-2">
                    <img src={NextIcon} />
                  </div>
                  <div>
                    <img
                      src={isPlaying ? PauseIcon : PlayIcon} // تغییر آیکون بر اساس وضعیت
                      onClick={toggleAudio} // پخش یا توقف
                      alt="Play/Pause"
                    />
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <div className="ms-2 mt-3">
                    {audioFileName && <p>Now Playing: {audioFileName}</p>}
                  </div>
                  <div>
                    <img src={AppleMusicIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlModal;
