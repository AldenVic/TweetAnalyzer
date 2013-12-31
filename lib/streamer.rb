#!/usr/bin/env ruby
ENV["RAILS_ENV"] ||= "development"
require File.expand_path(File.dirname(__FILE__) + "/../config/environment")
require 'tweetstream'

puts "Loading auth keys..."

# Set up access attributes
keys = YAML.load_file(File.join(File.dirname(__FILE__), 'keys.yml'))
TweetStream.configure do |config|
  config.consumer_key       = keys['consumer_key']
  config.consumer_secret    = keys['consumer_secret']
  config.oauth_token        = keys['oauth_token']
  config.oauth_token_secret = keys['oauth_token_secret']
  config.auth_method        = :oauth
end

puts "Load complete..."

# Get search term from input params
hashtag = ARGV[0]

puts "Hashtag: #{hashtag}"

TweetStream::Client.new.track("#" + hashtag) do |status, client|
  # Copy requisite fields into Tweet object
  tweet = Tweet.new
  tweet[:id] = status[:id]
  tweet[:created_at] = status[:created_at]
  tweet[:user_id] = status[:user][:id]
  tweet[:text] = status[:text]
  if status[:coordinates] and status[:coordinates][:type] == 'Point'
    tweet[:coordinates] = status[:coordinates][:coordinates]
  puts "#{status[:coordinates][:coordinates]}"
  else
    tweet[:coordinates] = "UNKNOWN"
  end
  if status[:user][:location] and status[:user][:location] != ""
    tweet[:user_location] = status[:user][:location]
  else
    tweet[:user_location] = "UNKNOWN"
  end
  puts "Saving relevant attributes of new tweet..."
  tweet.save

  # Show tweet fields
  puts "Data saved"
  puts "Text: #{tweet[:text]}"
  puts "ID: #{tweet[:id]}"
  puts "User: #{tweet[:user_id]}"
  puts "Created: #{tweet[:created_at]}"
  puts "Coordinates: #{tweet[:coordinates]}"
  puts "User Location: #{tweet[:user_location]}"
  puts "======================================="
 
  client.stop if Tweet.count > 1500 #Exit script if these many tweets exist in the Db
end
