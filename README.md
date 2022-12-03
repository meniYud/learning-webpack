
created gitignore with: build, node_modules

installed react & related type packages:

<code>yarn add react react-dom</code>
<code>yarn add -D typescript @types/react @types/react-dom</code>

created tsconfig with default ts compiler configurations. full list of the options can be found here: https://www.typescriptlang.org/tsconfig
I've chosen the config based on the understanding that I dont need the ts compiler to transpile my code (babel will be in charge of that) but only to "type-check" me.

installed babel transpiler:
<code>yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript</code>
and added babelrc configuration file

installed webpack
<code>yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin</code>
and installed babel loader for webpack:
<code>yarn add -D babel-loader @babel/plugin-transform-runtime</code>

added start script to package.json: <code>webpack serve --config webpack/webpack.config.js --open</code>

at this point, yarn start should run your app successfully!

in order to allow css, we will add style loader to webpack <code>yarn add -D css-loader style-loader</code>, and tell webpack to load css files using this loaders.
in order to allow sass, we will add style loader to webpack <code>yarn add -D sass-loader sass</code>, and tell webpack to load scss files using this loaders.

in order to import png (svg) files we need to:
1. create declarations.d.ts file and declare module '*.png' ('*.svg') (so typescript will be able to find type declaration for png imports)
2. add the required instructions to webpack to know how to address png (svg) files (since webpack 5 no loader is required)

to enable multiple environments we need webpack to separate between the "dev" and the "prod" bundling processes. but in the same time, we dont want to write all the config twice. so we will reuse webpack config between configuration files:
1. <code>yarn add -D webpack-merge</code>
2. create webpack config file for each environment, with its "special" configs (webpack.dev.js, webpack.prod.js etc)
3. create one common file with all the common config (webpack.common.js)
4. create main config file (webpack.config.js) to which your package.json points as the config file, and in which you:
   1.  catch the env variables sent by the package.json command
   2.  load the correct webpack config file spesific for that env
   3.  merge with the common config file
   4.  return webpack conig objecvt consist of the common configs merged with the env-spesific configs
5.  lastly, separate the dev start process from the prod build process.
