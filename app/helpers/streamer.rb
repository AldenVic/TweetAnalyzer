#!/usr/bin/env ruby
ENV["RAILS_ENV"] ||= "production"
require 'tweetstream'

TweetStream.configure do |config|
  config.consumer_key       = 'LjXtH8qpdPRk1tcyzLtCg'
  config.consumer_secret    = 'dJMGfrjJrpB05GsCY7XXvL44Hw9hstp9i6XekNfc4'
  config.oauth_token        = '283003789-jNULEB43QPgF9nE4TFnUan3RdOILE3Kmu3KPHJ2K'
  config.oauth_token_secret = 'DNl6mqu1Ql8vHdHmI7C5YHnimDhGLt322P0h45oPRem3M'
  config.auth_method        = :oauth
end

hashtag = ARGV[0]

puts "Hashtag: #{hashtag}"

@statuses = []
TweetStream::Client.new.track("#" + hashtag) do |status, client|
  puts "#{status.text}"
  @statuses << status
  tweet = Tweet.new
  tweet.id = status.id
  tweet.created_at = status.created_at
  tweet.user_id = status.user_id
  tweet.text = status.text
  tweet.coordinates = status.coordinates
  tweet.save
  client.stop if @statuses.size >= 10
end
