class GroupsController < ApplicationController

  def new
    @group = Group.new
  end

  def create
    group = Group.new(group_params)
    if group.save
      flash[:notice] ="グループを作成できました。"
      redirect_to new_group_path
    else
      flash[:notice] = "グループ名にデータを入力していないので保存できませんでした。"
      redirect_to new_group_path
    end
  end

  private

  def group_params
    params.require(:group).permit(:name)
  end

end
