yeoman = require 'yeoman-generator'
path = require 'path'

exports = module.exports = class Generator extends yeoman.generators.Base

  constructor: (args, options, config) ->
    super
    # @on 'end', ->
    #   @installDependencies skipInstall: options['skip-install']
    #   @pkg = JSON.parse @readFileAsString path.join __dirname, '../package.json'

  askFor: ->
    done = @async()
    console.log @yeoman
    @prompt [
      type: 'confirm'
      name: 'someOption'
      message: 'Would you like to enable this option?'
      default: true
    ],
      (props) =>
        @name = 'jarvis'
        done()

  makeDir: ->
    @mkdir 'src'
    @mkdir 'src/documents'
    @mkdir 'src/files'
    @mkdir 'src/layouts'

  copyfile: ->
    @template '_bower.json', 'bower.json'
    @template '_docpad.coffee', 'docpad.coffee'
    @template '_package.json', 'package.json'
