### Guide

- preferably use `node 6.x`, other versions may work too
- you're gonna need `yarn`, install : `npm install yarn -g`
- install dependencies : `yarn install`
- start dev server: `yarn run dev` then open `http://localhost:2992/`
- for development build: `yarn run build-dev`
- when you feel you're done, test it on production build, to check if everything is ok: `yarn run build`

### Directory layout

    ├── build              # build stats
    ├── public             # public folder (webroot for dev server)
    │   ├── _assets        # build results - assets packed by webpack
    │   ├── mocks          # mock datamodels, records, etc.
    │   └── index.html     # one of app entry points, for dev server
    └── src                # app sources
        ├── demo           # one of app modules
        ├── services       # services you should use live here
        │   └── datamodel  # have a look to see what services you have available
        ├── index.js       # app entry moduleya
        └── index.scss     # some styling






## Useful Links

[Angular Guide](https://docs.angularjs.org/guide)

At first be sure that you are familiar with ES2015, some useful materials:

 - [tutorial from BabelJS](http://babeljs.io/docs/learn-es2015/)
 - [Exploring ES6: Upgrade to the next version of JavaScript by Dr. Axel Rauschmayer](http://exploringjs.com/)
  
Read [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) - it is important to know, what is good and what is not, and why.

At least briefly read [webpack documentation](http://webpack.github.io/docs/) it is crucial to understand how it works in general. 

---

### Styleguide

Except my notes below(which can be incomplete and outdated), I highly encourage you to check out:

- [Angular Style Guide, by John Papa](https://github.com/johnpapa/angular-styleguide)
- [Angular 1.x styleguide, by Todd Motto](https://github.com/toddmotto/angular-styleguide)

---

### Angular specific conventions

Application organisation rules:

1. Split app into angular "modules" 
    - every module should have own folder, and should be defined in one file which will require all module components and will export module name 
    - module can have nested modules
    - module can require other modules which are direct siblings of it or parent modules, or modules nested in it (if you need to require module that is nested in "sibling" - you you should move it up by hierarchy before requiring it)
2. Keep modules small - if module is too big, maybe it should be few modules 
3. Every file should have only one entity inside it, for example if there is directive which has controller and template - there should be three files   
4. Group related resources by folders
5. Name files with suffixes `Directive`, `Controller`, `Factory`, `Service`, `Provider`

### Directives

1. Prefer to use isolated scopes
2. Use controllerAs syntax 
3. Controller should act as ViewModel, use $scope only if you need it
4. All model layer (data fetching, business logic) should be in services
