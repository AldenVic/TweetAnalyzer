class UsingBigIntForUserId < ActiveRecord::Migration
  def change
    change_column :tweets, :user_id, :bigint  
  end
end
