process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim();

import path from 'path';
import { argv } from 'yargs';

const config = new Map();

// ------------------------------------
// Environment
// ------------------------------------
config.set('env', process.env.NODE_ENV);
config.set('globals', {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.get('env')),
  },
  'NODE_ENV'     : config.get('env'),
  '__DEV__'      : config.get('env') === 'development',
  '__PROD__'     : config.get('env') === 'production',
  '__DEBUG__'    : config.get('env') === 'development' && !argv.no_debug,
  '__DEBUG_NW__' : !!argv.nw,
});

// ------------------------------------
// Project
// ------------------------------------

// project root
config.set('path_project', path.resolve(__dirname, '../../'));

// .client
config.set('dir_src',  path.resolve(__dirname, '../'));

// client
config.set('dir_dist', path.join(__dirname, '../../', 'client'));

// test
config.set('dir_test', path.join(__dirname, '../test'));

// ------------------------------------
// Utilities
// ------------------------------------
const paths = (() => {
  const base = [config.get('path_project')];
  const resolve = path.resolve;

  const project = (...args) => resolve.apply(resolve, [...base, ...args]);

  return {
    project: project,
    src: project.bind(null, config.get('dir_src')),
    dist: project.bind(null, config.get('dir_dist')),
  };
})();

config.set('utils_paths', paths);

config.set('utils_aliases', [
  'actions',
  'components',
  'constants',
  'containers',
  'dispatchers',
  'layouts',
  'models',
  'reducers',
  'routes',
  'services',
  'stores',
  'store',
  'images',
  'styles',
  'utils',
  'views',
].reduce((acc, x) => ((acc[x] = paths.src(x)) && acc), {}));

export default config;
