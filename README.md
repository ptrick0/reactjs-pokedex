# Pokédex created with ReactJS

The Pokédex is an electronic device created and designed to catalog and provide information regarding the various species of Pokémon. Based on this, I was created a web version to simulate this device with all pokémons. In addiction, I had an idea to create the famous game "Who's that pokémon?".

This project calls [PokeAPI](https://pokeapi.co) with axios request, react styled-components, css animations and transitions.

Check it out [here](https://ptrick0.github.io/reactjs-pokedex)

![image](https://user-images.githubusercontent.com/33580921/174077085-d8ac3216-893d-4427-81ed-ca52b884ef04.png)

## "Who's that pokémon?" Game

The game is based on Pokémon TV show break game. To play, click on blue play button on top-left of the screen, wait for loading and select an option.
If the answer is correct:

![image](https://user-images.githubusercontent.com/33580921/174075078-f130a095-0ec5-4164-b33d-e6fdf8dd87fb.png)
and after, a new pokémon is loaded.

If the answer is wrong:

![image](https://user-images.githubusercontent.com/33580921/174075335-900ff1de-2c1f-481a-9735-ad3c01972e1f.png)
and after, waits for a new answer until correct.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run deploy`

Runs gh-pages build and deploy to serve app on github pages.
To do that, is necessary to add basename on Router, like that:
<Router basename='/reactjs-pokedex'>

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
