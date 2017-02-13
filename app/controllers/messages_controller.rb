class MessagesController < ApplicationController
	before_action :move_to_sign_up, except: :index

	def index
		# flash[:notice] = "ようこそ。本日は#{Date.today}です。"
	end

	# private
	# def move_to_sign_up
	# 	redirect_to "/users/sign_in" unless user_signed_in?
	# end


end
