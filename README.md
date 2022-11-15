
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
2. add the requiered instructions to webpack to know how to address png (svg) files (since webpack 5 no loader is required)
