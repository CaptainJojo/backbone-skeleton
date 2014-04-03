Backbone Skeleton RequireJs [![Build Status](https://travis-ci.org/jonathanj33/backbone-skeleton.svg?branch=master)](https://travis-ci.org/jonathanj33/backbone-skeleton) [![Dependency Status](https://david-dm.org/jonathanj33/backbone-skeleton.png)](https://david-dm.org/jonathanj33/backbone-skeleton) [![devDependency Status](https://david-dm.org/jonathanj33/backbone-skeleton/dev-status.png)](https://david-dm.org/jonathanj33/backbone-skeleton#info=devDependencies)
-------------

Complete skeleton of a project using Backbone requireJs and tested via Jasmine Karma. 

The application is a todo list with create, delete.

Techno use:

- Backbone.js http://backbonejs.org/
- Require.js http://requirejs.org/
- Jasmine http://jasmine.github.io/2.0/introduction.html
- Gulp http://gulpjs.com/
- Karma http://karma-runner.github.io/0.12/index.html

Install project in dev environnement:

Launch ```npm install```

Call file ```index.html``` in server

Run tests karma:

Launch ```npm test``` for single-run
For use the watcher launch ```karma start```

See interface test:

Call file ```index_test.html``` in server

Run js lint:

Launch ```gulp js-cs-fixer```

Install project in prod environnement:

Launch ```gulp```
And load file ```index_prod.html```
