# *VanillaJS*
# NOW WITH SAVABILITY

# Server request and response demonstration.
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

## Project Description
Using node.js, HTTP, superagent, cowsay, and querystring I have created a Server that responds to different GET and POST responses from users. This project represents what is possible with a few simple tools. We can create persistence memory through the filesystem feature of node.js which can then be used to simulate a database api for a user or dev.

## Table of Contents
+ [Installation](#installation)
+ [Usage](#Usage)
+ [About](#About)

### Installation:
+ Fork this repository and clone the forked repository anywhere you'd like on your computer.

+ Open your terminal
  + Navigate to the folder where you did your git clone with your newly forked repository.
  + Make sure you are in the root directory IE. lab-gavin.;
  + Type npm i into your terminal.
+ Open two terminal windows.
+ In the first terminal type
  + `npm run start:watch`

  + This creates a local server which should log to the console
    + `server up:: 3000`

+ In the second terminal window
  + `brew install httpie`

  + This installs httpie which is a package that allows you to make calls to our local server.

+ Here are a list of commands you may use to make API calls to this vanilla server.

  ## These are the only variations of this API and endpoints.
  ### Any other requests will come back 404.
  ### Examples of bad endpoints
  `http GET localhost:3000/api/toy/GIJoe`

  `http GET localhost:3000/toy/api/GIJoe`

  `http GET localhost:3000/api/toy/`
  ### GET requests
  + Example.==>`http GET localhost:3000/api/toy?_id=''`
  + Example w/ Mock ID ==> `http GET localhost:3000/api/toy?_id='ee30e86a-36ee-4843-b47e-a252531bac41'`

  ### POST requests
  + Example ==>`http POST localhost:3000/api/toy name=name desc=desc`
  + Example w/ Mock ID ==> `http POST localhost:3000/api/toy name=GIJoe desc='CobraCommander'`

  ### PUT requests
  + Example ==>`http PUT localhost:3000/api/toy?_id='someid name=new name desc=new desc'`
  + Example w/ Mock ID ==> `http PUT localhost:3000/api/toy?_id='96d6514b-b1da-4a11-a8a7-b044436a23ab' name=GI JOE desc=Snakeeyes`

  ### DELETE requests
  + Example`http DELETE localhost:3000/api/toy?_id='some Id'` will return 404.
  + Example w/ Mock ID ==> `http DELETE localhost:3000/api/toy?_id='ee30e86a-36ee-4843-b47e-a252531bac41'`.

### Usage
This app is completely free to be used however you'd like!


### About
I am currently a Full Stack Web Developer with focus in UX. If you are interested in using me for any of your projects please feel free to reach out to me!
