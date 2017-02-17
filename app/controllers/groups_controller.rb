class GroupsController < ApplicationController
  layout 'application'
  before_action :set_group, only:[:edit, :update]

  def index
    @groups = Group.all
  end

  def new
    @group = Group.new
    render layout: 'groups'
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to new_group_path, notice: "グループを作成できました。"
    else
      flash[:alert] = "グループ名にデータを入力していないので保存できませんでした。"
      render :new
    end
  end

  def edit
    render layout: 'groups'
  end

  def update
    if @group.update(group_params)
      redirect_to edit_group_path, notice: "グループを変更しました。"
    else
      flash[:alert] = "グループ名にデータを入力していないので保存できませんでした。"
      render :edit
    end
  end

  private

  def group_params
    params.require(:group).permit(:name)
  end

  def set_group
    @group = Group.find(params[:id])
  end
end
