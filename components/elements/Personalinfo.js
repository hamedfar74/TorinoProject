"use client";

import Image from "next/image";
import styles from "./Personalinfo.module.css"
import { e2p } from "@/utils/numbers";
import { converteDateToFa } from "@/utils/helper";
import { useGetProfileData } from "@/core/services/queries";
import Form from "../modules/Form";
import { useEffect } from "react";
import { validate } from "@/utils/validate";


const PersonalInfo = ({
  edit,
  setEdit,
  user,
  setUser,
  touch,
  setTouch,
  error,
  setError,
  submitHandler,
  personalSectionHandler,
 
}) => {
    const { data: fetchedData, isPending } = useGetProfileData();
    const fetchedGender = (gender) => {
    switch (gender) {
      case "male":
        return "مرد";
      case "female":
        return "زن";
      default:
        return "-";
    }
  };
  useEffect(()=>{
      setError(validate(user))
    },[touch,user])
  return (
    <div className={styles.personalInfo}>
      <div
        className={
          edit.personalData ? styles.personalHeadClose : styles.personalHead
        }
      >
        <h3>اطلاعات شخصی</h3>
        <button className={styles.addbtn} onClick={personalSectionHandler}>
          <span>
            <Image fill src="/icons/edit-2.svg" alt="edit-icon" />
          </span>
          ویرایش اطلاعات
        </button>
      </div>
      {edit.personalData ? (
        <div className={styles.personalFormCont}>
          <form onSubmit={(e) => submitHandler("personalData", e)}>
            <Form
              info={user}
              setInfo={setUser}
              error={error}
              touch={touch}
              setTouch={setTouch}
            >
              <h3>ویرایش اطلاعات شخصی</h3>
            </Form>
            <div className={styles.personalDbt}>
              <button onSubmit={(e) => submitHandler("personalData", e)}>
                تایید
              </button>
              <button
                onClick={() =>
                  setEdit((edit) => ({ ...edit, personalData: false }))
                }
              >
                انصراف
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.personalDetails}>
          <div>
            <p>نام و نام خانوادگی</p>
            <span>{fetchedData?.data?.fullName || <p>-</p>}</span>
          </div>
          <div>
            <p>کد ملی</p>
            <span>
              {fetchedData?.data?.nationalCode ? (
                e2p(fetchedData?.data?.nationalCode)
              ) : (
                <p>-</p>
              )}
            </span>
          </div>
          <div>
            <p>جنسیت</p>
            <span>
              {fetchedData?.data?.gender ? (
                fetchedGender(fetchedData?.data?.gender)
              ) : (
                <p>-</p>
              )}
            </span>
          </div>
          <div>
            <p>تاریخ تولد</p>
            <span>
              {fetchedData?.data?.birthDate ? (
                converteDateToFa(fetchedData?.data?.birthDate)
              ) : (
                <p>-</p>
              )}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfo;
