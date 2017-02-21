class Group < ApplicationRecord
  validates :name, presence: true
  has_many :messages
  has_many :groups_users
  has_many :users, through: :groups_users

  def latest_message
    last_message = messages.last
    if last_message
    	return last_message.body
    else
    	return "このグループに投稿はありません"
    end
  end

end
