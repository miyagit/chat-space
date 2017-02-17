class MessagesController < ApplicationController
  layout 'application'
  def index
    @group = Group.find(params[:group_id])
    @groups = Group.all
  end

end
