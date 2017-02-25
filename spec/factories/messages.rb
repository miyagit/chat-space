FactoryGirl.define do

  factory :message do
    body                  "textcontents"
    user
    group
  end

end
