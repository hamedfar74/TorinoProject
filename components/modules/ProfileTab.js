"use client";
import { useGetProfileData } from "@/core/services/queries";
import styles from "./ProfileTab.module.css";
import { e2p } from "@/utils/numbers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUpdateUser } from "@/core/services/mutations";

const initialUserData = {
  mobile: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  birthDate: "",
  nationalCode: "",
  payment: {
    shaba_code: "",
    debitCard_code: "",
    accountIdentifier: "",
  },
};
const ProfileTab = () => {
  const { data, isPending } = useGetProfileData();
  const { data: mutationData, mutate } = useUpdateUser();
  const [user, setUser] = useState(initialUserData);
  const [edit, setEdit] = useState({
    email: false,
    personalData: false,
    bankData: false,
  });

  // useEffect(() => {

  // }, []);

  // console.log(data, isPending);

  const emailSectionHandler = () => {
    setEdit((edit) => ({ ...edit, email: true }));
  };
  const personalSectionHandler = () => {
    setEdit((edit) => ({ ...edit, personalData: true }));
  };
  const bankSectionHandler = () => {
    setEdit((edit) => ({ ...edit, bankData: true }));
  };
  const emailSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(data?.data.mobile);
    await setUser((user) => ({ ...user, mobile: data?.data.mobile }));
    await console.log(user);
    // mutate(user , {onSuccess})
  };
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };
  // console.log(edit, user);
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <h3>اطلاعات حساب کاربری</h3>
        <div>
          <p>شماره موبایل</p>
          <span>{!isPending && e2p(data?.data?.mobile)}</span>
        </div>
        {edit.email ? (
          <form onSubmit={emailSubmitHandler}>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={changeHandler}
            />
            <button type="submit">تایید</button>
          </form>
        ) : (
          <div>
            <p> ایمیل</p>
            <span>{data?.data?.email ? data?.data?.email : <p>-</p>}</span>
            <button onClick={emailSectionHandler}>
              <Image
                width={16}
                height={16}
                src="/icons/edit-2.svg"
                alt="edit-icon"
              />{" "}
              افزودن
            </button>
          </div>
        )}
      </div>
      <div className={styles.personalInfo}>
        <div>
          <h3>اطلاعات شخصی</h3>
          <button onClick={personalSectionHandler}>
            <Image
              width={16}
              height={16}
              src="/icons/edit-2.svg"
              alt="edit-icon"
            />{" "}
            ویرایش اطلاعات
          </button>
        </div>
        {edit.personalData ? (
          <div>
            <input />
          </div>
        ) : (
          <>
            <div>
              <p>نام و نام خانوداگی</p>
              <span>
                {data?.data?.firstName && data?.data?.lastName ? (
                  `${data?.data.firstName + " " + data?.data.lastName}`
                ) : (
                  <p>-</p>
                )}
              </span>
            </div>
            <div>
              <p>کد ملی</p>
              <span>
                {data?.data?.nationalCode ? data?.data?.nationalCode : <p>-</p>}
              </span>
            </div>
            <div>
              <p>جنسیت</p>
              <span>{data?.data?.gender ? data?.data?.gender : <p>-</p>}</span>
            </div>
            <div>
              <p>تاریخ تولد</p>
              <span>
                {data?.data?.birthDate ? data?.data?.birthDate : <p>-</p>}
              </span>
            </div>
          </>
        )}
      </div>
      <div className={styles.bankInfo}>
        <div>
          <h3>اطلاعات حساب بانکی</h3>
          <button onClick={bankSectionHandler}>
            <Image
              width={16}
              height={16}
              src="/icons/edit-2.svg"
              alt="edit-icon"
            />{" "}
            ویرایش اطلاعات
          </button>
        </div>
        <div>
          <p>شماره کارت</p>
          <span>
            {data?.data?.payment?.debitCard_code ? (
              data?.data?.payment?.debitCard_code
            ) : (
              <p>-</p>
            )}
          </span>
        </div>
        <div>
          <p>شماره شبا</p>
          <span>
            {data?.data?.payment?.debitCard_code ? (
              data?.data?.payment?.debitCard_code
            ) : (
              <p>-</p>
            )}
          </span>
        </div>
        <div>
          <p>شماره حساب</p>
          <span>
            {data?.data?.payment?.debitCard_code ? (
              data?.data?.payment?.debitCard_code
            ) : (
              <p>-</p>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
