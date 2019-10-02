# jsExam API

The API is available under `https://jsexam.herokuapp.com/lectures?id=<lecture id>`

## Usage

Just run the following two commands with your package manager of choice. We prefer [yarn](https://github.com/yarnpkg/yarn).

```bash

$ npm install # OR yarn install

$ npm run start # OR yarn start

```

Then open your browser at `localhost:3000`

## Deploy

```bash

$ heroku git:remote -a jsexam

$ git push heroku master

$ heroku ps:scale web=1

$ heroku open

```

To start a local app using heroku cli use the command:

```bash

$ heroku local web

```

## License

[Apache-2.0](https://github.com/jsExam/jsExam/blob/master/LICENSE)