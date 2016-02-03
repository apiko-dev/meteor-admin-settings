Package.describe({
  name: 'jss:admin-settings',
  summary: 'Key value store for jss:admin',
  version: '1.1.0',
  git: 'https://github.com/JSSolutions/meteor-admin-settings'
});


Package.onUse(function (api) {
  api.versionsFrom('1.0.1');

  api.use([
    'coffeescript',
    'underscore',
    'templating',
    'iron:router@1.0.9',
    'aldeed:autoform@5.5.1'
  ]);

  api.addFiles([
    'lib/both/collections.coffee',
    'lib/both/types.coffee'
  ]);

  api.addFiles([
    'lib/client/router.coffee',
    'lib/client/views/admin-settings.html',
    'lib/client/views/admin-settings-table.html',
    'lib/client/views/admin-settings-edit.html',
    'lib/client/views/admin-settings-new.html',
    'lib/client/views/admin-settings-edit.coffee',
    'lib/client/views/admin-settings-new.coffee',
    'lib/client/admin.coffee',
    'lib/client/helpers.coffee'
  ], 'client');

  api.addFiles([
    'lib/server/allow.coffee',
    'lib/server/publish.coffee'
  ], 'server');
});


Package.onTest(function (api) {
  api.use([
    'tinytest',
    'jss:admin-settings'
  ]);
  api.addFiles('admin-settings-tests.js');
});
