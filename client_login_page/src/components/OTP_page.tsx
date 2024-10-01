import React, { useState } from 'react';
import OTPCountdown from './OTP_countdown';
import OTPForm from './OTP_form';

const OTPPage: React.FC = () => {
  const [isExpired, setIsExpired] = useState(false);
  const [otpSubmitted, setOtpSubmitted] = useState(false);

  const handleExpire = () => {
    setIsExpired(true);
    alert('OTP expired! Please request a new one.');
  };

  const handleSubmitOTP = (otp: string) => {
    setOtpSubmitted(true);
    alert(`OTP Submitted: ${otp}`);
    // Handle OTP submission to the server or validation here
  };

  return (
    <div>
      <h2>Enter your OTP</h2>

      {/* Display either the OTP form or an expired message */}
      {!isExpired && !otpSubmitted ? (
        <>
          <OTPCountdown initialTime={60} onExpire={handleExpire} />
          <OTPForm onSubmit={handleSubmitOTP} />
        </>
      ) : isExpired ? (
        <p>OTP has expired. Please request a new one.</p>
      ) : (
        <p>OTP has been submitted successfully!</p>
      )}
    </div>
  );
};

export default OTPPage;
