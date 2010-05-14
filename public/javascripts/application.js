// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
$('document').ready(function() {
  // Route to Root - always { controller, action, params}
  Chester.Application.run({ 
    controller: 'LeadsController', 
    action: '_index', 
    params: { app: Chester.Application, start: 1 } 
  });

  window.addEventListener("offline", function() {
    sessionStorage.setItem('isOffline', 'true');
    if (console) {
      console.log('offline');
    }
  }, false); 

  window.addEventListener("online", function() {
    sessionStorage.setItem('isOffline', 'false');
    if (console) {
      console.log('online');
    }
    // Now I want to add any changed or new patients to the server....
    Chester.Application.run({ 
      controller: 'LeadsController', 
      action: '_push_offline_data_online', 
      params: { app: Chester.Application } 
    });
  }, false); 
});