class CreateCitizens < ActiveRecord::Migration[7.0]
  def change
    create_table :citizens do |t|
      t.string :username
      t.string :email
      t.string :password
      t.bigint :city_id

      t.timestamps
    end
  end
end