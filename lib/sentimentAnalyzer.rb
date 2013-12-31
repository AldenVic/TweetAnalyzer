#!/usr/bin/env ruby
ENV["RAILS_ENV"] ||= "development"
require File.expand_path(File.dirname(__FILE__) + "/../config/environment")

# Load the default sentiment dictionaries
SentiWordNet.load_defaults

analyzer = SentiWordNet.new

while Sentiment.count < 1500 do # Fills up table to only 1500 entries TODO write purge script to delete or archive old data
  puts "Loading all unanalyzed tweets..."

  # Get all unanalyzed tweets 
  max_id = Sentiment.maximum("id")
  if max_id
    tweets = Tweet.where("id > #{max_id}")
  else 
    tweets = Tweet.all
  end

  puts "Analyzing tweets..."

  tweets.each do |tweet|
    sentiment = Sentiment.new
    sentiment[:id] = tweet[:id]
    sentiment[:sentiment] = analyzer.get_sentiment(tweet[:text])
    sentiment[:score] = analyzer.get_score(tweet[:text])
    puts "Saving sentiment analysis of tweet..."
    sentiment.save

    # Show analysis saved
    puts "Data saved"
    puts "#{tweet[:text]}"
    puts "#{sentiment[:id]} | #{sentiment[:sentiment]} | #{sentiment[:score]}"
    puts "======================================="
  end
end
