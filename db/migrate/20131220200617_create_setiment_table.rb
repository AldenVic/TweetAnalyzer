class CreateSetimentTable < ActiveRecord::Migration
  def change
    create_table :setiments, :id => false do |t|
      t.integer	:id, :limit => 8
      t.float	:score
      t.string	:sentiment
    end
  end
end
