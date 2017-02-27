FactoryGirl.define do
	password = Faker::Internet.password

  factory :user do
    name                  Faker::Name.name
    email                 Faker::Internet.email
    password              password
    password_confirmation password
  end

end
