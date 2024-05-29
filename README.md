#Project setup
we started the project by using express generator to generate the project application easily. we run the command npx-express-generator --pug--git sca_projects. i ran the npm install command to install all my packages and created my config, controller, errors, middlewares, routes and service folders.
The config folder conatains two file logger.js and database.js
logger.js logs saves my daily log
database.js handles my database connection

The controller folder contain a file called postControllers.js- it handles all the request and response
The services folder contain a file called postServices.js - it handles the business logic
The error folder contain a file that handles errors
I created a gitignore file to ensure that certain file are not tracked by git
The router folder has a file that handles the routes
