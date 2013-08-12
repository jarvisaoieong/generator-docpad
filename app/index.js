var Generator, exports, path, yeoman,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

yeoman = require('yeoman-generator');

path = require('path');

exports = module.exports = Generator = (function(_super) {
  __extends(Generator, _super);

  function Generator(args, options, config) {
    Generator.__super__.constructor.apply(this, arguments);
  }

  Generator.prototype.askFor = function() {
    var done,
      _this = this;
    done = this.async();
    console.log(this.yeoman);
    return this.prompt([
      {
        type: 'confirm',
        name: 'someOption',
        message: 'Would you like to enable this option?',
        "default": true
      }
    ], function(props) {
      _this.name = 'jarvis';
      return done();
    });
  };

  Generator.prototype.makeDir = function() {
    this.mkdir('src');
    this.mkdir('src/documents');
    this.mkdir('src/files');
    return this.mkdir('src/layouts');
  };

  Generator.prototype.copyfile = function() {
    this.template('_bower.json', 'bower.json');
    this.template('_docpad.coffee', 'docpad.coffee');
    return this.template('_package.json', 'package.json');
  };

  return Generator;

})(yeoman.generators.Base);
