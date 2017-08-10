
const _ = require('lodash');
const gulp = require('gulp');
const gls = require('gulp-live-server');
const del = require('del');
const plugins = require('gulp-load-plugins')();

const eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const ejs = require('gulp-ejs');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

const server = gls('./server/server.js');

const {paths} = require('./gulpConfiguration.js');

gulp.task('server', () => {
  server.start();
});

gulp.task('clean', () => {
  return del([paths.dist]);
});

gulp.task('lint', () => {
  return gulp.src([paths.app + '**/*.{js,jsx}'])
    .pipe(eslint())
    .pipe(eslint.format());
});



var sourcePatterns = {
  htmlFlat: '/*.html' ,
  html: '/**/*.html' ,
  images: '/**/*.{gif,jpg,jpeg,png}',
  fonts: '/**/*.{eot,svg,ttf,woff,woff2}',
  sass: '/**/*.{scss,sass,css}',
  js: '/**/*.{js,jsx}'
};

var taskList = [
  {
    shortName: 'copy-html',
    sourcePattern: ['htmlFlat'], // string, or array of strings
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(plugins.plumber())
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'ejs',
    sourcePattern: ['html'],
    data: { msg: "Hello from Gulp!" }, // for all ejs templates
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(ejs(config.data))
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'images',
    sourcePattern: ['images'],
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(plugins.plumber())
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'fonts',
    sourcePattern: ['fonts'],
    destination: '/fonts',
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(plugins.plumber())
          .pipe(gulp.dest(paths.dist + config.path + config.destination))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'sass',
    sourcePattern: ['sass'],
    destination: '/bundle.css',
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(plugins.plumber())
          .pipe(plugins.concat(config.destination))
          .pipe(plugins.sass({
            outputStyle: 'compressed',
            includePaths: paths.modules
          }))
          .pipe(plugins.autoprefixer())
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'js-babel',
    sourcePattern: ['js'],
    destination: '/bundle.js',
    create: (sources, config) => {
      return () => {
        return gulp.src(sources)
          .pipe(plugins.plumber())
          .pipe(plugins.concat(config.destination))
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(babel({ 
            presets: ['es2015'],
            babelrc: false
          }))
          .pipe(plugins.uglify())
          .pipe(gulp.dest(paths.dist + config.path))
          .pipe(server.notify.apply(server));
      }
    }
  },{
    shortName: 'js-babel-imports',
    sourcePattern: ['js'], // since there are entry points, this is only what to watch
    create: (sources, config) => {
      return () => {
        // default entry point
        var entryPoints = config.entryPoints || [ 'app.js' ]; 
        entryPoints = _.map(entryPoints, (entry) => { return paths.app + config.path +'/'+ entry; });
        _.each(entryPoints, (entry) => {
          const destination = entry.split(config.path +'/')[1]; // get the filename from the full path
          return browserify({
            entries: entry, // full path
            extensions: ['.js','.jsx']
          })
          .transform(babelify, {presets: ['es2015']})
          .bundle()
          .pipe(plugins.plumber())
          .pipe(source(destination)) // just the filename
          .pipe(gulp.dest(paths.dist + config.path)) // just the path
          .pipe(server.notify.apply(server));
        });
      }
    }
  },{
    shortName: 'js-react',
    sourcePattern: ['js'], // since there are entry points, this is only what to watch
    create: (sources, config) => {
      return () => {
        // default entry point
        var entryPoints = config.entryPoints || [ 'app.js' ]; 
        entryPoints = _.map(entryPoints, (entry) => { return paths.app + config.path +'/'+ entry; });
        _.each(entryPoints, (entry) => {
          const destination = entry.split(config.path +'/')[1]; // get the filename from the full path
          return browserify({
            entries: entry, // full path
            extensions: ['.js','.jsx']
          })
          .transform(babelify, {presets: ['es2015', 'react']})
          .bundle()
          .pipe(plugins.plumber())
          .pipe(source(destination)) // just the filename
          .pipe(gulp.dest(paths.dist + config.path)) // just the path
          .pipe(server.notify.apply(server));
        });
      }
    }
  }
];

module.exports = {taskList, sourcePatterns};
