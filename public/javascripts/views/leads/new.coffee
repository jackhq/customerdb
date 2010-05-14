class LeadsNew extends Chester.View
  name: "new"
  render: (options) ->
    $('#leads').html("""
    <form>
      <p>
        <label>Name</label>
        <br />
        <input type="text" id="name"></input>
      </p>
      <p>
        <input type="submit" value="Create Lead"></input>
      </p>
    </form>
    
    <a href="#" class="js_patients">Back to Leads</a>
    """)
    
    $('.js_leads').click ->
      options.app.run({ 
        controller: 'LeadsController', 
        action: '_index', params: { app: options.app } })
      
    $('form').submit ->
      options.app.run({
        controller: 'LeadsController',
        action: '_create',
        params: { app: options.app, lead: {
          name: $('input#name').val()
          }
        }
      });
      false

  render_errors: (errors) ->
    $('#errors').html('')
    for error in errors.reverse()
      $('#errors').prepend("<div>" + error + "</div>")

  # Register view to Patients Controller
Chester.Application.find("LeadsController").add(new LeadsNew())