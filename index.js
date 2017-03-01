const workshopper = require('workshopper-adventure');
const path = require('path');

const learnyouhtml = workshopper({
  appDir: __dirname,
  languages: ['en', 'zh-cn'],
  header: require('workshopper-adventure/default/header'),
  footer: [{
    file: path.join(__dirname, 'i18n', 'footer', '{lang}.md'),
  }],
});

learnyouhtml.addAll([
  'HELLO WORLD',
]);

module.exports = learnyouhtml;
