import React, { useEffect, useState } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [sec, setSec] = useState();

  let interval;

  const counterDown = () => {
    const destination = new Date('Oct 10, 2022').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;
      const days = Math.floor(different / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSec(sec);
      }
    });
  };
  useEffect(()=>{
    counterDown()
  })

  return (
    <ul className="timer d-flex align-items-center">
      <li className="active">
        {days}
        <br></br>Days
      </li>
      <li>:</li>
      <li className="active">
        {hours}
        <br></br>Hours
      </li>
      <li>:</li>
      <li className="active">
        {minutes}
        <br></br>Minutes
      </li>
      <li>:</li>
      <li className="active">
        {sec}
        <br></br>Sec
      </li>
    </ul>
  );
};

export default Clock;
