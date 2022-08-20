class Character < ApplicationRecord
  has_many :items
  has_many :attributes
  belongs_to :user
end
