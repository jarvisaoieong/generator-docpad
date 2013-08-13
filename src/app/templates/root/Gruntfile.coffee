
module.exports = (grunt) ->

  grunt.initConfig

    read_components:
      js:
        options:
          concat: true
          regex: /\.js$/
          dest: 'src/files/scripts/vendor.js'
          seperator: ';'
      css:
        options:
          concat: true
          regex: /\.css$/
          dest: 'src/files/styles/vendor.css'

  grunt.loadNpmTasks 'grunt-read-components'

  grunt.registerTask 'default', ['read_components']
