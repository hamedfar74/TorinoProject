"use client";
import api from "@/configs/api";
import { getCookie, setCookie } from "@/utils/cookie";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [token, setToken] = useState({ accessToken: "", refreshToken: "" });
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const accessToken = getCookie("accessToken");
    const refreshToken = getCookie("refreshToken");
    setToken({ accessToken, refreshToken });
  }, []);

  const router = useRouter();
  // console.log({ user, token, mobile });
  const sendOtp = (userInfo) => {
    return api.post("auth/check-otp", userInfo);
  };
  const { mutate: otpMutate } = useMutation({ mutationFn: sendOtp });
  const LoginHandler = (userData, after) => {
    otpMutate(userData, {
      onSuccess: (data) => {
        console.log(data);
        setCookie("accessToken", data?.data.accessToken, 30);
        setCookie("refreshToken", data?.data.refreshToken, 360);
        setToken({
          accessToken: data?.data.accessToken,
          refreshToken: data?.data.refreshToken,
        });
        setMobile(data?.data?.user.mobile);
        router.replace("/");
        after();
      },
      onError: (err) => {
        toast.error(err.message);
        console.log(err);
      },
    });
  };
  const LogoutHandler = () => {
    setCookie("accessToken", "", 0);
    setCookie("refreshToken", "", 0);
    setUser("");
    setError("");
    setMobile("");
    router.replace("/").then(() => window.location.reload());
  };
  const isLoggedIn = () => {
    if (!token.accessToken && !token.refreshToken) {
      return false;
    } else {
      return true;
    }
  };
  return (
    <AuthContext.Provider
      value={{ token, user, LoginHandler, LogoutHandler, isLoggedIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
