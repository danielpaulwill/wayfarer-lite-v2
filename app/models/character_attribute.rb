class CharacterAttribute < ApplicationRecord
  belongs_to :character
  validates :name, uniqueness: true
end
