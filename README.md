# currency-converter

Basically this application converts crypto currency value into the actual currency as per real time rates. For this we have used `CoinMarketCap`'s public apis.

## Backend

There are 3 endpoints in the node application as mentioned below.

1. `/crypto`: this will fetch top 100 crypto currencies like Bitcoin, Ethereum
2. `/supported`: this will fetch top 100 supported currencies like INR, USD
3. `/conversion`: this will calculate the given amount as per the conversation rate between provided crypto currency and actual currency.

## Frontend

A simple frontend application with basic design. It has a form, user has to fill the details and click on `convert` button. It will call an api and converted amount will be shown below the form.

## To run the code

- We have to run both applications separately
- we have to provide required env variables mentioned in `.env.sample` file
- For both we need to execute: `yarn dev`

## Tech stack

- Typescript
- Node + Express
- React + Vite
