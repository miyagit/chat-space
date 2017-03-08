class GroupsController < ApplicationController
  before_action :set_group, only:[:edit, :update]

  def index
    @groups = current_user.groups
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      respond_to do |format|
        format.html {redirect_to new_group_path, notice: "グループを作成できました。"}
        format.json
      end
    else
      flash[:alert] = "グループ名にデータを入力していないので保存できませんでした。"
      render :new
    end
  end

  def edit
  end

  def update
    if @group.update(group_params)
      redirect_to edit_group_path(@group), notice: "グループを変更しました。"
    else
      flash[:alert] = "グループ名にデータを入力していないので保存できませんでした。"
      render :edit
    end
  end

  private

  def group_params
    params.require(:group).permit(:name, user_ids:[])
  end

  def set_group
    @group = Group.find(params[:id])
  end
end
