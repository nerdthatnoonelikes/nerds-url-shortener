# nerds-url-shortener

An open source URL shortener with the MERN stack

Live Example: `http://skynode.me:8080`
then after hitting create and recieving the short code visit `http://skynode.me/<code given here>` and you will be redirected!


<img src="/short.png" />

## Setup

Requirements

- MongoDB
- Node.js v14 >=

1. Clone the repo

```bash
$ git clone https://github.com/nerdthatnoonelikes/nerds-url-shortener
```

2. Install dependencies

```bash
$ cd nerds-url-shortener/client
$ yarn

$ cd nerds-url-shortener/server
$ yarn

```

3. Add the .env file

```bash
$ vim nerds-url-shortener/server/.env
# Example .env
# PORT=3001
# MONGO=mongodb://someconnectionurl
```

4. Add the config.json file

```bash
$ vim nerds-url-shortener/client/src/config.json
# Example config.json
# {
#  "api": "http://myapiurl"
# }
```

5. Start the server and the react app

```bash
# install pm2, (npm i -g pm2)
# install server, (npm i -g serve)
$ cd nerds-url-shortener/client
$ npm run build

$ pm2 start serve nerds-url-shortener/client/build

$ pm2 start nerds-url-shortener/server/src/app

```
