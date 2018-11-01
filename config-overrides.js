const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config
  );

  config = injectBabelPlugin(
    [
      'root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src'
      }
    ],
    config
  );

  config = rewireLess.withLoaderOptions({
    modifyVars: {},
    javascriptEnabled: true
  })(config, env);

  return config;
};
