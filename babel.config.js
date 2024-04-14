module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Required for expo-router
      'expo-router/babel',
      "nativewind/babel",
      'react-native-reanimated/plugin',
      ["module:react-native-dotenv", {
        moduleName: '@env',
        path: '.env',
      }]
    ],
  };
};
