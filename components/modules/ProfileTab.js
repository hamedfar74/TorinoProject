import { useGetProfileData } from "@/core/services/queries";
import styles from "./ProfileTab.module.css";
import { e2p } from "@/utils/numbers";

const ProfileTab = () => {
  const { data, isPending } = useGetProfileData();
  console.log(data, isPending);
  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <h3>اطلاعات حساب کاربری</h3>
        <div>
          <p>شماره موبایل</p>
          <span>{!isPending && e2p(data?.data?.mobile)}</span>
        </div>
        <div>
          <p> ایمیل</p>
          <span>{data?.data?.email ? data?.data?.email : <p>-</p>}</span>
          <button><img src="/icons/edit-2.svg" alt="edit-icon" /> افزودن</button>
        </div>
      </div>
      <div className={styles.personalInfo}>
        <div>
          <h3>اطلاعات شخصی</h3>
          <button><img src="/icons/edit-2.svg" alt="edit-icon" /> ویرایش اطلاعات</button>
        </div>
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
      </div>
      <div className={styles.bankInfo}>
        <div>
          <h3>اطلاعات حساب بانکی</h3>
          <button><img src="/icons/edit-2.svg" alt="edit-icon" /> ویرایش اطلاعات</button>
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
