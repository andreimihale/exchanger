import axios from "axios";

const getAllCurrencies = async () => {
  const { data } = await axios.get("https://api.frankfurter.app/currencies");
  return data;
};

export default getAllCurrencies;
