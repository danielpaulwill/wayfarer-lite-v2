class AddStatsToCharacters < ActiveRecord::Migration[6.1]
  def change
    add_column :characters, :health, :integer
    add_column :characters, :evil, :integer
    add_column :characters, :strength, :integer
    add_column :characters, :defense, :integer
    add_column :characters, :luck, :integer
  end
end
