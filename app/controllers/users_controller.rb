class UsersController < ApplicationController
	def search
		@users = User.where('name LIKE(?)', "%#{user_params[:search]}%").where.not(id: current_user.id)
	  respond_to do |format|
      format.json
    end
	end

	private

  def user_params
    params.require(:user).permit(:search)
  end
end
