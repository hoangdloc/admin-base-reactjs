module.exports = {
  '!(dist/**/*)*.{[tj]s,[tj]sx,[cm]js}': ['eslint --fix'],
  '!(dist/**/*)*.json': ['prettier --list-different --write'],
  '!(dist/**/*)*.{css,scss}': ['stylelint --fix'],
};
