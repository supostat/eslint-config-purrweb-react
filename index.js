module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier', 'prettier/react'].map(require.resolve),
  plugins: ['prettier'].map(require.resolve),
  rules: require('./rules'),
};
