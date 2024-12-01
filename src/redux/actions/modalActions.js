// redux/actions/modalActions.js

// تعریف نوع اکشن‌ها
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SET_AUDIO_FILE_NAME = "SET_AUDIO_FILE_NAME"; // اکشن جدید
export const PAUSE_AUDIO = "PAUSE_AUDIO";
export const PLAY_AUDIO = "PLAY_AUDIO";
// اکشن برای باز کردن مودال
export const openModal = () => ({
  type: OPEN_MODAL,
});

// اکشن برای بستن مودال
export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const setAudioFileName = (fileName) => ({
  type: SET_AUDIO_FILE_NAME,
  payload: fileName, // ارسال نام فایل
});

export const playAudio = () => ({
  type: "PLAY_AUDIO",
});

export const pauseAudio = () => ({
  type: "PAUSE_AUDIO",
});
