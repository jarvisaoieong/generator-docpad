
module.exports = (grunt) ->

  grunt.initConfig

    pkg: grunt.file.readJSON 'package.json'

    coffee:
      compile:
        options:
          bare: true
        files: [
          expand: true
          cwd: 'src'
          src: '*/*.coffee'
          dest: '.'
          ext: '.js'
        ]

    copy:
      main:
        files: [
          expand: true
          cwd: 'src'
          src: '*/templates/**'
          dest: '.'
        ]

    watch:
      scripts:
        files: 'src/*/*.coffee'
        tasks: ['coffee']
      template:
        files: 'src/*/templates/**'
        tasks: ['copy']

    clean: [
      '*/'
      '!node_modules/'
      '!src/'
    ]

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-clean'
