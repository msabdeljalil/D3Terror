class CreateAttacks < ActiveRecord::Migration
  def change
    create_table :attacks do |t|
      t.string :country
      t.string :city
      t.date :attack_date

      t.timestamps
    end
  end
end
