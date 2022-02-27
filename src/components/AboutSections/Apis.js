import React from "react";
import "./AboutSections.scss";

const APIS = () => (
  <>
    <div>
      This project use two API’S, one for the exchange rate and one for geo
      location.
    </div>
    <div>
      The exchange rate API is provided by Frankfuter and is able to return
      rates for all currencies. The default base is EURO. Also this API is able
      to send rates for a particular currency and for a particular date in past.
      The oldest curremcy rate dates from 4th Jan 1999.
    </div>
    <div>
      Second API is provided by IPAPI. Through this API we can get the
      geolocation of the user and adjust the base and exchange currency for his
      particular region.
    </div>
    <div>Both API’S are free for use without APIKeys</div>
  </>
);

export default APIS;
