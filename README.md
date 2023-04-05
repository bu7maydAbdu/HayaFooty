# HayaFooty

track your favourite matches , results , scores , stats and leagues
![alt text](public/images/Screenshot%202023-04-05%20134727.jpg)

# Tech stack

Backend:

- Node.js
- mongoose(to connect to the database)
- express as a framework to node js
- passport.js (for user authentiction)
- express-session for user sessions

Frontend:

- ejs(templating language)
- vanilla JS for DOM manipulation
- CSS for styling

# Contribution

First download all the dependencies

```bash
npm install
```

## Development:

set up a (.env) file inside the (config) folder

![alt text](public/images/Screenshot%202023-04-05%20130908.jpg)

set up the database string, API token and baseUrl inside the (.env) string as folows:

```JS
DB_STRING = <the string>
token = <token>
baseUrl = "http://api.football-data.org/v4/competitions"
```

to start the server run the below command:

```bash
npm run dev
```

initialize a default ESlint configuration using the command below:

```bash
npx eslint --lint
```
