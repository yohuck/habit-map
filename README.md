# Habit Stack:fire:

## Description

Habit Stack is an application that aims to help users build habits that stick through repetition and reward.

## Languages & Libraries :books:

- JavaScript
- HTML/CSS
- Node.js
- MySQL & the Sequelize ORM for the database
- Handlebars.js as the template engine
- MVC paradigm folder structure
- Open Source Chart Image API
- Heroku & ClearDB for Deployment
- **npm Dependencies**
  - <ins>bcrypt:</ins> A library to help you hash passwords.
  - <ins>connect-session-sequelize:</ins> A SQL session store using Sequelize.js.
  - <ins>dotenv:</ins> This package is a zero-dependency module that loads environment variables from a .env file into process.env. This will help keep your sensitive info [ie passwords] hidden from open source platforms.
  - <ins>express:</ins> The webserver framework for Node.js
  - <ins>express-handlebars:</ins> A view/template engine for Express.js
  - <ins>express-session:</ins> An HTTP server-side framework used to create and manage a session middleware.
  - <ins>mysql2:</ins> Establishes a connection to the database via Node.js
  - <ins>sequelize:</ins> Establishes communication with a MySQL database.

> _If you want to learn more about any of these npm packages, [click here](https://www.npmjs.com/)._

## Installation:gear:Local Level Usage

To install this application, you will need to clone the repo and run a few commands in the terminal.

1. `npm init` followed by `npm install`
2. Then, install the npm packages: `npm install express mysql2 sequelize dotenv express-session connect-session-sequelize express-handlebars bcrypt `
   - Make sure to fill out the `.env.EXAMPLE` file with your sensetive login credentials, and rename the file to `.env`
3. Next, enter your mySQL db `source schema.sql` from the /db directory.
4. Seed the data by entering `npm run seed`.
5. Lastly, start the server via the root directory by entering `npm run start`.

## Tests:chart_with_upwards_trend:

At this time, no tests have been documented for this application.

## Demos & Mockups:film_projector:

![Demo Gif](/public/screenshot.gif)

## Future Development:seedling:

- Ability to set up daily or weekly SMS:calling: reminders :alarm_clock: via API (ie: Twilio).
- Connect and communicate with other users to send an encouraging:trophy:(or sarcastic:performing_arts:) message.
- Gameify:video_game: with a build-on animation that the user will activate/add:jigsaw: pieces to their end product as entries are marked complete.:framed_picture:

### Contributors:mechanical_arm:

- :octocat: GitHub: [@Eric](https://github.com/yohuck)
- :octocat: GitHub: [@Chris](https://github.com/Vesuro30)
- :octocat: GitHub: [@Mar'Quis](https://github.com/MHubert91)
- :octocat: GitHub: [@Lindsey](https://github.com/lindsey-lansford)

### Heroku Deployment
[Habit Stack](https://habitstack.herokuapp.com/)