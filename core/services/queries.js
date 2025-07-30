import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

export const useGetProfileData = () => {
  const queryFn = () => api.get("user/profile");
  const queryKey = ["profile-data"];
  return useQuery({ queryKey, queryFn });
};
export const useGetProfileTours = () => {
  const queryFn = () => api.get("user/tours");
  const queryKey = ["profile-tours"];
  return useQuery({ queryKey, queryFn });
};
export const useGetProfileTransactions = () => {
  const queryFn = () => api.get("user/transactions");
  const queryKey = ["profile-transactions"];
  return useQuery({ queryKey, queryFn });
};
