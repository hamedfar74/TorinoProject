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

export { converteDateToFa, convertVehicle };
