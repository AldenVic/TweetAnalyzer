class CreateSentiments < ActiveRecord::Migration
  def change
    drop_table :sentiments
    create_table :sentiments, :id => false do |t|
      t.integer :id, :limit => 8
      t.float   :score
      t.string  :sentiment
    end
  end
end
