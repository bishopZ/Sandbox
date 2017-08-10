
# Sandbox

Starter library for Node.js applications on Google Cloud Platform using a special Gulp/Babel build system.


## File Notes

"Procfile" is for Heroku. "app.yaml" is for GCP. All the magic happens in "/server/gulpConfiguration.js"


## Examples

### Example 1 - Simple ES6 build with bundled libraries instead of imports

### Example 2 - Imports ES6 build with support for import statements

### Example 3 - An examples of React, Redux, and React Router v4


## Simple instructions for Heroku

1.  Install [git](https://git-scm.com/).
1.  Install [Heroku Toolbelt](...).
1.  Initialize the Heroku app:

        git init
        heroku create

1.  Install dependencies using NPM:

        npm install

1.  Run the development environment:

        npm run dev

1.  View the app at [http://localhost:8080](http://localhost:8080).
1.  Stop the app by pressing `Ctrl+C`.
1.  Deploy the app:

        git add .
        git commit -m "intial commit"
        git push heroku master

1.  View the deployed app:

        heroku open



## Simple instructions for GCP

1.  Install [Node.js](https://nodejs.org/en/).
1.  Install [git](https://git-scm.com/).
1.  Create a [Google Cloud Platform project](https://console.cloud.google.com).
1.  Install the [Google Cloud SDK](https://cloud.google.com/sdk/).

1.  After downloading the SDK, initialize it:

        gcloud init

1.  Clone the repository:

        git clone https://github.com/...

1.  Change directory:

        cd ...

1.  Install dependencies using NPM:

        npm install

1.  Run the development environment:

        npm run dev

1.  View the app at [http://localhost:8080](http://localhost:8080).
1.  Stop the app by pressing `Ctrl+C`.
1.  Deploy the app:

        gcloud app deploy

1.  View the deployed app at [https://YOUR_PROJECT_ID.appspot.com](https://YOUR_PROJECT_ID.appspot.com).



