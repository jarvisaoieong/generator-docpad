
module.exports = (grunt) ->

  grunt.initConfig

    read_components:
      read:
        options:
          concat: true
          files:
            js: 'src/files/scripts/vendor.js'
            css: 'src/files/styles/vendor.css'

  grunt.loadNpmTasks 'grunt-read-components'
