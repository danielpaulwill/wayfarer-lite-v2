class CharacterAttribute < ApplicationRecord
  belongs_to :character
  validates :quantity, numericality: { only_integer: true }
  validates_uniqueness_of :name, scope: :character_id
end
