import React, { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date()); // زمان جاری را به‌روزرسانی می‌کند
    }, 1000);

    return () => clearInterval(timer); // پاک‌سازی تایمر هنگام تخریب کامپوننت
  }, []);

  // قالب‌دهی زمان به صورت HH:MM:SS
  const formattedTime = time.toLocaleTimeString();

  return <div style={{ fontSize: "13px" }}>{formattedTime}</div>;
};

export default LiveClock;
