class Group < ApplicationRecord
  validates :name, presence: true
  has_many :messages
  has_many :groups_users
  has_many :users, through: :groups_users

  def latest_message
    messages.last.try(:body) || "このグループに投稿はありません。"
  end

end
