import React, { useRef } from "react";
import AppleMusic from "../assets/icons-notification/Music.png";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  setAudioFileName,
  pauseAudio,
} from "../redux/actions/modalActions";
import myAudio from "../assets/songs/Bahram-Sooz.mp3";
const AudioPlayer = () => {
  const audioRef = useRef(null); // برای دسترسی به المان صوتی
  const dispatch = useDispatch(); // برای ارسال اکشن‌ها
  const isPlaying = useSelector((state) => state.modal.isPlaying); // خواندن وضعیت پخش از Redux
  const playAudio = () => {
    const audio = new Audio(myAudio); // مسیر فایل صوتی
    if (audio) {
      audio
        .play()
        .then(() => {
          console.log("Audio is playing");
          dispatch(playAudio());
          dispatch(openModal()); // باز کردن مودال
          dispatch(setAudioFileName("Bahram-Sooz.mp3")); // تنظیم نام فایل
        })
        .catch((err) => {
          console.error("Error playing audio:", err);
        });
    }
  };

  return (
    <>
      <img src={AppleMusic} onClick={playAudio} />

      <audio id="audio-file">
        <source src="../../public/songs/Bahram-Sooz.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default AudioPlayer;
