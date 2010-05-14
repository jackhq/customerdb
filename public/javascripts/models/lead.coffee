class Lead
  name: 'Lead'
  _all: ->
    # Get All Records
    if isOffline()
      this.leads: []
      for obj in this.p_all_from_local()
        this.leads[this.leads.length]: obj if !obj.lead.deleted
    else
      this.p_get('/leads.json', (leads) ->
        this.model.p_save_to_local leads
        this.model.leads: leads
      )
    this.leads

    
  _find_by_id: (id) ->
    # Get model record by id
  _create: (lead) ->
    if isOffline()
      leads: this.p_all_from_local()
      lead.id: leads.length * -1
      leads[leads.length]: { lead: lead }
      this.p_save_to_local lead
      this.selected_lead: lead

    else
      create_url: '/leads.json'
      delete lead['id']
      this.p_post(
        create_url,
        { lead: lead },
        (results) ->
          console.log 'success' if console
          this.model.selected_lead: results.lead if results
        (results) ->
          console.log 'error' if console
          this.model.current_errors: JSON.parse(results.responseText).errors
          this.model.selected_lead: false
    
      )
    if this.selected_lead then this.selected_lead else false


    
  p_all_from_local: ->
    JSON.parse(localStorage.getItem('leads'))

  p_save_to_local: (leads) ->
    localStorage.setItem('leads', JSON.stringify(leads))

  p_post: (url, data, success, error) ->
    $.ajax({
      async: false,
      type: 'POST',
      dataType: 'json',
      url: url,
      model: this,
      data: data,
      success: success || null,
      error: error || null
    })
  
  p_get: (url, success) ->
    $.ajax({
        async: false,
        dataType: 'json',
        url: url,
        model: this,
        success: success || null
    })
      
  p_clear_data: (lead) ->
    delete lead['id']
    delete lead['updated']
    for attribute in lead
      if !attribute
        delete lead[attribute]
    lead


  
Chester.Application.Models.add(new Lead())