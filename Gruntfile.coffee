
module.exports = (grunt) ->

  grunt.initConfig

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
          dot: true
        ]

    watch:
      scripts:
        files: 'src/*/*.coffee'
        tasks: ['coffee']
      template:
        files: 'src/*/templates/**'
        tasks: ['copy']

    clean:
      main:
        src: [
          '*/'
          '!node_modules/'
          '!src/'
        ]

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-clean'

  grunt.registerTask 'build', ['clean', 'coffee', 'copy']
