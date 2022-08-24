class AddCharacterIdToLocation < ActiveRecord::Migration[6.1]
  def change
    add_column :locations, :character_id, :integer
  end
end
