// Karma configuration
// Generated on Thu Jul 26 2012 14:35:23 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
      'test/test-main.js',
      'lib/tests/mock-ajax.js',
      'lib/jquery/jquery.min.js',

      // all the sources, tests
      {pattern: 'src/**/*.js', included: false},
      {pattern: 'test/**/*.js', included: false},
      {pattern: 'lib/**/*.js', included: false},
      {pattern: 'templates/**/*.html', included: false}
    ],
    // test results reporter to use
    // possible values: dots || progress
    reporters: ['dots', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari
    // - PhantomJS
    browsers: ['PhantomJS'],

    preprocessors: {
        'src/models/*.js': ['coverage'],
        'src/views/*.js': ['coverage'] },
    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    plugins: [
      'karma-requirejs',
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-coverage'
    ],
  });
};