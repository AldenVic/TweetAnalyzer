class AddFields < ActiveRecord::Migration
  def change
  drop_table :tweets
  create_table :tweets, :id => false do |t| 
    t.integer "id"
    t.string  "created_at"
    t.integer "user_id"
    t.string  "text"
    t.string  "coordinates"
  end
  end
end
