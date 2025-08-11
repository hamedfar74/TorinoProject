import { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const converteDateToFa = (date) => {
  return new Date(date).toLocaleDateString("fa-IR");
};

const convertVehicle = (vehicles) => {
  switch (vehicles) {
    case "Bus":
      return "اتوبوس";
    case "Van":
      return "ون";
    case "SUV":
      return "خودروی شاسی‌بلند";
    case "Airplane":
      return "پرواز";

    default:
      return "وسیله یافت نشد!";
  }
};

const convertCity = (city) => {
  switch (city) {
    case "Tehran":
      return "تهران";
    case "Sanandaj":
      return "سنندج";
    case "Madrid":
      return "مادرید";
    case "Isfahan":
      return "اصفهان";
    case "sulaymaniyah":
      return "سلیمانیه";
    case "Hewler":
      return "هولر";
    case "Mazandaran":
      return "مازندران";
    case "Italy":
      return "ایتالیا";
    case "offRoad Center":
     return "مرکز آفرود"; 
    default:
      return "شهر یافت نشد!";
  }
};

const extractMonth = (dateString) => {
  const dateObject = new DateObject({
    date: dateString,
    format: "YYYY/MM/DD",
    calendar: persian,
    locale: persian_fa,
  });
  return dateObject.month.name;
};

const DateWithPMonth = (date) => {
  const convertedDate = converteDateToFa(date);
  const month = extractMonth(convertedDate);
  const finalDate = convertedDate.split("/");
  return { year: finalDate[0], month, day: finalDate[2] };
};

const tourDayAndNight = (startDate, endDate) => {
  const startTour = new Date(`${startDate}`);
  const endTour = new Date(`${endDate}`);

  const timeDiff = endTour - startTour;
  const day = 1 * 24 * 60 * 60 * 1000;
  const Days = Math.ceil(timeDiff / day);
  const Nights = Days - 1;
  // console.log(Days, Nights);
  return [Days, Nights];
};

const convertPdateToGregorian = (dateObj) => {
  if (!dateObj || typeof dateObj.toDate !== "function") return;
  const gregorianDate = dateObj?.toDate();
  const year = gregorianDate?.getFullYear();
  const month = String(gregorianDate.getMonth() + 1).padStart(2, "0");
  const day = String(gregorianDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
export {
  converteDateToFa,
  convertVehicle,
  convertCity,
  extractMonth,
  DateWithPMonth,
  tourDayAndNight,
  convertPdateToGregorian,
};
