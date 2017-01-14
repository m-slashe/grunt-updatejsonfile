# grunt-updatejsonfile

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-updatejsonfile --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-updatejsonfile');
```

## The "updatejsonfile" task

### Overview
In your project's Gruntfile, add a section named `updatejsonfile` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  updatejsonfile: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.fields
Type: `Object`

Object with the fields and values that will be override

#### options.createfield
Type: `Boolean`
Default value: `'false'`

A Boolean value that allow this plugin create fields on the file if they doesn't exists

### Usage Examples

#### Default Options
In this example, the file package.json will be update with the options.field values with they are on package.json

```js
grunt.initConfig({
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
    }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
