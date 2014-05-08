class Attack < ActiveRecord::Base
  validates :attacks, :presence => true
end
