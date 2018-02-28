# Component Development

* [Guidelines](#guidelines)
* [Tests](#tests)
* [Docs](#docs)

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

## Guidelines
Remember that all coding must be done following theVelops' [coding guidelines]() present in out handbook.

## Tests
All new components must come with a test suite to test its main functionalities.

The testing library we will be using will be [jest](https://facebook.github.io/jest/) and all components must come with at least a [snapshot test](https://facebook.github.io/jest/docs/en/snapshot-testing.html). If you added functions or controllers to handle you component behavior, each of these functions 
must come with the respective unit test.

To run the tests:

```bash
# install dependencies (if not installed already)
npm install

# run test suite
npm test

# run test updating the snapshots
npm run test:update
```

**Always test your code before creating a pull request. Pull requests without tests or with failing tests will not be merged.**

### jest TL;DR version
When running a snapshot test, the first time you run it, jest will create a .snap file in the **tests/\_\_snapshots\_\_** directory that represents the snapshot of that component. It's yout job as a developer to evaluate if the snapshot created makes sense. 

e.g.: Take this bugged stateless component Example.js and its test:
```javascript
// Example.js
const Example = (props) => {
	const { className, label, onClick } = props;

	return (
		<button className={`example${className ? className : ""}`} onClick={onClick}>
			{label || ""}
		</button>
	);
};

// Example.test.js
it('renders correctely', () => {
    const component = renderer.create(
        <Example
            label="Example"
            className="example-btn"
            onClick={() => {})}
        />
    );
    
    expect(component.toJSON()).toMatchSnapshot();
});
```
When running the snapshot test the first time, it will always pass, since there is no previous snapshot to compare:
```bash
> npm test

 PASS  tests/Example.test.js
  ✓ renders correctely (15ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 passed, 1 total
Time:        0.893s, estimated 1s
Ran all test suites matching /tests\//i.
```
Now let's take a loot at the generated **Example.test.js.snap**:
```javascript
exports[`renders correctely 1`] = `
<button
  className="examplemy-class-name"
  onClick={[Function]}
>
  Label
</button>
`;
```
One can take a look at this and already see the error. There was a spacing missing in the `className` prop. So it's your job to go and fix the bug. Running `npm test` again we get:
```bash
 FAIL  tests/Example.test.js
  ✕ renders correctely (22ms)

  ● renders correctely

    expect(value).toMatchSnapshot()

    Received value does not match stored snapshot 1.

    - Snapshot
    + Received

      <button
    -   className="examplemy-class-name"
    +   className="example my-class-name"
        onClick={[Function]}
      >
        Label
      </button>
```
As expected, it fails. That's because now our component doesn't match our snapshot anymore. We have to update the snapshot to match our new working component. To do that simply run:

```
> npm run test:update

 PASS  tests/Example.test.js
  ✓ renders correctely (12ms)

 › 1 snapshot updated.
Snapshot Summary
 › 1 snapshot updated in 1 test suite.

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 updated, 1 total
Time:        0.908s, estimated 1s
Ran all test suites matching /tests\//i.
```
And that's it. Our snapshot have been updated and now we have the snapshot of the working component. You might want to take a look one more time at **Example.test.js.snap** file created to see if everything looks fine.
```javascript
exports[`renders correctely 1`] = `
<button
  className="example my-class-name"
  onClick={[Function]}
>
  Label
</button>
`;
```
Now that looks right!

Just one **point of attention** when updating snapshots, a jest documentation puts it:
>This _[jest tests/ --updateSnapshot]_ will re-generate snapshot artifacts for all failing snapshot tests. **If we had any additional failing snapshot tests due to an unintentional bug, we would need to fix the bug before re-generating snapshots to avoid recording snapshots of the buggy behavior**.


[Here](./tests/) in this boilerplate you can find the full example of the snapshot test used in this guide.

## Docs
All new components must come with a well written documentation on how to use its features.

All documentation must be written in the README.md file of the module, under the section **Docs**. You should use the [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) pattern. Also, don't forget to include you component in the module's README.md index.

These are all the information you should include in your docs:


- Component Name

_short description_

**Field** | **Type** | **Description**
--- | :---: | ---
<field_name> | <field_type> | <short_description>

Note that _Description_ is required only for non-trivial props, expect for required fields. Required field must always come at least with a _required_ flag in the description. Also, the list must be ordered alphabetically with required fields first.

Here is a example from the Example component in this boilerplate:

- Example

_A simple example button._

**Field** | **Type** | **Description**
--- | :---: | ---
label | string or node | (required)
className | string | 
onClick | func | An example description for a non-trivial prop