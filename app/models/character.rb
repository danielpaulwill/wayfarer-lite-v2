class Character < ApplicationRecord
  has_many :items
  has_many :character_attributes
  belongs_to :user
  validates :name, presence: true, uniqueness: true
  validates :avatar, presence: true
end
