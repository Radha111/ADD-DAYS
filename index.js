const addDays = require("date-fns/addDays");
const getDateAfterXDays = (days) => {
  const dayset = addDays(new Date(2020, 7, 22), days);
  return `${dayset.getDate()}-${dayset.getMonth() + 1}-${dayset.getFullYear()}`;
};

module.exports = getDateAfterXDays;
