class ChangeCreatedAtColumnToDatetime < ActiveRecord::Migration
  def change
    change_column :tweets, :created_at, :datetime
  end
end
