module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          "root": ["./src"],
          "alias": {
            "@components": "./src/components",
            "@types": "./src/types",
            "@scenes": "./src/scenes",
        }
        }
      ]
    ]
  };
}