yeoman = require 'yeoman-generator'
path = require 'path'
_ = require 'underscore'

exports = module.exports = class Generator extends yeoman.generators.Base

  constructor: (args, options, config) ->
    super
    @basename = path.basename options.env.cwd
    @on 'end', ->
      @installDependencies skipInstall: options['skip-install']

  askFor: ->
    done = @async()
    console.log @yeoman
    @prompt [
      name: 'name'
      message: 'App name'
      default: @basename
    ,
      name: 'description'
      message: 'Description'
      default: ''
    ,
      name: 'version'
      message: 'Version'
      default: '0.0.0'
    ],
      (props) =>
        _.extend this, props
        done()

  makeDir: ->
    @mkdir 'src'
    @mkdir 'src/documents'
    @mkdir 'src/files'
    @mkdir 'src/layouts'

  copyRootFile: ->
    @template '_bower.json', 'bower.json'
    @template '_docpad.coffee', 'docpad.coffee'
    @template '_package.json', 'package.json'
    @template '_README.md', 'README.md'
    @directory 'root', '.'

  copyDocpadFile: ->
    @template 'layouts/_default.html.eco', 'src/layouts/default.html.eco'
    @copy 'documents/index.html.md', 'src/documents/index.html.md'
