require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  config.storage = :fog
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: ENV['ACCESS_KEY_ID'],
    aws_secret_access_key: ENV['SECRET_ACCESS_KEY'],
    region: 'us-east-1'
  }

    case Rails.env
    when 'development'
        config.fog_directory  = 'chatspace-miyajima'
        config.asset_host = 'https://s3.amazonaws.com/chatspace-miyajima'
    when 'production'
        config.fog_directory  = 'chatspace-miyajima'
        config.asset_host = 'https://s3.amazonaws.com/chatspace-miyajima'
    end
    when 'test'
        config.fog_file  = 'chatspace-miyajima'
        config.asset_host = 'https://s3.amazonaws.com/chatspace-miyajima'
    end
end
