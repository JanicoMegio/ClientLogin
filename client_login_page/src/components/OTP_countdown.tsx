import React, { useState, useEffect } from 'react';

interface OTPCountdownProps {
  initialTime: number; // Initial time in seconds
  onExpire: () => void; // Callback when the countdown reaches zero
}

const OTPCountdown: React.FC<OTPCountdownProps> = ({ initialTime, onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer); // Clear the timer on unmount or reset
    } else {
      onExpire(); // Call the callback function when the countdown expires
    }
  }, [timeLeft, onExpire]);

  // Format the time as mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div>
      <p>Time left for OTP: {formatTime(timeLeft)}</p>
    </div>
  );
};

export default OTPCountdown;
