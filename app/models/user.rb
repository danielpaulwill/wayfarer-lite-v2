class User < ApplicationRecord
  has_one :character
  has_secure_password
end
