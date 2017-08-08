
// Base paths
const paths = {
  modules: './node_modules/',
  dist: './distribution/',
  app: './application/'
};

// Paths to node modules
const libs = {
  'jquery': paths.modules + 'jquery/dist/jquery.js',
  'bootstrapjs': paths.modules + 'bootstrap/dist/js/bootstrap.js',
  'bootstrapcss': paths.modules + 'bootstrap/dist/css/bootstrap.css',
  'bootstrapfonts': paths.modules + 'bootstrap/fonts/**/*.*',
  'fontawesome': paths.modules + 'font-awesome/fonts/**/*.*'
}

// Each item in the arrays is a base name of a Gulp Task
const builds = {
  html: [ 'copy-html' ],
  simple: [ 'ejs', 'js-babel', 'sass', 'images', 'fonts' ],
  imports: [ 'ejs', 'js-babel-imports', 'sass', 'images', 'fonts' ],
  react: [ 'ejs', 'js-react', 'sass', 'images', 'fonts' ]
};

const pages = [
  {
    path: './',
    build: builds.html
  },{
    path: '1-simple',
    build: builds.simple,
    data: { msg: "Hello from Gulp Config!" }, // for ejs templates
    js: [ libs.jquery, libs.bootstrapjs ], // string, or array of strings
    sass: libs.bootstrapcss, // string, or array of strings
    fonts: [ libs.fontawesome, libs.bootstrapfonts ] // string, or array of strings
  },{
    path: '2-imports',
    build: builds.imports,
    data: { msg: "Hello from Gulp Config!" }, // for ejs templates
    entryPoints: [ 'sources/index.js', 'sources/page1.js' ],
    sass: libs.bootstrapcss
  },{
    path: '3-react',
    build: builds.react,
    data: { msg: "Hello from Gulp Config!" }, // for ejs templates
    entryPoints: [ 'sources/index.js' ],
    sass: libs.bootstrapcss
  }
];

module.exports = { paths, builds, pages };
