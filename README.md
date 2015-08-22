# Basic-Angular-NodeJS-App
A basic skeleton for an angular app and a basic NodeJS API server

## Angular

### Installation

#### Dependencies

##### bower
```
npm install -g bower
```

##### grunt
```
npm install -g grunt
npm install -g grunt-cli
```

##### Sass

It requires Ruby
```
gem install sass
```

#### Run

Go to the `client` folder and un the following

##### Install Modules
```
npm install
bower install
```

##### Start

```
grunt
```

You can now access to the appcation: [http://localhost:8000/src/](http://localhost:8000/src/)

#### Build

Build the application for procuction


##### Build the project
```
grunt build
```
##### Run the local server

```
grunt server
```

You can test the built application: [http://localhost:8000/build/](http://localhost:8000/build/)

## NodeJS

### Installation

#### Dependencies

##### node

Install node from their [website](https://nodejs.org/)

##### Install Modules

Go to the `server` folder

```
npm install
```

##### Run

Go to `server/app` and execute

```
node app.js
```
