class UsersController < ApplicationController
	def search
		a = user_params
		@users = User.where('name LIKE(?)', "%#{user_params[:search]}%")
	  respond_to do |format|
      format.json
    end
	end

	private

  def user_params
    params.require(:user).permit(:search)
  end
end

