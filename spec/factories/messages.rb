FactoryGirl.define do

  factory :message do
    body                  Faker::Lorem.sentence
    image                 Faker::File.file_name('path/to')
    user
    group
    created_at             { Faker::Time.between(3.days.ago, Time.now, :all) }
  end

end
