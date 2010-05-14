class LeadsController < ApplicationController
  
  def index
    @leads = Lead.all
    respond_to do |wants|
      wants.html
      wants.json { render :json => @leads.to_json }
    end
  end
  
  def create
    @lead = Lead.create!(params[:lead])
    respond_to do |wants|
      wants.json { render @lead.to_json }
    end
    
  end
  
  
    
end
