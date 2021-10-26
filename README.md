# Weather App
## Cloning the application
```
git clone https://github.com/bharatdev12/weather-app.git
```

```
cd weather-app
```

## Setting up the local environment variables

### Create `.env.local` file at root of folder
```
REACT_APP_API_SECRET_KEY=251964f21a5e93a44d5ae30436d5b93b
```

## Installing Dependencies and Starting dev server
### Install packages
```
yarn
```

### Start App
```
yarn start
```

## Weather App Functionalities
* Home page displays weather report according to the current location.
* On Home page, there is a search box which helps you to search city and according to city you get your weather report.
* View button on Home page redirects you on next page which displays historical information of weather also shows summary in the form of charts and graphs

### Assumptions
* Note: For View Historical page we used dummy data of 7 days due to subscription access control at OpenAPI

## Development System specifications
* OS - `Ubuntu 20.04`
* yarn version - `v1.22.11`
* npm version - `v7.24.1`
* node version - `v14.17.6`