class LeadsIndex extends Chester.View
  name: "index"
  render: (options) ->
    # TODO: add your presentation code here.
    $('#leads').html('<ul>')
    $.each(options.leads, ->
      $('#leads').append('<li>')
      $('#leads').append('<a href="#' + this.lead.id + '" class="show">' + this.lead.name + '</a>')
      $('#leads').append('&nbsp;')
      $('#leads').append('<a href="#' + this.lead.id + '" class="destroy">Delete</a>')
      $('#leads').append('</li>')
    )
    $('#leads').append('</ul>')


    $('#leads').append('<div><a id="new_lead" href="#/new">Create a new Lead</a></div>')

    $('a#new_lead').click ->
      options: { app: Chester.Application }
      options.app.run({
        controller: 'LeadsController',
        action: '_new', 
        params: options
      })
      false


  # Register view to Patients Controller
Chester.Application.find("LeadsController").add(new LeadsIndex())