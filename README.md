# Address Book API

A restful API address book aapplication using Node.js, Express and MongoDB

## Features

- ES2017 latest features like Async/Await
- CORS enabled
- Uses [npm](https://www.npmjs.com/)
- Express + MongoDB ([Mongoose](http://mongoosejs.com/))
- Firebase (https://firebase.google.com/docs)
- Load environment variables from .env files with [dotenv](https://www.npmjs.com/package/dotenv)
- Request validation with [joi](https://www.npmjs.com/package/joi)
- Tests with [mocha](https://mochajs.org), [chai](http://chaijs.com)
- Authentication with [jwt](https://www.npmjs.com/package/jsonwebtoken)

## Requirements

- [Node](https://nodejs.org/en/download/current/)
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Getting Started

#### Clone the repo and make it yours:

```bash
git clone https://github.com/kazeem08/strv-addressbook-jimoh-kazeem.git
cd strv-addressbook-jimoh-kazeem
rm -rf .git
```

#### Install dependencies:

```bash
npm install
```

#### Set environment variables:

```bash
cp .env.sample.txt
```

## Running Locally

```bash
npm run dev
```

## Running in Production

```bash
npm start
```

## Test

```bash
# run all tests with Mocha
npm test
```
