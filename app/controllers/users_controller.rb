class UsersController < ApplicationController
	def search
		@users = User.where('name LIKE(?) and id != ?', "%#{user_params[:search]}%", current_user)
	  respond_to do |format|
      format.json
    end
	end

	private

  def user_params
    params.require(:user).permit(:search)
  end
end

