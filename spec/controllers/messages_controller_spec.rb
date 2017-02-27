require 'rails_helper'

RSpec.describe MessagesController, type: :controller do
		let(:user) { create(:user) }
		let(:group) { create(:group) }
		let(:message) {create(:message, group: group, user: user) }
		let(:messages) {create_list(:message, 3, group: group, user: user) }

		before do
			login_user user
			get :index, group_id: group
    end

   describe 'GET #index' do
		  it "populates an array of messages ordered by created_at DESC" do
		    expect(assigns(:messages)).to match(messages)
		  end

		  it "populates an array of groups ordered by created_at DESC" do
		    expect(expect(assigns(:group)).to match(group))
		  end

		  it "renders the :index template" do
		  	expect(response).to render_template :index
		  end
	end

	describe 'POST #create' do
    it "saves the message in the database" do
      expect(message).to be_valid
      binding.pry
    end

    it "is invalid without a body" do
    	message[:body] = ""
    	expect(message).not_to be_valid
    	expect(message.errors[:body]).to include("を入力してください。")
    end
  end
end
