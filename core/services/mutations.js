import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";

const useSendOtp = () => {
  const mutationFn = (data) => api.post("auth/send-otp", data);
  return useMutation({ mutationFn });
};
const useCheckOtp = () => {
  const mutationFn = (data) => api.post("auth/check-otp", data);
  return useMutation({ mutationFn });
};

const useSendTourToBasket = () => {
  const mutationFn = (id) => api.put(`basket/${id}`);
  return useMutation({ mutationFn });
};

const useSendOrder = () => {
  const mutationFn = (data) => api.post("order", data);
  return useMutation({ mutationFn });
};

const useUpdateUser = () => {
  const mutationFn = (data) => api.put("user/profile", data);
  return useMutation({ mutationFn });
};
export { useSendOtp, useCheckOtp, useSendTourToBasket, useSendOrder,useUpdateUser };
