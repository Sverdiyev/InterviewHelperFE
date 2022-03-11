This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test-coverage`

Launches the test runner in CI mode with additional verification for code coverage


### `npm run lint`

Launches eslint linter that verifies all code in src directory 

### `npm run lint:fix`

Launches eslint linter that verifies all code in src directory and then tries to fix simple issues.


### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## **Storybook.js**

**`npm install` must be ran before you can continue.**<br/><br/>
To start the app you can run in the project directory:
```bash
npm run storybook
```
or if you have `yarn` installed ([download](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)), you can use:
```bash
yarn storybook
```

Runs storybook locally on port 8080. Your browser will open automatically and display storybook's welcome screen.<br />
It will reload if you make any changes to the code.<br />
The components can be accessed from the menu on the left.

### **Storybook.js components and stories** ([documentation](https://storybook.js.org/docs/react/get-started/introduction))

All storybook stories can be found in "./src/stories/".<br/>
All storybook components by default are located in "./src/app/components/".<br/>
