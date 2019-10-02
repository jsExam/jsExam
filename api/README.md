# jsExam API

The API is available under `https://jsexam.herokuapp.com/lectures?id=<lecture id>`

## Quickstart

To run a local webserver with the API you will just have to run the following two commands with your package manager of choice. We prefer [yarn](https://github.com/yarnpkg/yarn).

```bash

$ npm install # OR yarn install `

$ npm run start # OR yarn start

```

Then open your browser at `localhost:3000`

## How does it work?

jsExam is a prettified interface to the `getLectures` `ajax` json interface of jExam, which is accessible under `/de.jexam.web.v4.5/spring/lectures/ajax`. To conform to cross origin policies we will have to tunnel all requests to jExam via a simple API. For this purpose we use the [ExpressJS](https://github.com/expressjs/express) framework for [Node.js](https://nodejs.org/en/). Whenever a client performs a `HTTP GET REQUEST` to the API via `https://jsexam.herokuapp.com/lectures?id=<lecture id>` (make sure the url parameter id is set correctly), we will simply perform a `HTTP POST REQUEST` with `content-type: application/x-www-form-urlencoded` to the json interface of jExam and return the response. Additionally we have set `Access-Control-Allow-Origin: *` in the HTTP Header of the response to make sure the API is accessible from any remote client.

## Deploy

The API is deployed as a [Node.js](https://nodejs.org/en/) App to the Heroku platform. To deploy it we simply run the following:

```bash

$ heroku git:remote -a jsexam

$ git push heroku master

$ heroku ps:scale web=1 # OPTIONAL

$ heroku open

```

You can also start a local Heroku server with the API.
To start a local server simply use the heroku cli with the command:

```bash

$ heroku local web

```

## License

[Apache-2.0](https://github.com/jsExam/jsExam/blob/master/LICENSE)
