
const _ = require('lodash');
const gulp = require('gulp');
const sequence = require('run-sequence');

const {paths, builds, pages} = require('./server/gulpConfiguration.js');
const {taskList, sourcePatterns} = require('./server/gulpTasks.js');

const makeTaskLongName = (shortName, page) => { return page.path + ':' + shortName; }
const makePatternPath = (pattern, page) => { return paths.app + page.path + sourcePatterns[pattern]; }


/////////////////////////////////////////////


var fullTaskList = _.map(pages, (page) => {

  page.build.forEach((buildTaskName) => {

    const taskData = _.find(taskList, (task) => { return task.shortName === buildTaskName});

    if (!_.isUndefined(taskData)) {

      // if not an array, make it an array, allowing single answer strings
      if (_.isUndefined(taskData.sourcePattern)) taskData.sourcePattern = [];
      if (_.isString(taskData.sourcePattern)) taskData.sourcePattern = [taskData.sourcePattern];

      // if there are project sources
      var projectSources = _.map(taskData.sourcePattern, (taskSourceName) => {
        if (!_.isUndefined(page[taskSourceName])) {
          return page[taskSourceName];
        }
        return [];
      });

      // reduce to a single array of strings
      projectSources = _.flatten(projectSources);

      // prepend the project path & get source pattern
      const taskSources = _.map(taskData.sourcePattern, (pattern) => { return makePatternPath(pattern, page); });
      
      // prepend the project sources
      const combinedSources = projectSources.concat(taskSources);

      // build a configuration object
      var taskConfig = _.extend({}, page);
      taskConfig.data = _.extend({}, taskData.data || {}, taskConfig.data || {});
      taskConfig.destination = taskData.destination;

      // run the task creation method
      const taskRunner = taskData.create(combinedSources, taskConfig);

      // create the task
      gulp.task(makeTaskLongName(taskData.shortName, page), taskRunner);
     
    }
  });

  // create a map of watch tasks
  var watchTasks = _.map(page.build, (buildTaskName) => {
    gulp.task(makeTaskLongName('watch:' + buildTaskName, page), () => {
      const taskData = _.find(taskList, (task) => { return task.shortName === buildTaskName});
      taskData.sourcePattern.forEach((pattern) => {
        // watch the task
        gulp.watch(makePatternPath(pattern, page), [makeTaskLongName(taskData.shortName, page), 'lint']);
      });        
    });
    return makeTaskLongName('watch:' + buildTaskName, page);
  });
  gulp.task(makeTaskLongName('watch-all', page), watchTasks); 

  // create a combined build map
  const buildMap = _.map(page.build, (itemName) => { return makeTaskLongName(itemName, page); });
  gulp.task(makeTaskLongName('build-all', page), buildMap);

  // return a combined task of the build map and the watch map
  return [ 
    makeTaskLongName('build-all', page),
    makeTaskLongName('watch-all', page) 
  ];

});

// smooth out the full list of tasks
fullTaskList = _.flatten(fullTaskList);

// define the default task
gulp.task('default', ['clean', 'lint', 'server'], (cb) => {
  fullTaskList.push(cb);
  sequence.apply(this, fullTaskList);
});
