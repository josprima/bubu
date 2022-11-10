module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.ts', '.tsx'],
          alias: {
            '@components': './src/components',
            '@utils': './src/utils',
            '@constants': './src/constants',
            '@pages': './src/pages',
          },
        },
      ],
    ],
  };
};
