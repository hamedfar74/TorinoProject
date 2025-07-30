"use client";

import { useRouter } from "next/navigation";
import { useSendTourToBasket } from "@/core/services/mutations";
import toast from "react-hot-toast";

import styles from "./DetailBt.module.css";

const DetailBt = ({ info, children }) => {
  
  const { id } = info;
  const router = useRouter();
  const { isPending, mutate } = useSendTourToBasket();
  // console.log(isPending);
 
 
  const clickHandler = async () => {
    mutate(id, {
      onSuccess: async(data) => {
        console.log(data);
        await toast.success(`${data?.data?.message}`)
      },
      onError: (err) => {
        console.log(err);
      },
    });
    
    router.push("/basket");
  };
  return (
    <button className={styles.bt} onClick={clickHandler}>
      {children}
    </button>
  );
};

export default DetailBt;
