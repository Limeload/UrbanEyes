class CreateServiceRequests < ActiveRecord::Migration[7.0]
  def change
    create_table :service_requests do |t|
      t.string :title
      t.text :description
      t.string :status
      t.bigint :city_id
      t.bigint :service_id
      t.bigint :citizen_id

      t.timestamps
    end
  end
end
