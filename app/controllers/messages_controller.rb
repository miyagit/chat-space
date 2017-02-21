class MessagesController < ApplicationController
  before_action :set_group, :set_groups, :set_message, :set_messages, only:[:index, :create]

  def index
  end

  def create
    @message = Message.new(create_params)
    if @message.save
      redirect_to group_messages_path, notice: "メッセージを送信できました。"
    else
      flash[:alert] = "本文が空なので保存できませんでした。"
      render :index
    end
  end

  private

  def create_params
    params.require(:message).permit(:body).merge(user_id: current_user.id, group_id: params[:group_id])
  end

  def set_group
    @group = Group.find(params[:group_id])
  end

  def set_groups
    @groups = current_user.groups
  end

  def set_message
    @message = Message.new
  end

  def set_messages
    @messages = @group.messages
  end
end
