"use client";

import { useGetProfileData } from "@/core/services/queries";
import Image from "next/image";
import styles from "./BankInfo.module.css";
import { e2p } from "@/utils/numbers";
import { useEffect } from "react";
import { paymentValidation } from "@/utils/validate";

const BankInfo = ({
  edit,
  setEdit,
  user,
  touch,
  error,
  setError,
  submitHandler,
  bankSectionHandler,
  changeHandler,
  focusHandler,
}) => {
  const { data: fetchedData, isPending } = useGetProfileData();
  useEffect(() => {
    setError(paymentValidation(user.payment));
  }, [touch, user]);
  return (
    <div className={styles.bankInfo}>
      {edit.bankData ? (
        <form
          className={styles.bankForm}
          onSubmit={(e) => submitHandler("bankData", e)}
        >
          <h3>ویرایش حساب بانکی</h3>
          <div className={styles.bankInputs}>
            <div className={styles.bankInputItems}>
              <input
                name="debitCard_code"
                type="text"
                placeholder="شماره کارت"
                value={user.payment.debitCard_code}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              <span>
                {touch?.debitCard_code && error?.debitCard_code && (
                  <span className={styles.error}>{error.debitCard_code}</span>
                )}
              </span>
            </div>
            <div className={styles.bankInputItems}>
              <input
                name="shaba_code"
                type="text"
                placeholder="شماره شبا-بهمراه IR وارد شود"
                value={user.payment.shaba_code}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              <span>
                {touch?.shaba_code && error?.shaba_code && (
                  <span className={styles.error}>{error.shaba_code}</span>
                )}
              </span>
            </div>
            <div className={styles.bankInputItems}>
              <input
                name="accountIdentifier"
                type="text"
                placeholder="شماره حساب"
                value={user.payment.accountIdentifier}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
              <span>
                {touch?.accountIdentifier && error?.accountIdentifier && (
                  <span className={styles.error}>
                    {error.accountIdentifier}
                  </span>
                )}
              </span>
            </div>
          </div>
          <div className={styles.personalDbt}>
            <button onSubmit={(e) => submitHandler("bankData", e)}>
              تایید
            </button>
            <button
              onClick={() => setEdit((edit) => ({ ...edit, bankData: false }))}
            >
              انصراف
            </button>
          </div>
        </form>
      ) : (
        <div className={styles.bankDetails}>
          <div className={styles.head}>
            <h3>اطلاعات حساب بانکی</h3>
            <button className={styles.addbtn} onClick={bankSectionHandler}>
              <Image
                width={16}
                height={16}
                src="/icons/edit-2.svg"
                alt="edit-icon"
              />
              ویرایش اطلاعات
            </button>
          </div>
          <div className={styles.bankDescription}>
            <div>
              <p>شماره کارت</p>
              <span>
                {e2p(fetchedData?.data?.payment?.debitCard_code) || <p>-</p>}
              </span>
            </div>
            <div>
              <p>شماره شبا</p>
              <span>{fetchedData?.data?.payment?.shaba_code || <p>-</p>}</span>
            </div>
            <div>
              <p>شماره حساب</p>
              <span>
                {fetchedData?.data?.payment?.accountIdentifier || <p>-</p>}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankInfo;
