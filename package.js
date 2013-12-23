Package.describe({
  summary: "Mindmup mapjs mind mapping visualization for meteor.js"
});

Package.on_use(function (api) {
  api.export('MAPJS', 'client');
  api.use('underscore', 'client');
  // kinetic api has changed so I unfortunately
  // can NOT use the kinetic.js atmosphere package...
  api.add_files('kinetic-v4.5.4.js', 'client');
  api.add_files('mapjs-compiled.js', 'client');  
});
