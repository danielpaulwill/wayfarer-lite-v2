class Event < ApplicationRecord
  belongs_to :Location
  has_many :options
end
