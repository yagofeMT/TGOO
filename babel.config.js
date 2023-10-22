module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./src'],
            alias: {
              '@components': './src/components',
              '@assets': './src/assets',
              '@routes': './src/routes',
              '@pages': './src/pages',
              '@theme': './src/theme',
              '@services': './src/services',
              '@hooks': './src/hooks',
              '@databases': './src/databases',
              '@constants': './src/constants'
            }
          }
        ],
        ['react-native-reanimated/plugin'],
      ]
    };
  };