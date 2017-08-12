
# Sandbox

Starter library for Node.js applications using a special Gulp/Babel build system.


## Actively Seeking Beta Tester and Contributors

Try it out and let us know where you run into confusion or problems. Contribute to the Issues page, or hit us up to become a code contributor. There are many small improvements you could make that would get your name added to the project!


## File Notes

There are a number of configutation files in the root director.

- `package.json` is the main configuration file
- `Procfile` sets the Heroku startup script
- `app.yaml` configures a basic GCP deploy
- `gulpfile.js` is the "special" Gulp build system
- `.eslintrc` confifures what ESLint reports on

The build system is divided into an `application` folder for all your development files, and a `distribution` folder that gets deleted and rebuilt every time you run the development environment.

There is also a `server` folder which holds files for the gulp configuration and Node.js server. All the magic happens in the `/server/gulpConfiguration.js` file.


## Running the Development Environment

Two npm commands are available `npm run dev` will run the development environment, or `npm start` to run the server environment. On your local machine, both will bind to port 8080. This can be changed in the `server/server.js` file.

You must run the development environment to create the distribution files prior to deploying. The application does not build the distribution files on server startup. This creates an extra deploy step, but significantly reduces the servercode footprint.

### Gulp and Webpack

With this build system we opted to use Gulp instead of Webpack. [Technically, they do different things](https://stackoverflow.com/questions/33561272/task-runners-gulp-grunt-etc-and-bundlers-webpack-browserify-why-use-toge). Gulp is a task runner that can run multiple build systems such as Babel, Webpack and Browserify. This starter package does not yet include an example of running Webpack with Gulp, but there are [plenty of those available elsewhere](https://webpack.github.io/docs/usage-with-gulp.html).

We like Webpack, but it can be very restrictive and the documentation is [frequently out of date](https://stackoverflow.com/questions/38709525/webpack-imports-loader-not-working-cannot-find-module). Gulp also comes with some disadvantages. At this point in development, the included Gulp environment will frequently stop running and need to be restarted. Also, becuase of the way the `watch` tasks are setup, the development environment needs to be restarted whenever a new file is added to the application.

In future versions we hope to combine the best of both the Webpack and Gulp worlds.


## Example Projects

Three example projects are included. Project 1 is set as the default project that is shown when the site's root directory is requested (http://localhost:8080/). This can be changed in the `/server/server.js` file.

Each example has a corrisponding object in the `server/gulpConfiguration.js` file. To create a new project folder, create the folder in the `application` folder add a build task to this `gulpConfiguration.js`.

### Example 1: Simple ES6 with EJS and Sass

ES6 build with Babel, which does not support `import` statements. Indead librariesare bundled in with Gulp.

### Example 2: ES6 with Imports

Full ES6 build with support for import statements.

### Example 3: React

An examples of React, Redux, and React Router v4.



## Deploy to Google Cloud Platform

1.  Install [Node.js](https://nodejs.org/en/).
1.  Install [git](https://git-scm.com/).
1.  Create a [Google Cloud Platform project](https://console.cloud.google.com).
1.  Install the [Google Cloud SDK](https://cloud.google.com/sdk/).

1.  After downloading the SDK, initialize it:

        gcloud init
        git clone https://github.com/...
        cd ...
        npm install
        npm run dev

1.  View the app at [http://localhost:8080](http://localhost:8080).
1.  Stop the app by pressing `Ctrl+C`.
1.  Deploy the app:

        gcloud app deploy

1.  View the deployed app at [https://YOUR_PROJECT_ID.appspot.com](https://YOUR_PROJECT_ID.appspot.com).



## Deploy to Heroku

1.  Install [git](https://git-scm.com/).
1.  Install [Heroku Toolbelt](...).
1.  Initialize the Heroku app:

        git init
        heroku create
        npm install
        npm run dev

1.  View the app at [http://localhost:8080](http://localhost:8080).
1.  Stop the app by pressing `Ctrl+C`.
1.  Deploy the app:

        git add .
        git commit -m "intial commit"
        git push heroku master

1.  View the deployed app:

        heroku open




## Contributors

- Bishop Zareh http://bishopz.com



