/*
 * grunt-updatejsonfile
 * https://github.com/m-slashe/grunt-updatejsonfile
 *
 * Copyright (c) 2017 Murilo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var jsonFormat = require('json-format');

  grunt.registerMultiTask('updatejsonfile', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      createfield: false
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        var jsonFile = grunt.file.readJSON(filepath);
        for(var field in options.fields){
          if(jsonFile[field] || options.createfield)
            jsonFile[field] = options.fields[field];
        }
        grunt.file.write(filepath,jsonFormat(jsonFile));
        grunt.log.writeln('File "' + filepath + '" created.');
      });
    });
  });

};
