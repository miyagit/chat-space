class MessagesController < ApplicationController
  before_action :set_groups, :set_messages, only:[:index, :create]

  def index
    @message = Message.new
  end

  def create
    @message = current_user.messages.new(create_params)
    if @message.save
      respond_to do |format|
        format.html {redirect_to group_messages_path, notice: "メッセージを送信できました。"}
        format.json
      end
    else
      flash[:alert] = "本文が空なので保存できませんでした。"
      render :index
    end
  end

  private

  def create_params
    params.require(:message).permit(:body).merge(group_id: params[:group_id])
  end

  def set_groups
    @group = Group.find(params[:group_id])
    @groups = current_user.groups
  end

  def set_messages
    @messages = @group.messages
  end
end

