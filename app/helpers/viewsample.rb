#!/usr/bin/env ruby
ENV["RAILS_ENV"] ||= "production"
require '../../config/environment.rb'

@tweets = Tweet.all
@tweets.each do |tweet|
  puts "Id: " + tweet.id
  puts "Text: " + tweet.text
end

