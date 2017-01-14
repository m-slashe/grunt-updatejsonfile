/*
 * grunt-updatejsonfile
 * https://github.com/m-slashe/grunt-updatejsonfile
 *
 * Copyright (c) 2017 Murilo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    clean: {
      tests: ['tmp']
    },
    updatejsonfile: {
      options: {
        fields: {
          version: "2.0.5",
          description: "This plugin update values on json files"
        }
      },
      files: {
        src: ['package.json']
      }
    },
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  grunt.loadTasks('tasks');

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['clean', 'updatejsonfile', 'nodeunit']);

  grunt.registerTask('default', ['test']);

};
