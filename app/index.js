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
      message: 'App name',
      "default": this.basename
    }, {
      name: 'description',
      message: 'Description',
      "default": ''
    }, {
      name: 'version',
      message: 'Version',
      "default": '0.0.0'
    }
  ], function(props) {
    this._.extend(this, props);
    done();
  }.bind(this));
};

exports.prototype.copyRootFile = function() {
  this.directory('root', '.');
};

exports.prototype.parseFile = function() {
  this.template('_bower.json', 'bower.json');
  this.template('_docpad.coffee', 'docpad.coffee');
  this.template('_package.json', 'package.json');
  this.template('_README.md', 'README.md');
};
