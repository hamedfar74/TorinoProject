"use client";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import styles from "./Form.module.css";
const Form = ({ info, setInfo, error, touch, setTouch, children }) => {
  const changeHandler = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };
  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 15,
    today.getMonth(),
    today.getDate()
  );
  const focusHandler = (e) => {
    if (e.target.name === "") {
      setTouch({ ...touch, birthDate: true });
    } else {
      setTouch({ ...touch, [e.target.name]: true });
    }
  };
  // console.log(info)

  return (
    <div className={styles.userInfo}>
      {children}
      <div className={styles.webInfo}>
        <div className={styles.fieldItem}>
          <input
            type="text"
            name="fullName"
            value={info?.fullName}
            placeholder="نام و نام خانوادگی"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <span>
            {touch.fullName && error && (
              <span className={styles.error}>{error.fullName}</span>
            )}
          </span>
        </div>
        <div className={styles.fieldItem}>
          <input
            type="text"
            name="nationalCode"
            value={info?.nationalCode}
            placeholder="کد ملی"
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <span>
            {touch.nationalCode && error && (
              <span className={styles.error}>{error.nationalCode}</span>
            )}
          </span>
        </div>
        <div className={styles.fieldItem}>
          <select name="gender" onChange={changeHandler} onFocus={focusHandler} value={info?.gender}>
            <option value="" defaultValue>
              جنسیت
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>

          <span>
            {touch.gender && error && (
              <span className={styles.error}>{error.gender}</span>
            )}
          </span>
        </div>
        <div className={styles.fieldItem}>
          <div
            className={styles.dateContainer}
            name="birthDate"
            onFocus={focusHandler}
          >
            <DatePicker
              placeholder="تاریخ تولد"
              value={info?.birthDate}
              onChange={(dateObj) => {
                setInfo((prev) => ({
                  ...prev,
                  birthDate: dateObj,
                }));
              }}
              calendar={persian}
              locale={persian_fa}
              format="YYYY/MM/DD"
              maxDate={maxDate}
            />
          </div>
          <span>
            {touch.birthDate && error && (
              <span className={styles.error}>{error.birthDate}</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
