module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['next/babel'],
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
          },
        },
      ],
    ],
  };
};
