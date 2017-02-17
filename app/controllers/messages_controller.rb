class MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    @groups = Group.all
  end

end
