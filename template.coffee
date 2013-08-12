
exports.description = 'Create a basic Gruntfile.'

exports.warnOn = '*'

exports.template = (grunt, init, done) ->

  init.process {}, [
    init.prompt 'name'
    init.prompt 'description'
    init.prompt 'version'
    init.prompt 'licenses'
    init.prompt 'main'
    init.prompt 'author_name'
    init.prompt 'author_email'
  ],
    (err, props) ->
      props.devDependencies =
        "grunt": "~0.4.1"
        "grunt-contrib-coffee": "~0.7.0"
        "grunt-contrib-watch": "~0.5.1"

      files = init.filesToCopy props

      init.addLicenseFiles files, props.licenses
      init.copyAndProcess files, props
      init.writePackageJSON 'package.json', props

      done()
