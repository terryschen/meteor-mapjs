Package.describe({
  summary: "Mindmup mapjs mind mapping visualization for meteor.js"
});

Package.on_use(function (api) {
  api.export('MAPJS', 'client');
  api.use('underscore', 'client');
  api.use('jquery', 'client');
  api.use('jquery-hotkeys', 'client');
  api.use('jquery-mousewheel', 'client');
  api.use('hammer', 'client');
  // latest kinetic api has changed so I unfortunately
  // can NOT use the kinetic.js atmosphere package...
  api.add_files('kinetic-v4.5.4.js', 'client');
  api.add_files('color-0.4.1.min.js', 'client');  
  api.add_files('mapjs-compiled.js', 'client');  
});
