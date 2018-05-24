// const monorepoDefinitions = {
//  'prefix': [
//    'prefix-full-name',
//    'prefix-full-other'
//  ]
// }

const monorepoDefinitions = {
  'angular': [
    '@angular/core',
    '@angular/router',
    '@angular/common',
    '@angular/compiler',
    '@angular/cli',
    '@angular/platform-server',
    '@angular/upgrade',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/service-worker',
    '@angular/http',
    '@angular/platform-browser-dynamic',
    '@angular/animations',
    '@angular/elements',
    '@angular/platform-webworker',
    '@angular/platform-webworker-dynamic',
    '@angular/bazel',
    '@angular/language-service',
  ],
  'angular2': [
    '@angular/material',
    '@angular/cdk',
    '@angular/material-experimental',
    '@angular/cdk-experimental',
    '@angular/material-moment-adapter'
  ],
  'babel-6.13.0': [
    // published 2 years ago
    // 'babel-plugin-syntax-async-functions',
    // 'babel-plugin-syntax-object-rest-spread',
    // 'babel-plugin-syntax-class-properties',
    // 'babel-plugin-syntax-decorators',
    // 'babel-plugin-syntax-exponentiation-operator',
    // 'babel-plugin-syntax-async-generators',
    // 'babel-plugin-syntax-do-expressions',
    // 'babel-plugin-syntax-function-bind',
  ],
  'babel-6.18.0': [
    // published 2 years ago
    // 'babel-plugin-syntax-flow',
    // 'babel-plugin-syntax-jsx',
    // 'babel-plugin-syntax-dynamic-import',
    // 'babel-plugin-syntax-export-extensions',
    // 'babel-plugin-syntax-function-sent',
  ],
  'babel-6.22.0': [
    'babel-plugin-transform-es2015-spread',
    'babel-plugin-syntax-trailing-function-commas',
    'babel-plugin-check-es2015-constants',
    'babel-plugin-transform-function-bind',
    'babel-plugin-transform-react-jsx-source',
    'babel-plugin-transform-es2015-template-literals',
    'babel-plugin-transform-react-inline-elements',
    'babel-plugin-transform-object-set-prototype-of-to-assign',
    'babel-plugin-transform-flow-comments',
    'babel-plugin-transform-flow-strip-types',
    'babel-plugin-transform-es2015-arrow-functions',
    'babel-plugin-transform-eval',
    'babel-plugin-transform-jscript',
    'babel-plugin-transform-es2015-literals',
    'babel-plugin-transform-es2015-block-scoped-functions',
    'babel-plugin-transform-es2015-instanceof',
    'babel-plugin-transform-export-extensions',
    'babel-plugin-transform-react-jsx-self',
    'babel-plugin-transform-do-expressions',
    'babel-plugin-transform-object-assign',
    'babel-plugin-external-helpers',
    'babel-plugin-transform-async-functions',
    'babel-plugin-transform-es3-property-literals',
    'babel-plugin-transform-es3-member-expression-literals',
  ],
  'babel-6.23.0': [
    'babel-messages',
    'babel-preset-flow',
    'babel-plugin-transform-es2015-destructuring',
    'babel-plugin-transform-es2015-for-of',
    'babel-plugin-transform-es2015-typeof-symbol',
    'babel-plugin-transform-react-constant-elements',
    'babel-plugin-transform-runtime',
  ],
  'babel-6.24.1': [
    'babel-helpers',
    'babel-helper-plugin-test-runner',
    'babel-helper-function-name',
    'babel-helper-get-function-arity',
    'babel-preset-react',
    'babel-plugin-transform-react-jsx-compat',
    'babel-helper-explode-class',
    'babel-plugin-transform-class-properties',
    'babel-plugin-transform-es2015-function-name',
    'babel-plugin-transform-react-jsx',
    'babel-plugin-transform-async-to-generator',
    'babel-plugin-transform-es2015-classes',
    'babel-plugin-transform-es2015-parameters',
    'babel-plugin-transform-async-generator-functions',
    'babel-plugin-transform-es2015-sticky-regex',
    'babel-plugin-transform-es2015-object-super',
    'babel-plugin-transform-es2015-unicode-regex',
    'babel-plugin-transform-es5-property-mutators',
    'babel-plugin-transform-async-to-module-method',
    'babel-plugin-transform-exponentiation-operator',
    'babel-plugin-transform-es2015-computed-properties',
    'babel-plugin-transform-es2015-shorthand-properties',
    'babel-plugin-transform-strict-mode',
    'babel-plugin-transform-es2015-modules-umd',
    'babel-plugin-transform-es2015-modules-amd',
    'babel-plugin-transform-es2015-duplicate-keys',
    'babel-plugin-transform-es2015-modules-systemjs',
    'babel-plugin-transform-decorators',
    'babel-helper-builder-binary-assignment-operator-visitor',
    'babel-helper-bindify-decorators',
    'babel-helper-replace-supers',
    'babel-helper-hoist-variables',
    'babel-helper-call-delegate',
    'babel-helper-explode-assignable-expression',
    'babel-helper-remap-async-to-generator',
    'babel-helper-optimise-call-expression',
    'babel-preset-stage-0',
    'babel-preset-stage-1',
    'babel-preset-stage-2',
    'babel-preset-stage-3'
  ],
  'babel-6.25.0': [
    'babel-plugin-transform-react-display-name',
  ],
  'babel-6.26.0': [
    'babel-polyfill',
    'babel-runtime',
    'babel-template',
    'babel-types',
    'babel-traverse',
    'babel-cli',
    'babel-register',
    'babel-plugin-transform-object-rest-spread',
    'babel-plugin-transform-regenerator',
    'babel-plugin-transform-es2015-block-scoping',
    'babel-plugin-transform-regenerator',
    'babel-helper-builder-react-jsx',
    'babel-plugin-transform-proto-to-assign',
    'babel-helper-regex',
    'babel-helper-define-map',
    'babel-standalone',
    'babel-code-frame',
  ],
  'babel-6.26.1': [
    'babel-generator',
  ],
  'babel-6.26.2': [
    'babel-plugin-transform-es2015-modules-commonjs',
    'babel-helper-fixtures',
    'babel-helper-transform-fixture-test-runner',
  ],
  'babel-6.26.3': [
    'babel-core',
  ],
  'babel-7.0.0-alpha.11, 16, 19, 24...': [
    'babel-plugin-syntax-numeric-separator',
    'babel-plugin-syntax-optional-catch-binding',
    'babel-plugin-syntax-optional-chaining',
    'babel-plugin-syntax-typescript',
    // 'babel-plugin-transform-classes',
    'babel-plugin-transform-function-sent2',
    'babel-plugin-transform-new-target',
    'babel-plugin-transform-numeric-separator',
    'babel-plugin-transform-optional-catch-binding',
    'babel-plugin-transform-optional-chaining',
  ],
  'jest': [
    'jest',
    'babel-jest',
    'jest-cli',
    'babel-preset-jest',
    'babel-plugin-jest-hoist',
    'jest-jasmine2',
    'jest-repl',
    'jest-runtime',
    'jest-validate',
    'jest-circus',
    'jest-runner',
    'jest-config'
  ],
  'jest2': [
    'expect',
    'pretty-format',
    'jest-util',
    'jest-mock',
    'jest-environment-node',
    'jest-environment-jsdom',
    'jest-haste-map',
    'jest-snapshot',
    'jest-resolve',
    'jest-changed-files',
    'jest-diff',
    'jest-matcher-utils',
    'jest-resolve-dependencies',
    'eslint-config-fb-strict',
    'jest-phabricator',
    'jest-editor-support',
    'jest-message-util',
    'jest-regex-util',
    'jest-test-typescript-parser',
    'jest-docblock',
    'jest-get-type',
    'jest-worker',
    'jest-leak-detector',
    'diff-sequences',
    'jest-serializer'
  ],
  'pouchdb': [
    'pouchdb',
    'pouchdb-abstract-mapreduce',
    'pouchdb-adapter-fruitdown',
    'pouchdb-adapter-http',
    'pouchdb-adapter-idb',
    'pouchdb-adapter-indexeddb',
    'pouchdb-adapter-leveldb',
    'pouchdb-adapter-leveldb-core',
    'pouchdb-adapter-localstorage',
    'pouchdb-adapter-memory',
    'pouchdb-adapter-node-websql',
    'pouchdb-adapter-utils',
    'pouchdb-adapter-websql',
    'pouchdb-adapter-websql-core',
    'pouchdb-binary-utils',
    'pouchdb-browser',
    'pouchdb-changes-filter',
    'pouchdb-checkpointer',
    'pouchdb-collate',
    'pouchdb-collections',
    'pouchdb-core',
    'pouchdb-debug',
    'pouchdb-errors',
    'pouchdb-promise',
    'pouchdb-find',
    'pouchdb-for-coverage',
    'pouchdb-generate-replication-id',
    'pouchdb-json',
    'pouchdb-mapreduce',
    'pouchdb-mapreduce-utils',
    'pouchdb-md5',
    'pouchdb-merge',
    'pouchdb-node',
    'pouchdb-replication',
    'pouchdb-selector-core',
    'pouchdb-utils',
    'sublevel-pouchdb'
  ],
  'react': [
    'react',
    'react-dom',
    'react-art',
    'react-is',
    'react-test-renderer',
    'create-subscription'
  ],
  'storybook': [
    '@storybook/codemod',
    '@storybook/cli',
    '@storybook/addons',
    '@storybook/channels',
    '@storybook/addon-centered',
    '@storybook/ui',
    '@storybook/addon-actions',
    '@storybook/addon-graphql',
    '@storybook/addon-info',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-storyshots',
    '@storybook/react',
    '@storybook/react-native',
    '@storybook/channel-postmessage',
    '@storybook/channel-websocket',
    '@storybook/addon-options',
    '@storybook/vue',
    '@storybook/components',
    '@storybook/addon-backgrounds',
    '@storybook/addon-viewport',
    '@storybook/angular',
    '@storybook/addon-a11y',
    '@storybook/polymer',
    '@storybook/addon-jest',
    '@storybook/client-logger',
    '@storybook/node-logger',
    '@storybook/core',
    '@storybook/addon-storysource'
  ],
  'gk-test': [
    'gk-test-a',
    'gk-test-b',
    'gk-test-c'
  ]
}

module.exports = monorepoDefinitions
