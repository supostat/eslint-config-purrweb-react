module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'plugin:react/recommended', 'plugin:prettier/recommended', 'prettier/react'],
  rules: require('./rules'),
};
