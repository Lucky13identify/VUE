export const convertDate = (date, month) => {
  const normalizedDate = new Date(date);
  const hours = String(normalizedDate.getHours()).padStart(2, "0");
  const minutes = String(normalizedDate.getMinutes()).padStart(2, "0");
  const day = String(normalizedDate.getDate()).padStart(2, "0");
  const year = String(normalizedDate.getFullYear()).padStart(2, "0");
  return `${hours}:${minutes} - ${day} ${month} ${year}`;
};

export const convertMonth = (date) => {
  const listOfMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const normalizedDate = new Date(date);
  return listOfMonth[normalizedDate.getMonth()];
};
