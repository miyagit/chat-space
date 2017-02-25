class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :messages
  has_many :groups_users
  has_many :groups, through: :groups_users

  validates :name, presence: true, length: { maximum: 6 }

end
