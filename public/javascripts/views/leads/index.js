(function(){
  var LeadsIndex;
  var __extends = function(child, parent) {
    var ctor = function(){ };
    ctor.prototype = parent.prototype;
    child.__superClass__ = parent.prototype;
    child.prototype = new ctor();
    child.prototype.constructor = child;
  };
  LeadsIndex = function LeadsIndex() {
    return Chester.View.apply(this, arguments);
  };
  __extends(LeadsIndex, Chester.View);
  LeadsIndex.prototype.name = "index";
  LeadsIndex.prototype.render = function render(options) {
    // TODO: add your presentation code here.
    $('#leads').html('<ul>');
    $.each(options.leads, function() {
      $('#leads').append('<li>');
      $('#leads').append('<a href="#' + this.lead.id + '" class="show">' + this.lead.name + '</a>');
      $('#leads').append('&nbsp;');
      $('#leads').append('<a href="#' + this.lead.id + '" class="destroy">Delete</a>');
      return $('#leads').append('</li>');
    });
    $('#leads').append('</ul>');
    $('#leads').append('<div><a id="new_lead" href="#/new">Create a new Lead</a></div>');
    return $('a#new_lead').click(function() {
      options = {
        app: Chester.Application
      };
      options.app.run({
        controller: 'LeadsController',
        action: '_new',
        params: options
      });
      return false;
    });
  };
  // Register view to Patients Controller
  Chester.Application.find("LeadsController").add(new LeadsIndex());
})();
