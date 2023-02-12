class CreateServiceProviders < ActiveRecord::Migration[7.0]
  def change
    create_table :service_providers do |t|
      t.string :name
      t.string :contact_info
      t.string :services_offered
      t.bigint :city_id

      t.timestamps
    end
  end
end
