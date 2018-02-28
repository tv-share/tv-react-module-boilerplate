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

## Component Development
To start building new components or component improvements for a existing module follow these steps:

```bash
# clone the repo you will be working on
git clone https://github.com/tv-share/<module_name>.git
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
The React classes go in the **lib/** directory and the stylus in the **style/**, allways following the file name pattern. Also don't forget to export you react classes in **src/index.js** and your stylus classes in **src/styles/_index.styl**.

Also, for  easier development and usability test, you can edit the **dev/workbench.js** file to render you component and work with its props.

### Guidelines
Remember that all coding must be done following theVelops' [coding guidelines]() present in out handbook.

### Tests
**All new components must come with a test suite to test its main functionalities.**

The testing library we will be using will be [jest](https://facebook.github.io/jest/) and all components must come with at least a [snapshot test](https://facebook.github.io/jest/docs/en/snapshot-testing.html). If you added functions or controllers to handle you component behavior, each of these functions 
must come with the respective unit test.

#### jest TL;DR
When running a snapshot test, the first time you run it, jest will create a .snap file in the test/\_\_snapshots\_\_ directory that represent the snapshot of that component. It's yout job as a developer to evaluate if the snapshot created makes sense. 

e.g.: Take this bugged stateless component Example.js:
```javascript
const Example = (props) => {
	const { className, label, onClick } = props;

	return (
		<button className={`example${className ? className : ""}`} onClick={onClick}>
			{label || ""}
		</button>
	);
};
```
When running the snapshot test the first time, it will always pass, since there is no previous snapshot to compare:
```bash
> jest tests/

 PASS  tests/Example.test.js
  ✓ renders correctely (15ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 passed, 1 total
Time:        0.893s, estimated 1s
Ran all test suites matching /tests\//i.
```



[Here](./tests/Example.test.js.snap) in this boilerplate you can find an example of a snapshot test for our Example.js component.

To run the tests:

```bash
# install dependencies (if not installed already)
npm install

# run test suite
npm test

# run test updating the snapshots
npm run test:update
```

Always test your code before creating a pull request. Pull requests with failing tests will not be merged.

## Module Development