# tv-react-module-boilerplate

* [How this repo works](#how-this-repo-works)
* [Development](#development)

## How this repo works
This is a boilerplate project for building React modules and publishing to [npmjs](https://www.npmjs.com).

This boilerplate comes with a develop environment set up with [parceljs](https://parceljs.org/) for fast development and testing.

To start building your module just follow these steps:

```bash
# clone the repo
git clone https://github.com/tv-share/tv-react-module-boilerplate.git <package_name>
cd <package_name>

# install global dependencies
npm install -g parcel-bundler nodemon

# install local dependencies
npm install

# start dev server
npm run dev
```

All modules should follow the following the module development guidelines

## Development
The project has the following structure:

```bash
# | src
#   | lib
#       Example.js
#   | style
#       example.styl
#   index.js
```
The React classes go in the **lib/** directory and the stylus in the **style/**, allways following the file name pattern. All React class must also be exported in **src/index.js**.

Also, for usability test, you can edit the **dev/workbench.js** file to pass props to your component and test its behavior.