# Habit Stack
---

## Description

Habit Stack is an application that aims to help users build habits that stick through reminder, repetition, and celebration. 

## Languages & Libraries Used
* JavaScript
* HTML/CSS
* Node.js
* MySQL & the Sequelize ORM for the database
* Handlebars.js as the template engine
* MVC paradigm folder structure
* **npm dependencies**
  * <ins>bcrypt:</ins> A library to help you hash passwords.
  * <ins>connect-session-sequelize:</ins> A SQL session store using Sequelize.js.
  * <ins>dotenv:</ins> This package is a zero-dependency module that loads environment variables from a .env file into process.env. This will help keep your sensitive info [ie passwords] hidden from open source platforms.
  * <ins>express:</ins>The webserver framework for Node.js
  * <ins>express-handlebars:</ins> A view/template engine for Express.js
  * <ins>express-session:</ins> An HTTP server-side framework used to create and manage a session middleware. 
  * <ins>mysql2:</ins> Establishes a connection to the database via Node.js
  * <ins>sequelize:</ins> Establishes communication with a MySQL database.

>_If you want to learn more about any of these npm packages, [click here](https://www.npmjs.com/)._
---

## Installation & Usage @ Local Level

To install this application, you will need to clone the repo and run a few commands in the terminal. 

1. ``npm init`` followed by ``npm install``
2. Then, install the npm packages: ``npm install express mysql2 sequelize dotenv express-session connect-session-sequelize express-handlebars bcrypt ``
   * Make sure to fill out the ``.env.EXAMPLE`` file with your sensetive login credentials, and rename the file to ``.env``
3. Next, enter your mySQL db ``source schema.sql`` from the /db directory.
4. Seed the data by entering ``npm run seed``.
5. Lastly, start the server via the root directory by entering ``npm run start``. 

## Tests

At this time, no tests have been documented for this application.

## Demos & Mockups



## Future Development

- Add strategic SMS reminders via API (ie: Twilio)
- Connect with other User accounts to send an encouraging(or sarcastic, users choice) message
- Gameify with a build-on/earn animation series to create a satisfying/motivating aspect.

## Questions

Please reach out with any questions you may have about this application.

* :octocat: GitHub: [@Eric](https://github.com/yohuck)
* :octocat: GitHub: [@Chris](https://github.com/Vesuro30)
* :octocat: GitHub: [@Mar'Quis](https://github.com/MHubert91)
* :octocat: GitHub: [@Lindsey](https://github.com/lindsey-lansford)