class CreateAttributes < ActiveRecord::Migration[6.1]
  def change
    create_table :attributes do |t|
      t.integer :character_id
      t.string :name
      t.integer :quantity

      t.timestamps
    end
  end
end
