class Message < ApplicationRecord
  validates :body, presence: true
  belongs_to :user
  belongs_to :group

  def message_time
    created_at.to_s(:default)
  end

end
