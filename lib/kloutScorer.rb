require 'klout'

Klout.api_key = 'q8bqgfcc9h4zw7jv7eptngyj'
klout_id = Klout::Identity.find_by_screen_name('robdelaney')

puts "Klout id: #{klout_id}"

user = Klout::Identity.new(klout_id.id)

puts "Rob's score: #{user.score}"

