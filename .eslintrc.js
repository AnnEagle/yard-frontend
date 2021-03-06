module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  plugins: ['react', 'jsx-a11y', 'import', 'flowtype'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'react/prop-types': 0,
  },
};
