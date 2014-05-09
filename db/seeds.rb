# require 'faker'

COUNTRY_COLUMN = 12
CITY_COLUMN = 15
DATE_COLUMN = 5

# # create a few users
# User.create :name => 'Dev Bootcamp Student', :email => 'me@example.com', :password => 'password'
# 5.times do
#   User.create :name => Faker::Name.name, :email => Faker::Internet.email, :password => 'password'
# end

# create a few technical skills
# computer_skills = %w(Ruby Sinatra Rails JavaScript jQuery HTML CSS)
# computer_skills.each do |skill|
#   Skill.create :name => skill, :context => 'technical'
# end

# # create a few creative skills
# design_skills = %w(Photoshop Illustrator Responsive-Design)
# design_skills.each do |skill|
#   Skill.create :name => skill, :context => 'creative'
# end

# @main_deck = Deck.create( title: "Classic Deck", description: "This Deck is from Phase 1")
# questions = []
# File.open("flashcard_samples.txt", 'r').each_line { |line| questions << line if line != "\n" } # Can replace with ARGV[0]
# questions.each_with_index { |question, index| @main_deck.cards << Card.new({question: questions[index - 1].chomp.capitalize, answer: questions[index].chomp}) if index % 2 > 0}


# Filling in the attacks
attack_record = []
File.open("MasterTTDB.csv", 'r').each_line { |line| attack_record << line }
attack_record.each_with_index { |attack, index| Attack.new({
	country: attack[COUNTRY_COLUMN], 
	city: attack[CITY_COLUMN],
	attack_data: attack[DATE_COLUMN]
	})
}



