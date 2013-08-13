# generator-docpad

> Yeoman generator for docpad, integrated with headless bower support.

## Getting Started

```
$ npm install -g kinua/generator-docpad
$ mkdir /path/to/your/project
$ cd $_
$ yo docpad
$ grunt
$ docpad run
```

## Documentation
Using awesome [paulmillr/read-components](https://github.com/paulmillr/read-components) to integrate with bower components.

```
$ bower install --save <components you like>
```

You need to set the overrides property in bower.json if the third party bower components dont follow the bower.json convention. Then just run

```
$ grunt
```

Then you can run docpad as usual

```
$ docpad run
```

## Release History
* 2013-08-13      v0.1.0      First release

## License
Copyright (c) 2013 Jarvis A.I.
Licensed under the MIT license.
