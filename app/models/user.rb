class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :messages
  has_many :groups_users
  has_many :groups, through: :groups_users

  scope :exclude, ->(user) { where.not(id: user.id) }

end
