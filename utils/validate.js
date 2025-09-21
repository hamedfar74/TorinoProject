import { e2p } from "./numbers";

export const validate = (data) => {
  const errors = {};
  const nationalRegex = /^[0-9]{10}$/g;
  const emailRegEx = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;

  if (!data.email) {
    errors.email = "ایمیل خود را وارد کنید";
  } else if (!emailRegEx.test(data.email)) {
    errors.email = "ایمیل معتبر نیست";
  } else {
    delete errors.email;
  }

  if (data.fullName.length === 0 ) {
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

export const paymentValidation = (data) => {
  const errors = {};
  const debitCardRegEx = /[2569]{1}[\d]{15}/g;
  const shabaRegEx = /IR[0-9]{24}/g;
  const accountRegEx = /^[0-9]{10,18}$/g;
  
  if (!data.debitCard_code) {
    errors.debitCard_code = "شماره کارت وارد نشده";
  } else if (!debitCardRegEx.test(data.debitCard_code)) {
    errors.debitCard_code = "شماره کارت صحیح نیست";
  } else if (data?.debitCard_code.length > 16){
    errors.debitCard_code = "شماره کارت معتبر نیست";
  } else {
    delete errors.debitCard_code;
  }

  if (!data.shaba_code) {
    errors.shaba_code = "شماره شبا را وارد کنید";
  } else if (!shabaRegEx.test(data.shaba_code)) {
    errors.shaba_code = "شماره شبا صحیح نیست";
  } else {
    delete errors.shaba_code;
  }

  if (!data.accountIdentifier) {
    errors.accountIdentifier = "شماره حساب خود را وارد کنید";
  } else if (data.accountIdentifier.length < 10) {
    errors.accountIdentifier = "شماره حساب صحیح نیست";
  } else if (!accountRegEx.test(data.accountIdentifier)) {
    errors.accountIdentifier = "شماره حساب شما معتبر نیست";
  } else {
    delete errors.accountIdentifier;
  }

  return errors;
};
