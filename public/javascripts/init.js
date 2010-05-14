var Chester = {};
var isOffline = function() {
  var res = sessionStorage.getItem('isOffline');
  return res == 'true';
}