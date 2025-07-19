import OTPInput from "react-otp-input";
import { useAuth } from "../context/AuthProvider";

const CheckOtp = ({ setStep, otp, setOtp, mobile }) => {
  const {LoginHandler} = useAuth()
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(otp);
    LoginHandler({"mobile":mobile , "code":otp})
  };
  return (
    <div>
      <span onClick={() => setStep(1)}>🔙</span>
      <h2>کد تایید را وارد کنید</h2>
      <p>کد تایید به شماره {mobile} ارسال شد</p>
      <form onSubmit={submitHandler}>
        <div >
          <OTPInput
            containerStyle={{ flexDirection: "row-reverse",justifyContent:"space-between" }}
            value={otp}
            onChange={setOtp}
            renderSeparator={<span> </span>}
            numInputs={6}
            inputType="number"
            renderInput={(props) => <input {...props} />}
            shouldAutoFocus="true"
          />
        </div>
        {/* CountDown */}
        <button>ورود به تورینو</button>
      </form>
    </div>
  );
};

export default CheckOtp;
