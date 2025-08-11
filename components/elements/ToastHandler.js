"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const ToastHandler = () => {
const router = useRouter();
  const searchParams = useSearchParams();
  const redirected = searchParams.get("redirected");
  useEffect(()=>{
    if(!redirected) return
    if (redirected === "unauthorized") {
      toast.error("برای دسترسی به این صفحه ابتدا وارد شوید !");
    }
    if (redirected === "emptyBasket") {
      toast.error("سبد خرید شما خالیست");
    }
    const newUrl = window.location.pathname;
    if ( newUrl !== "/404") router.replace(newUrl);
  },[redirected])
  return null
}

export default ToastHandler