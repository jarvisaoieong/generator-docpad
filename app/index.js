'use strict';

var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');

exports = module.exports = function(args, options) {
  yeoman.generators.Base.apply(this, arguments);
  this.basename = path.basename(options.env.cwd);
  this.on('end', function() {
    this.installDependencies({
      skipInstall: options['skip-install']
    });
  });
}

util.inherits(exports, yeoman.generators.Base);

exports.prototype.askFor = function() {
  var done = this.async();
  console.log(this.yeoman);

  this.prompt([
    {
      name: 'name',
      message: 'Project name',
      "default": this.basename
    }, {
      name: 'description',
      message: 'Description',
      "default": ''
    }, {
      name: 'version',
      message: 'Version',
      "default": '0.0.0'
    }, {
      name: 'author',
      message: 'Author',
      "default": this.user.git.username
    }, {
      name: 'email',
      message: 'Email',
      "default": this.user.git.email
    }, {
      name: 'usingGithub',
      message: 'Using GitHub?',
      type: 'confirm',
      "default": true
    }, {
      name: 'githubUser',
      message: 'GitHub user',
      "default": function(answers) {
        var githubUser = this.shell.exec('git config --get github.user', {silent: true}).output.trim();
        return githubUser || answers.author;
      }.bind(this),
      when: function(answers) {
        return answers.usingGithub;
      }
    }, {
      name: 'githubRepo',
      message: 'GitHub repo',
      "default": function(answers) {
        return answers.name;
      }.bind(this),
      when: function(answers) {
        return answers.usingGithub;
      }
    }, {
      name: 'licenses',
      message: 'Licenses',
      type: 'checkbox',
      choices: [{name: 'MIT', checked: true}, 'Apache-2.0', 'MPL-2.0', 'GPL-2.0'],
      "default": 'MIT',
      when: function(answers) {
        return answers.usingGithub;
      }
    }
  ], function(props) {
    this._.extend(this, props);
    done();
  }.bind(this));
};

exports.prototype.copyRootFile = function() {
  this.directory('root', '.');
  this.copy('_README.md', 'README.md');
  this.copy("_package.json", 'package.json');
};

exports.prototype.copyLicenses = function() {
  if (!this.licenses || this._.isEmpty(this.licenses)) {
    return;
  };
  this._.each(this.licenses, function(license) {
    var licenseFile = 'LICENSE-' + license;
    this.copy('licenses/' + licenseFile, licenseFile);
  }.bind(this));
};

exports.prototype.copyDocpadFiles = function() {
  this.copy('_bower.json', 'bower.json');
  this.copy('_docpad.coffee', 'docpad.coffee');
};

