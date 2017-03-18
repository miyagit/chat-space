json.messages @messages do |message|
  json.id message.id
  json.body message.body
  json.image message.image.url
  json.name message.user.name
  json.time message_time(message)
end
