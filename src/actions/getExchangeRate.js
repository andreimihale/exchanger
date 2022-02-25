import axios from "axios";
import moment from "moment";

const getExchangeRate = async (from, to, date = "latest") => {
  let formatedDate = date;

  if (date !== "latest") {
    formatedDate = moment(date).format("YYYY-MM-DD");
  }

  const { data } = await axios.get(
    `https://api.frankfurter.app/${formatedDate}?from=${from}&to=${to}`
  );
  if (!data) {
    return 404;
  }

  return data.rates[to];
};

export default getExchangeRate;
