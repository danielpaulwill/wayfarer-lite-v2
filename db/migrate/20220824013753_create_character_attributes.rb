class CreateCharacterAttributes < ActiveRecord::Migration[6.1]
  def change
    create_table :character_attributes do |t|
      t.integer :character_id
      t.string :name
      t.integer :quantity

      t.timestamps
    end
  end
end
