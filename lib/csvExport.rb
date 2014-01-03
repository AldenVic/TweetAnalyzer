require 'csv'

@tweets = Tweet.all

CSV.open("tweetDataSample.csv", "wb") do |csv|
  csv << ["Tweet_ID", "User_ID", "Tweet", "Created_At", "Sentiment_Score", "Sentiment", "Coordinates", "User_Location"]
  @tweets.each do |tweet|
    sentiment = Sentiment.where("id = #{tweet.id}")
    csv << [tweet.id, tweet.user_id, tweet.text, tweet.created_at, sentiment[0].score, sentiment[0].sentiment, tweet.coordinates, tweet.user_location]
  end
end
