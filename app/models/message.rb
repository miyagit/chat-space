class Message < ApplicationRecord
  validates :user_id, presence: true
  validates :group_id, presence: true
  belongs_to :user
  belongs_to :group
  mount_uploader :image, ImageUploader

end
