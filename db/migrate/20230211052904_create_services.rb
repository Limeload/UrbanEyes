class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :name
      t.text :description
      t.string :category
      t.bigint :city_id

      t.timestamps
    end
  end
end
