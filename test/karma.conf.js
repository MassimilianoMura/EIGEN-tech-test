
module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular-google-chart/ng-google-chart.js',
      'public/javascripts/**/*.js',
      'test/**/*.spec.js'
    ],

    exclude: [],

    preprocessors: {},

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false
  });
};