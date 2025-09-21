"use client";

import { useGetProfileData } from "@/core/services/queries";
import styles from "./ProfileTab.module.css";

import { useEffect, useState } from "react";
import { useUpdateUser } from "@/core/services/mutations";

import { paymentValidation, validate } from "@/utils/validate";
import { convertPdateToGregorian } from "@/utils/helper";
import toast from "react-hot-toast";
import AccountInfo from "../elements/AccountInfo";
import PersonalInfo from "../elements/PersonalInfo";
import BankInfo from "../elements/BankInfo";

const initialUserData = {
  mobile: "",
  email: "",
  fullName: "",
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
  const { data: fetchedData, isPending } = useGetProfileData();
  const { mutate } = useUpdateUser();
  const [user, setUser] = useState(initialUserData);
  const [error, setError] = useState({});
  const [touch, setTouch] = useState({});
  const [edit, setEdit] = useState({
    email: false,
    personalData: false,
    bankData: false,
  });

  useEffect(() => {
    if (!isPending && fetchedData?.data) {
      setUser({
        mobile: fetchedData?.data?.mobile || "",
        email: fetchedData?.data?.email || "",
        fullName: fetchedData?.data?.fullName || "",
        gender: fetchedData?.data?.gender || "",
        birthDate: fetchedData?.data?.birthDate || "",
        nationalCode: fetchedData?.data?.nationalCode || "",
        payment: {
          shaba_code: fetchedData?.data?.payment?.shaba_code || "",
          debitCard_code: fetchedData?.data?.payment?.debitCard_code || "",
          accountIdentifier:
            fetchedData?.data?.payment?.accountIdentifier || "",
        },
      });
    }
  }, [fetchedData, isPending]);
  // console.log(user)
  // useEffect(() => {
  //   const personalError = validate(user);
  //   const paymentError = paymentValidation(user.payment);
  //   console.log(personalError,paymentError);

  //   if (!user) return;
  //   if (!isPending && fetchedData?.data) {
  //     setError((error) => ({ ...error, ...personalError, ...paymentError }));
  //   }
  // }, [user, touch]);

  const emailSectionHandler = () => {
    setEdit((edit) => ({ ...edit, email: true }));
  };
  const personalSectionHandler = () => {
    setEdit((edit) => ({ ...edit, personalData: true }));
  };
  const bankSectionHandler = () => {
    setEdit((edit) => ({ ...edit, bankData: true }));
  };

  const submitHandler = (section, e) => {
    e.preventDefault();
    let updatedUser = { ...user };
    if (section === "email" && user.email) {
      updatedUser.email = user.email;
    } else if (section === "personalData") {
      const [firstName, lastName] = user.fullName.split(" ");
      updatedUser = {
        ...updatedUser,
        firstName,
        lastName,
        birthDate: convertPdateToGregorian(user?.birthDate),
      };
    } else if (section === "bankData") {
      updatedUser.payment = {
        ...user.payment,
        shaba_code: user.payment.shaba_code,
        debitCard_code: user.payment.debitCard_code,
        accountIdentifier: user.payment.accountIdentifier,
      };
    }
    mutate(updatedUser, {
      onSuccess: (data) => {
        setEdit((prevEdit) => ({
          ...prevEdit , [section] : false
        }))
        console.log(data);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };
  console.log("user:", user);
  console.log("error :", error);
  console.log(touch);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((user) => {
      if (
        name === "shaba_code" ||
        name === "debitCard_code" ||
        name === "accountIdentifier"
      ) {
        return { ...user, payment: { ...user.payment, [name]: value } };
      } else {
        return { ...user, [name]: value };
      }
    });
  };

  const focusHandler = (e) => {
    setTouch({ ...touch, [e.target.name]: true });
  };

  return (
    <div className={styles.container}>
      <AccountInfo
        edit={edit}
        user={user}
        touch={touch}
        error={error}
        setError={setError}
        submitHandler={submitHandler}
        emailSectionHandler={emailSectionHandler}
        changeHandler={changeHandler}
        focusHandler={focusHandler}
      />
      <PersonalInfo
        edit={edit}
        setEdit={setEdit}
        user={user}
        setUser={setUser}
        touch={touch}
        setTouch={setTouch}
        error={error}
        setError={setError}
        submitHandler={submitHandler}
        personalSectionHandler={personalSectionHandler}
        changeHandler={changeHandler}
        focusHandler={focusHandler}
      />
      <BankInfo
        edit={edit}
        setEdit={setEdit}
        user={user}
        touch={touch}
        error={error}
        setError={setError}
        submitHandler={submitHandler}
        bankSectionHandler={bankSectionHandler}
        changeHandler={changeHandler}
        focusHandler={focusHandler}
      />
    </div>
  );
};

export default ProfileTab;
