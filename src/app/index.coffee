yeoman = require 'yeoman-generator'
path = require 'path'
_ = require 'underscore'

exports = module.exports = class Generator extends yeoman.generators.Base

  constructor: (args, options, config) ->
    super
    @basename = path.basename options.env.cwd
    # @on 'end', ->
    #   @installDependencies skipInstall: options['skip-install']
    #   @pkg = JSON.parse @readFileAsString path.join __dirname, '../package.json'

  askFor: ->
    done = @async()
    console.log @yeoman
    @prompt [
      name: 'name'
      message: 'What is your app name?'
      default: @basename
    ],
      (props) =>
        _.extend this, props
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
