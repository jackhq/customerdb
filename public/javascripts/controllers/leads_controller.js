(function(){
  var LeadsController;
  var __extends = function(child, parent) {
    var ctor = function(){ };
    ctor.prototype = parent.prototype;
    child.__superClass__ = parent.prototype;
    child.prototype = new ctor();
    child.prototype.constructor = child;
  };
  LeadsController = function LeadsController() {
    return Chester.Controller.apply(this, arguments);
  };
  __extends(LeadsController, Chester.Controller);
  LeadsController.prototype.name = 'LeadsController';
  LeadsController.prototype._index = function _index(params) {
    params.leads = params.app.Models.find('Lead')._all();
    return this.find('index').render(params);
  };
  LeadsController.prototype._new = function _new(params) {
    return this.find('new').render(params);
  };
  LeadsController.prototype._create = function _create(params) {  };
  //TODO NEW VIEW
  // Register Controller to application
  Chester.Application.add(new LeadsController());
})();
