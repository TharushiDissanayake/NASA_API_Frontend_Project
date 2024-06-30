# Application Framework Assignment 2 -NASA Open API Project

## Introduction

This is a React application that loads data from NASA's public APIs and displays it to the user. To read the NASA API details, users must first register and then log in using their email and password. There are two separate APIs: "Picture of the Day" and "Mars Rover Photos". To use NASA APIs we want to generate an API KEY using **https://api.nasa.gov/**. This repository contains both the React application and seperate REST API user managment backend.

## Setup Overview

This repository has two main folders:

- Frontend
- Backend

### Frontend

The frontend folder contains the React project. It utilizes the **styled component**, **Bootstrap CSS framework** and the **CSS** for a comprehensive user experience.

### Backend

The backend folder is the backend server for this project. The primary role of this server is to authenticate the user and grant authorization access to visit the site.


## API Reference

#### PICTURE OF THE DAY

```http
  GET https://api.nasa.gov/planetary/apod
```

| Parameter | Type     | Default                | Description |
| :-------- | :------- | :------------------------- | :-----|
| `date` | `YYYY-MM-DD` |  `today` | `The date of the APOD image to retrieve`|
| `start_date` | `YYYY-MM-DD` |  `none` | `The start of a date range, when requesting date for a range of dates. Cannot be used with date.`|
| `end_date` | `YYYY-MM-DD` |  `today` | `The end of the date range, when used with start_date.`|
| `count` | `int` |  `none` | `If this is specified then count randomly chosen images will be returned. Cannot be used with date or start_date and end_date.`|
| `thumbs` | `bool` |  `False` | `Return the URL of video thumbnail. If an APOD is not a video, this parameter is ignored.`|
| `api_key` | `string` |  `DEMO_KEY` | `api.nasa.gov key for expanded usage`|

### Mars Rover Photos

#### Querying by Martian sol

```http
  GET https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
```

| Parameter | Type     | Default                       | Description |
| :-------- | :------- | :-------------------------------- | :-------|
| `sol`      | `int` | `none` | `sol (ranges from 0 to max found in endpoint)` |
| `camera`      | `string` | `all` | `see table above for abbreviations` |
| `page`      | `int` | `1` | `25 items per page returned` |
| `api_key`      | `string` | `DEMO_KEY` | `sol api.nasa.gov key for expanded usage` |



#### Querying by Earth date

```http
  https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY
```

| Parameter | Type     | Default                       | Description |
| :-------- | :------- | :-------------------------------- | :-------|
| `earth_date`      | `YYYY-MM-DD` | `none` | `corresponding date on earth for the given sol` |
| `camera`      | `string` | `all` | `see table above for abbreviations` |
| `page`      | `int` | `1` | `25 items per page returned` |
| `api_key`      | `string` | `DEMO_KEY` | `sol api.nasa.gov key for expanded usage` |



### Run instructions

To run the REST_API backend
```bash
  npm run dev
```

To run the frontend 

```bash
  npm start
```

To run the tests in Frontend

```bash
  npm run test
```

## Acknowledgements

 - [NASA PUBLIC API](https://api.nasa.gov/)


- Visit the Deployed application -  [Astro NASA Project](https://aquamarine-genie-987552.netlify.app/)

- User can register to site and enjoy the experience!