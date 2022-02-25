import axios from "axios";

const getCountryCurrency = async () => {
  const { data } = await axios.get("https://ipapi.co/json/");
  return data.currency;
};

export default getCountryCurrency;
