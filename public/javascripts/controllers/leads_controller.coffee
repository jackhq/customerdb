class LeadsController extends Chester.Controller
  name: 'LeadsController'
  _index: (params) ->
    params.leads: params.app.Models.find('Lead')._all()
    this.find('index').render(params)
    

  _new: (params) ->
    this.find('new').render(params)

  _create: (params) ->
    #TODO NEW VIEW
    

# Register Controller to application
Chester.Application.add(new LeadsController())