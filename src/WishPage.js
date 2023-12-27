// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import './Wishes.css'; // Import your CSS file for styling
//import Countdown from 'react-countdown';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
//import CountDown from './CountDown';
// React component for the wishes website
const WishPage = () => {
  // Set the visa interview date (replace with the actual date)
  const visaInterviewDate = new Date('2023-12-27T09:57:00');
  const [key, setKey] = useState(0);
  // Calculate the time remaining until the visa interview
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = visaInterviewDate - now;
    console.log("visaInterviewDate", visaInterviewDate, "now", now, "difference", difference)
    return difference > 0 ? difference : 0;

  };

  // State for the countdown timer
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
console.log("timeRemaining", timeRemaining)
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(timer);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Function to format the countdown timer
//   const renderer = ({ days, hours, minutes, seconds, completed }) => {
//     if (completed) {
//       return <span>It's Interview Day! Best of Luck!</span>;
//     } else {
//       return (
//         <span>
//           {days}d {hours}h {minutes}m {seconds}s
//         </span>
//       );
//     }
//   };
  const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6
};
// const renderTime = ({ remainingTime }) => {
//     console.log("timeRemaining", timeRemaining)
//     if (timeRemaining === 0) {
//       return <div className="timer">Too lale...</div>;
//     }
  
//     return (
//       <div className="timer">
//         <div className="text">Remaining</div>
//         <div className="value">{timeRemaining}</div>
//         <div className="text">seconds</div>
//       </div>
//     );
//   };


const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
//const getTimeDays = (time) => (time / daySeconds) | 0;
const stratTime = new Date() / 1000; // use UNIX timestamp in seconds
const endTime = new Date('2023-12-27T13:30:00')/1000; // use UNIX timestamp in seconds

const remainingTime = endTime - stratTime;
const renderTime = (dimension, time) => {
   
    // let hourTime, minTime, secTime
    // if(dimension =="hours"){
    //     hourTime = time
    // }
    //  if(dimension =="minutes"){
    //     minTime = time
    // }
    //  if(dimension =="seconds"){
    //    secTime = time
    // }
    // console.log("dimension", hourTime,"minTime",  minTime,"secTime",  secTime)
    // if (hourTime === 0 && minTime === 0 && secTime === 0) {
    //     return <div className="time-wrapper">It's Interview Time! Best of Luck!</div>;
    //   }
    //   else{      
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
// }
};
console.log("Date.now()", Date.now(), remainingTime)
//const days = Math.ceil(remainingTime / daySeconds);
//const daysDuration = days * daySeconds;
  return (
    <div className="wishes-container">
      <header>
        <h2>{`Best Wishes, My Dear Friend!`}</h2>
      </header>
      <section className="good-luck-section">
        <h3>🌟 Good Luck on Your Visa Interview! 🌟</h3>
        <p>
          Dear Sahithi,<br />
          Wishing you all the best as you embark on this incredible journey. You've got this!
        </p>
      </section>
      <h2>⏰ Countdown Timer</h2>
      <section className="countdown-section"  style={{display: "flex", justifyContent: "space-evenly"}}>
      {/* <CountdownCircleTimer
        {...timerProps}
        colors="#7E2E84"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer> */}
      <CountdownCircleTimer
        key={key}
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        key={key}
        {...timerProps}
        colors="#EF798A"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        key={key}
        {...timerProps}
        colors="#218380"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
        {/* <h2>⏰ Countdown Timer</h2>
        <Countdown date={visaInterviewDate} renderer={renderer} />
        <h2>⏰ Countdown Timer</h2>
        <CountdownCircleTimer
          isPlaying
          duration={visaInterviewDate *60}
          colors={[['#F26419', 0.33], ['#6FA3EF', 0.33], ['#31C48D', 0.33]]}
        >
          {renderTime}
         
        </CountdownCircleTimer> */}
      </section>
      <div class="gif_container">
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZ2JiZDR0a3lvMWF4OG8yc3p6Ymdvd3g2d245amdveDhyYmx6eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/cLS1cfxvGOPVpf9g3y/giphy.gif" alt="Cute animated illustration"/>
            </div>        <p>Your future is waiting for you. Best of luck!</p>
      <footer>
        <p>
          Remember Sahithi, you've got all your friends cheering you on! Wishing you all the best
          in your visa interview—may success and positive vibes surround you. 🚀💖
        </p>
        <p>With love and best wishes,<br />Saswath </p>
      </footer>
    </div>
  );
};

export default WishPage;
