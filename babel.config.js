module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          'components/*': './components/*',
          'screens/*': './screens/*',
          'redux/*': './redux/*',
          'navigation/*': './navigation/*',
          'layouts/*': './layouts/*',
          'types/*': './types/*',
          'providers/*': './providers/*',
        },
      },
    ],
  ],
};
