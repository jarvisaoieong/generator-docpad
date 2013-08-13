var Generator, exports, path, yeoman, _,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

yeoman = require('yeoman-generator');

path = require('path');

_ = require('underscore');

exports = module.exports = Generator = (function(_super) {
  __extends(Generator, _super);

  function Generator(args, options, config) {
    Generator.__super__.constructor.apply(this, arguments);
    this.basename = path.basename(options.env.cwd);
    this.on('end', function() {
      return this.installDependencies({
        skipInstall: options['skip-install']
      });
    });
  }

  Generator.prototype.askFor = function() {
    var done,
      _this = this;
    done = this.async();
    console.log(this.yeoman);
    return this.prompt([
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
      _.extend(_this, props);
      return done();
    });
  };

  Generator.prototype.makeDir = function() {
    this.mkdir('src');
    this.mkdir('src/documents');
    this.mkdir('src/files');
    return this.mkdir('src/layouts');
  };

  Generator.prototype.copyRootFile = function() {
    this.template('_bower.json', 'bower.json');
    this.template('_docpad.coffee', 'docpad.coffee');
    this.template('_package.json', 'package.json');
    this.template('_README.md', 'README.md');
    return this.directory('root', '.');
  };

  Generator.prototype.copyDocpadFile = function() {
    this.template('layouts/_default.html.eco', 'src/layouts/default.html.eco');
    return this.copy('documents/index.html.md', 'src/documents/index.html.md');
  };

  return Generator;

})(yeoman.generators.Base);
