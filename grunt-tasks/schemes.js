var _ = require('lodash');
var schemes = require('./moduleA/grunt-less');

var gruntConf = {};

gruntConf.less = {};

gruntConf.less.production = { /* ... */ };

// Add the Less targets from ModuleA
_.extend(gruntConf.less, moduleAless);

module.exports = function(grunt) {
  grunt.initConfig(gruntConf);
};