export default {
  presets: [
    ["@babel/preset-env", {
      targets: {
        node: "6.14.2" // version used in SRE
      }
    }],
  ],
  plugins: [
    "babel-plugin-transform-import-meta"
  ],
  ignore: [
    "./lib",
    // also ignore babel config file
    /babel.config.*/,
    // include lowdb in babel transpilation so we can make it work with node v6
    /[\\/]node_modules[\\/](?!(lowdb))/,
  ],
};
