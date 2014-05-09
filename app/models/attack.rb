class Attack < ActiveRecord::Base
  require 'CSV'
  COUNTRY_COLUMN = 12
  CITY_COLUMN = 15
  DATE_COLUMN = 5

  def self.import(file)
    attack_record = []
    CSV.foreach(file, headers: true) do |row|
      self.create(
        country: row[COUNTRY_COLUMN],
        city: row[CITY_COLUMN],
        attack_date: row[DATE_COLUMN]
        )
      return if self.last.id == 500
    end
  end

end
