## ExChanger

This project is provided as a proof of work.
This repository will contain sketch files, design and prototype of application and the code of the application.

## Availability

This App is publieshed on the cloud and the **demo** can be accessed [here](https://exchanger.eu-gb.cf.appdomain.cloud/ "here")

## Usage

In order to use this project, after you clone it, open the folder and run

**`npm install`**

After everthing got installed you can run this app by running

**`npm run start`**

This app should now run on **port 3000** and can be accessible on

**`localhost:3000`** or over your network on **`http://192.168.100.16:3000`**

## APIs

This project use two APIs that makes it functional.

### IPAPI

[IPAPI](https://ipapi.co/ "IPAPI") is a geo-location service that is used for getting user currency based on the country he is based in.

### Frankfurter

[Frankfuter](https://www.frankfurter.app/ "Frankfuter") is the API that provides us exchange rates. Based on this API we will do the calculation for our ExChange app. This API provides exchange rates since **04 Jan 1999**.
