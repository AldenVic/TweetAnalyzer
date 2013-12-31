class UsingDateForCreated < ActiveRecord::Migration
  def change
    change_column :tweets, :created_at, :date
  end
end
