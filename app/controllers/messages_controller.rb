class MessagesController < ApplicationController
  layout 'application'

  def index
    @group = Group.find(params[:group_id])
    @groups = current_user.groups
    @message = Message.new
    @messages = @group.messages
  end

  def create
    @message = Message.new(body: params[:message][:body], group_id: params[:group_id], user_id: current_user.id)
    if @message.save
      redirect_to group_messages_path, notice: "メッセージを送信できました。"
    else
      redirect_to group_messages_path, alert: "本文が空なので、メッセージを送信できませんでした。"
    end
  end

  private

  def message_params
    params.require(:message).permit(:body)
  end
end
