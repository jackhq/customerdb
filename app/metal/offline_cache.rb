require 'sinatra/base'

class OfflineCache < Sinatra::Base
  get '/application.manifest' do
    File.open(RAILS_ROOT + '/config/manifest.version', 'r') do |f|
      @version = f.read
    end
    b = <<BODY
CACHE MANIFEST
# REV #{@version}

BODY
    b
  end
  
end