const browserify = require('browserify');
const babelify = require('babelify');
const es2015 = require('babel-preset-es2015');
const removeConsole = require('babel-plugin-transform-remove-console');

module.exports = {
  transform({ moduleName, modulePath }, compact = true) {
    return new Promise((resolve, reject) => {
      browserify({ ignoreMissing: true, standalone: moduleName })
        .transform(babelify, {
          global: true,
          presets: [es2015],
          plugins: [removeConsole],
          ast: false,
          babelrc: false,
          compact
        })
        .require(modulePath, { entry: true })
        .bundle((err, buf) => {
          if (err) return reject(err);

          const code = `
        (function () {
          var module = {
            exports: { }
          };
          var exports = module.exports;
          ${buf.toString()}
          return module
        })()`;

          return resolve(code);
        })
        .on('error', err => {
          console.error('Error: ', err.message);
        });
    });
  }
};
