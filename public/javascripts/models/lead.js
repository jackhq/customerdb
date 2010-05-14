(function(){
  var Lead;
  Lead = function Lead() {  };
  Lead.prototype.name = 'Lead';
  Lead.prototype._all = function _all() {
    var _a, _b, _c, obj;
    // Get All Records
    if (isOffline()) {
      this.leads = [];
      _b = this.p_all_from_local();
      for (_a = 0, _c = _b.length; _a < _c; _a++) {
        obj = _b[_a];
        if (!obj.lead.deleted) {
          this.leads[this.leads.length] = obj;
        }
      }
    } else {
      this.p_get('/leads.json', function(leads) {
        this.model.p_save_to_local(leads);
        this.model.leads = leads;
        return this.model.leads;
      });
    }
    return this.leads;
  };
  Lead.prototype._find_by_id = function _find_by_id(id) {  };
  // Get model record by id
  Lead.prototype._create = function _create(lead) {
    var create_url, leads;
    if (isOffline()) {
      leads = this.p_all_from_local();
      lead.id = leads.length * -1;
      leads[leads.length] = {
        lead: lead
      };
      this.p_save_to_local(lead);
      this.selected_lead = lead;
    } else {
      create_url = '/leads.json';
      delete lead['id'];
      this.p_post(create_url, {
        lead: lead
      }, function(results) {
        if (console) {
          console.log('success');
        }
        if (results) {
          this.model.selected_lead = results.lead;
          return this.model.selected_lead;
        }
      }, function(results) {
        if (console) {
          console.log('error');
        }
        this.model.current_errors = JSON.parse(results.responseText).errors;
        this.model.selected_lead = false;
        return this.model.selected_lead;
      });
    }
    if (this.selected_lead) {
      return this.selected_lead;
    } else {
      return false;
    }
  };
  Lead.prototype.p_all_from_local = function p_all_from_local() {
    return JSON.parse(localStorage.getItem('leads'));
  };
  Lead.prototype.p_save_to_local = function p_save_to_local(leads) {
    return localStorage.setItem('leads', JSON.stringify(leads));
  };
  Lead.prototype.p_post = function p_post(url, data, success, error) {
    return $.ajax({
      async: false,
      type: 'POST',
      dataType: 'json',
      url: url,
      model: this,
      data: data,
      success: success || null,
      error: error || null
    });
  };
  Lead.prototype.p_get = function p_get(url, success) {
    return $.ajax({
      async: false,
      dataType: 'json',
      url: url,
      model: this,
      success: success || null
    });
  };
  Lead.prototype.p_clear_data = function p_clear_data(lead) {
    var _a, _b, _c, attribute;
    delete lead['id'];
    delete lead['updated'];
    _b = lead;
    for (_a = 0, _c = _b.length; _a < _c; _a++) {
      attribute = _b[_a];
      !attribute ? delete lead[attribute] : null;
    }
    return lead;
  };
  Chester.Application.Models.add(new Lead());
})();
