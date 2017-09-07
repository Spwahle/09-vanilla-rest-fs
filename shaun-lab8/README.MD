Shaun Wahle - Lab-11?12???? - Using Express for the power of good

Lab-10

Overview

The purpose of the lab was to make a Create a HTTP Server using the http module that we could GET, POST, PUT, and DELETE a simple resource to. The resources can be accessed by the uuid's and the name, model and year can all be changed.

How To Use
Fork this repository and clone the forked repository anywhere you'd like on your computer.

Open your terminal

Navigate to the folder where you did your git clone with your newly forked repository.
Make sure you are in the root directory IE.
Type npm i into your terminal.
Open two terminal windows.

In the firt terminal type

npm run start:watch
This creates a local server which should log to the console
server up:: 3000
In the second terminal window

brew install httpie
This installs httpie which is a package that allows you to make calls to our local server.
Here are a list of commands you may use to make API calls to this vanilla server.

To add/POST a new toy in the server enter

http POST :3000/api/toy name=barney desc='purple dino'
where you can change what goes in after each equal sign.

To GET/read a toy by it's Id, enter

http GET localhost:3000/api/toy _id='' will return an item from the database.

example. http GET localhost:3000/api/toy _id='ee30e86a-36ee-4843-b47e-a252531bac41'
http POST localhost:3000/api/toy name=name desc=desc will store a new item into the database.

example. http POST localhost:3000/api/toy name=GIJJoe desc=Stormshadow
http PUT localhost:3000/api/toy?_id='someid name=new name desc=new desc' will replace the new information with the ID that was provided.

example. http PUT localhost:3000/api/toy?_id='96d6514b-b1da-4a11-a8a7-b044436a23ab' name=NinjaTurtles desc=Donatello
http DELETE localhost:3000/api/toy?_id='some Id' will return 404.

example. http DELETE localhost:3000/api/toy?_id='ee30e86a-36ee-4843-b47e-a252531bac41'.
Usage
