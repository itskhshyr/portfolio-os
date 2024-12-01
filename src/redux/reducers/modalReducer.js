// redux/reducers/modalReducer.js

import { OPEN_MODAL, CLOSE_MODAL,SET_AUDIO_FILE_NAME  } from "../actions/modalActions";

// مقدار اولیه استیت
const initialState = {
    isOpen: false,
    audioFileName: "",
    isPlaying: false, // برای مدیریت وضعیت پخش
  };

// ریدوسر مدیریت مودال
const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: true };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };
      case SET_AUDIO_FILE_NAME: // مدیریت تغییر نام فایل
      return { ...state, audioFileName: action.payload };
      case "PLAY_AUDIO":
      return { ...state, isPlaying: true };
    case "PAUSE_AUDIO":
      return { ...state, isPlaying: false };
    default:
      return state;
  }
};

export default modalReducer;
