class GroupsController < ApplicationController

  def new
    @group = Group.new
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
  private

  def group_params
    params.require(:group).permit(:name)
  end

end
