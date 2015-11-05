process.env.NODE_ENV = (process.env.NODE_ENV || 'development').trim();

import path from 'path';

const config = new Map();

// ------------------------------------
// Environment
// ------------------------------------
config.set('globals', {
  'process.env': {
    NODE_ENV: JSON.stringify(config.get('env')),
  },
  NODE_ENV: config.get('env'),
  __DEV__: config.get('env') === 'development',
  __PROD__: config.get('env') === 'production',
});

// ------------------------------------
// Project
// ------------------------------------
config.set('path_project', path.resolve(__dirname, '../../'));
config.set('dir_src',  '');
config.set('dir_dist', path.join(__dirname, '..', 'client'));

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

export default config;
