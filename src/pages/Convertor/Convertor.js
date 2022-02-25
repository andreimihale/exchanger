import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateMoment from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Moment from "moment";
import Autocomplete from "@mui/material/Autocomplete";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import toast from "react-hot-toast";
import "./Convertor.scss";
import getCountryCurrency from "../../actions/getCountryCode";
import getAllCurrencies from "../../actions/getAllCurrencies";
import Switcher from "../../static/Ellipse.svg";
import getExchangeRate from "../../actions/getExchangeRate";
import CopyIcon from "../../static/ContentCopy.svg";

const Convertor = () => {
  const [date, setDate] = useState(Moment());
  const [currency, setCurrency] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("EUR");
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState("1.00");
  const [exchangeRate, setExchangeRate] = useState(0);

  const fetchData = async () => {
    const userCurrency = await getCountryCurrency();
    setCurrency(userCurrency);

    const allCurrencies = await getAllCurrencies();
    setCurrencies(Object.keys(allCurrencies));

    const apiExchangeRate = await getExchangeRate(
      baseCurrency,
      userCurrency,
      date
    );

    setExchangeRate(apiExchangeRate);
  };

  const switchCurrency = async () => {
    const apiExchangeRate = await getExchangeRate(currency, baseCurrency, date);
    setExchangeRate(apiExchangeRate);

    const userCurrency = currency;
    setBaseCurrency(null);
    setCurrency(baseCurrency);
    setBaseCurrency(userCurrency);
  };

  const changeBaseCurrency = async (event, value) => {
    const apiExchangeRate = await getExchangeRate(value, currency, date);

    setExchangeRate(apiExchangeRate);
    setBaseCurrency(value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText((amount * exchangeRate).toFixed(2));
    toast.success("Copied to clipboard!");
  };

  const changeDate = (newDate) => {
    setDate(newDate);
  };

  useEffect(() => {
    fetchData();
    setAmount("1.00");
  }, [date]);

  if (currency === baseCurrency) {
    setBaseCurrency("USD");
  }

  return (
    <div className="convertor">
      <div className="convertor-header">
        <h1 className="convertor-header__title">express convertor</h1>
        <h2 className="convertor-header__subtitle">
          <span>Use the conversion rate from</span>
          <div className="convertor-header__subtitle__date-picker">
            <LocalizationProvider dateAdapter={AdapterDateMoment}>
              <DatePicker
                label="Pick Date"
                value={date}
                minDate={Moment("1999-01-04")}
                views={["year", "month", "day"]}
                disableFuture
                onChange={(newDate) => {
                  changeDate(newDate);
                }}
                renderInput={(params) => (
                  // eslint-disable-next-line react/jsx-props-no-spreading
                  <TextField {...params} variant="outlined" size="small" />
                )}
              />
            </LocalizationProvider>
          </div>
        </h2>
      </div>
      <div className="convertor-content">
        <div className="convertor-content__from">
          <span>from</span>
          <div className="convertor-content__from__autocomplete">
            <Autocomplete
              options={currencies}
              value={baseCurrency}
              onChange={(event, value) => {
                changeBaseCurrency(event, value);
              }}
              renderInput={(params) => (
                <TextField {...params} label="Currency" size="small" />
              )}
            />
          </div>
        </div>
        <div className="convertor-content__switch">
          <IconButton onClick={switchCurrency}>
            <img src={Switcher} alt="switcher" />
          </IconButton>
        </div>
        <div className="convertor-content__to">
          <span>to</span>
          <Autocomplete
            className="convertor-content__to__autocomplete"
            options={currencies}
            value={currency}
            fullWidth
            onChange={(event, newValue) => {
              setCurrency(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} label="Currency" size="small" />
            )}
          />
        </div>
        <div className="convertor-content__amount">
          <span>amount</span>
          <TextField
            className="convertor-content__amount__input"
            onChange={(event) => setAmount(event.target.value)}
            label="Amount"
            size="small"
            value={amount}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{baseCurrency}</InputAdornment>
              ),
            }}
          />
        </div>
        <div className="convertor-content__result">
          <span>result</span>
          <TextField
            className="convertor-content__result__input"
            label="Amount"
            size="small"
            disabled
            id="result"
            value={(amount * exchangeRate).toFixed(2)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">{currency}</InputAdornment>
              ),
            }}
          />
          <div className="convertor-content__result__copy">
            <IconButton onClick={copyToClipboard}>
              <img src={CopyIcon} alt="copy button" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convertor;
