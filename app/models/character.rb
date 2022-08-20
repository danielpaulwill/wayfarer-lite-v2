class Character < ApplicationRecord
  has_many :items
  has_many :attributes
  belongs_to :user
  validates :name, presence: true
  validates :avatar, presence: true
end
