class Character < ApplicationRecord
  has_many :items
  has_many :character_attributes
  has_many :locations
  has_many :events, through: :locations
  belongs_to :user
  validates :name, presence: true
  validates :avatar, presence: true
  validates_uniqueness_of :name, scope: :user_id
end
