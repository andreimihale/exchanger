/* eslint-disable no-console */
import axios from "axios";
import moment from "moment";

const getExchangeRate = async (from, to, date = "latest") => {
  let formatedDate = date;
  let error;
  if (date !== "latest") {
    formatedDate = moment(date).format("YYYY-MM-DD");
  }

  const { data } = await axios
    .get(`https://api.frankfurter.app/${formatedDate}?from=${from}&to=${to}`)
    .catch((err) => {
      error = err.toJSON().name;
      return error;
    });

  if (error) {
    return error;
  }
  return data.rates[to];
};

export default getExchangeRate;
