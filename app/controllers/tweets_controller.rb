class TweetsController < ApplicationController
  include ActionController::Streaming 
 
  # Get all stored tweets
  def index
    @tweets = Tweet.all
    @last_tweet = @tweets.max_by{ |x| x.id}

    #100.times {
    #  @tweets = Tweet.find(:all, :conditions => [ "id > ?", "#{@last_tweet.id}" ])   
    #  @last_tweet = @tweets.max_by{ |x| x.id}
    #}
  end
end
