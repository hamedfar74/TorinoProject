import { e2p } from "./numbers";

export const validate = (data) => {
  const errors = {};
  const nationalRegex = /^[0-9]{10}$/g;

  if (!data.fullName) {
    errors.fullName = "نام و نام خانوادگی الزامیست";
  } else if (data.fullName?.trim().length < 4) {
    errors.fullName = "نام یا نام خانوادگی معتبر نیست";
  } else if (data.fullName?.split(" ").length < 2) {
    errors.fullName = "نام خانوادگی را وارد کنید";
  } else if (data.fullName?.split(" ")[1].length < 3) {
    errors.fullName = "نام خانوادگی معتبر نیست";
  } else {
    delete errors.fullName;
  }

  if (!data.nationalCode) {
    errors.nationalCode = "وارد کردن کد ملی الزامیست";
  } else if (!nationalRegex.test(data.nationalCode)) {
    errors.nationalCode = "کد ملی وارد شده صحیح نیست";
  } else {
    delete errors.nationalCode;
  }

  if (!data.gender) {
    errors.gender = "جنسیت خود را انتخاب کنید";
  } else {
    delete errors.gender;
  }

  if (!data.birthDate) {
    errors.birthDate = `تاریخ تولد خود را انتخاب کنید(بیشتر از ${e2p(
      15
    )} سال) `;
  } else {
    delete errors.birthDate;
  }

  return errors;
};
