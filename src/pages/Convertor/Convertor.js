/* eslint-disable no-console */
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
  const [currencyData, setCurrencyData] = useState({
    currency: "",
    baseCurrency: "EUR",
    currencies: [],
    amount: "1.00",
    exchangeRate: 0,
  });

  const fetchData = async () => {
    const userCurrency = await getCountryCurrency();

    const allCurrencies = await getAllCurrencies();

    const apiExchangeRate = await getExchangeRate(
      currencyData.baseCurrency,
      userCurrency,
      date
    );

    if (
      typeof apiExchangeRate === "string" &&
      apiExchangeRate.toLowerCase().includes("error")
    ) {
      toast.error(
        "Currency Error! Please pick another date or another currency!"
      );
    }

    setCurrencyData({
      ...currencyData,
      currency: userCurrency,
      currencies: Object.keys(allCurrencies),
      exchangeRate: apiExchangeRate,
    });
  };

  const switchCurrency = async () => {
    const apiExchangeRate = await getExchangeRate(
      currencyData.currency,
      currencyData.baseCurrency,
      date
    );

    setCurrencyData({
      ...currencyData,
      exchangeRate: apiExchangeRate,
      currency: currencyData.baseCurrency,
      baseCurrency: currencyData.currency,
    });
  };

  const changeBaseCurrency = async (event, value) => {
    const apiExchangeRate = await getExchangeRate(
      value,
      currencyData.currency,
      date
    );
    setCurrencyData({
      ...currencyData,
      exchangeRate: apiExchangeRate,
      baseCurrency: value,
    });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      (currencyData.amount * currencyData.exchangeRate).toFixed(4)
    );
    toast.success("Copied to clipboard!");
  };

  const changeDate = (newDate) => {
    setDate(newDate);
  };

  useEffect(() => {
    fetchData();
  }, [date]);

  if (currencyData.currency === currencyData.baseCurrency) {
    setCurrencyData({
      ...currencyData,
      baseCurrency: "USD",
    });
  }

  return (
    <section className="convertor">
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
              options={currencyData.currencies}
              value={currencyData.baseCurrency}
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
            options={currencyData.currencies}
            value={currencyData.currency}
            fullWidth
            onChange={(event, newValue) => {
              setCurrencyData({
                ...currencyData,
                currency: newValue,
              });
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
            onChange={(event) =>
              setCurrencyData({
                ...currencyData,
                amount: event.target.value,
              })
            }
            label="Amount"
            size="small"
            value={currencyData.amount}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {currencyData.baseCurrency}
                </InputAdornment>
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
            value={(currencyData.amount * currencyData.exchangeRate).toFixed(4)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  {currencyData.currency}
                </InputAdornment>
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
    </section>
  );
};

export default Convertor;
