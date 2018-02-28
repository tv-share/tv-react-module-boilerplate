# tv-react-module-boilerplate

* [How this repo works](#how-this-repo-works)
* [Component Development](#component-development)
    * [Guidelines](#guidelines)
    * [Tests](#testing)
    * [Docs](#docs)
* [Module Development](#module-development)

## How this repo works
This is a boilerplate project for building React modules and publishing to [npmjs](https://www.npmjs.com).

This boilerplate comes with a develop environment set up with [parceljs](https://parceljs.org/) for fast development and testing.

Here you can find instructions and guidelines for building components for existing modules or to create your new module from scratch.

To start building your module just follow these steps:

```bash
# clone the repo
git clone https://github.com/tv-share/tv-react-module-boilerplate.git <package_name>
cd <package_name>

# install global dependencies
npm install -g parcel-bundler

# install local dependencies
npm install

# start dev server
npm run dev
```

All modules should follow the following the module development guidelines

## Component Development
To start building new components or component improvements for a existing module follow these steps:

```bash
# clone the repo you will be working on
git clone https://github.com/tv-share/<module_name>
cd <module_name>

# install dependencies
npm install -g parcel-bundler
npm install

# start dev server
npm run dev
```

All the coding will be done in the src directory, which has the following structure:

```bash
# | src
#   | lib
#       Example.js
#   | style
#       example.styl
#   index.js
```
The React classes go in the **lib/** directory and the stylus in the **style/**, allways following the file name pattern. Also don't forget to export you react classes in **src/index.js** and you stylus classes in **src/styles/_index.styl**.

Also, for  easier development and usability test, you can edit the **dev/workbench.js** file to render you component and work with its props.

### Guidelines
Remember that all coding must be done following theVelops' [coding guidelines]() present in out handbook.

### Tests
**All new components must come with a test suite to test its main functionalities.**

The testing library we will be using will be [jest](https://facebook.github.io/jest/) and all components must come with at least a [snapshot test](https://facebook.github.io/jest/docs/en/snapshot-testing.html). If you added functions or controllers to handle you component behavior, each of these functions 
must come with the respective unit test.

[Here]() in this boilerplate you can find an example of a snapshot test for our Example.js component.

To run the tests:

```bash
# install dependencies (if not installed already)
npm install

# run test suite
npm run test

# run test updating the snapshots
npm run test:update
```

Always test your code before creating a pull request. Pull requests with failing tests will not be merged.

## Module Development