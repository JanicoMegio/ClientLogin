import React, { useState } from 'react';

interface OTPFormProps {
  onSubmit: (otp: string) => void;
}

const OTPForm: React.FC<OTPFormProps> = ({ onSubmit }) => {
  const [otp, setOtp] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(otp);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="otp">Enter OTP:</label>
      <input
        type="text"
        id="otp"
        value={otp}
        onChange={handleChange}
        maxLength={6} // Adjust the OTP length as required
        required
      />
      <button type="submit">Submit OTP</button>
    </form>
  );
};

export default OTPForm;
