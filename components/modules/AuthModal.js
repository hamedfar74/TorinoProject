"use client";
import { useState } from "react";
import SendOtp from "../elements/SendOtp";
import CheckOtp from "../elements/CheckOtp";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

const AuthModal = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(0);
  const [mobile, setMobile] = useState("");
  const {token } = useAuth()
 if (token.accessToken) return

  return (
    <div>
      {step === 1 && (
        <SendOtp setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && <CheckOtp setStep={setStep} otp={otp} setOtp={setOtp} mobile={mobile} />}
      <Toaster />
    </div>
  );
};

export default AuthModal;
