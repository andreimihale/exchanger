import React from "react";
import "./AboutSections.scss";

const Project = () => (
  <>
    <div>
      This project is a currency convertor based on the Frankfurter API.
    </div>
    <div>
      Exchange references rates are published by the European Central Bank. The
      data refreshes around 16:00 CET every working day.
    </div>
    <div>
      Most rated future of this application is the historical returning rates
      for any working day since 4 January 1999.
    </div>
    <div>
      The currency converter tooks EURO as refferences and add to the conversion
      currency the local currency of the user.
    </div>
    <div>
      If the local currency of the user is EURO, then this application will do
      as reference USD.
    </div>
  </>
);

export default Project;
