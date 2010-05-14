(function(){
  var Application, Base, Controller, View;
  var __extends = function(child, parent) {
    var ctor = function(){ };
    ctor.prototype = parent.prototype;
    child.__superClass__ = parent.prototype;
    child.prototype = new ctor();
    child.prototype.constructor = child;
  };
  Base = function Base() {  };
  Base.prototype.name = "Base";
  Base.prototype.children = [];
  Base.prototype.find = function find(name) {
    var _a, _b, _c, child, result;
    _b = this.children;
    for (_a = 0, _c = _b.length; _a < _c; _a++) {
      child = _b[_a];
      if (child.name === name) {
        result = child;
        break;
      }
    }
    return result;
  };
  Base.prototype.add = function add(child) {
    this.children[this.children.length] = child;
    return this.children[this.children.length];
  };
  Application = function Application() {
    return Base.apply(this, arguments);
  };
  __extends(Application, Base);
  Application.prototype.version = "0.2.0";
  Application.prototype.run = function run(options) {
    var _a, _b;
    return this.find(options.controller)[options.action = (typeof (_b = options.action) !== "undefined" && _b !== null) ? options.action : '_index'](options.params = (typeof (_a = options.params) !== "undefined" && _a !== null) ? options.params : {});
  };
  Controller = function Controller() {
    return Base.apply(this, arguments);
  };
  __extends(Controller, Base);
  Controller.prototype.name = "Controller";
  View = function View() {
    return Base.apply(this, arguments);
  };
  __extends(View, Base);
  View.prototype.name = "View";
  View.prototype.data = function data() {
    var _a, _b, _c, child, result;
    result = {};
    _b = this.children;
    for (_a = 0, _c = _b.length; _a < _c; _a++) {
      child = _b[_a];
      result[child.name] = child.value;
    }
    return result;
  };
  View.prototype.render = function render() {
    return print("Not Implemented");
  };
  Chester.View = View;
  Chester.Controller = Controller;
  Chester.Application = new Application();
  Chester.Application.Models = new Base();
  Chester.Application.Helpers = new Base();
})();
