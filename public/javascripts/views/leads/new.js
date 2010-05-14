(function(){
  var LeadsNew;
  var __extends = function(child, parent) {
    var ctor = function(){ };
    ctor.prototype = parent.prototype;
    child.__superClass__ = parent.prototype;
    child.prototype = new ctor();
    child.prototype.constructor = child;
  };
  LeadsNew = function LeadsNew() {
    return Chester.View.apply(this, arguments);
  };
  __extends(LeadsNew, Chester.View);
  LeadsNew.prototype.name = "new";
  LeadsNew.prototype.render = function render(options) {
    $('#leads').html("<form>\n  <p>\n    <label>Name</label>\n    <br />\n    <input type=\"text\" id=\"name\"></input>\n  </p>\n  <p>\n    <input type=\"submit\" value=\"Create Lead\"></input>\n  </p>\n</form>\n\n<a href=\"#\" class=\"js_patients\">Back to Leads</a>");
    $('.js_leads').click(function() {
      return options.app.run({
        controller: 'LeadsController',
        action: '_index',
        params: {
          app: options.app
        }
      });
    });
    return $('form').submit(function() {
      options.app.run({
        controller: 'LeadsController',
        action: '_create',
        params: {
          app: options.app,
          lead: {
            name: $('input#name').val()
          }
        }
      });
      return false;
    });
  };
  LeadsNew.prototype.render_errors = function render_errors(errors) {
    var _a, _b, _c, _d, error;
    $('#errors').html('');
    _a = []; _c = errors.reverse();
    for (_b = 0, _d = _c.length; _b < _d; _b++) {
      error = _c[_b];
      _a.push($('#errors').prepend("<div>" + error + "</div>"));
    }
    return _a;
  };
  // Register view to Patients Controller
  Chester.Application.find("LeadsController").add(new LeadsNew());
})();
