# generator-docpad

> Yeoman generator for docpad, integrated with headless bower support.

## Getting Started

```sh
$ npm install -g kinua/generator-docpad
$ mkdir /path/to/your/project
$ cd $_
$ yo docpad
$ grunt
$ docpad run
```

## Documentation
Using awesome [paulmillr/read-components](https://github.com/paulmillr/read-components) to integrate with bower components.

```sh
$ bower install --save <components you like>
```

You need to set the overrides property in bower.json if the third party bower components dont follow the bower.json convention. Then just run

```sh
$ grunt
```

Then you can run docpad as usual

```sh
$ docpad run
```

## License
Copyright (c) 2013 Jarvis A.I.

Licensed under the MIT license.
