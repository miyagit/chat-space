class GroupsController < ApplicationController

  def index
    @groups = Group.all
  end

  def new
    @group = Group.new
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(group_params)
      redirect_to edit_group_path, notice: "グループを変更しました。"
    else
      flash[:alert] = "グループ名にデータを入力していないので保存できませんでした。"
      render action: :edit
    end
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to new_group_path, notice: "グループを作成できました。"
    else
      flash[:alert] = "グループ名にデータを入力していないので保存できませんでした。"
      render action: :new
    end
  end

  def edit
    @group = Group.find(params[:id])
  end

  private

  def group_params
    params.require(:group).permit(:name)
  end
end
