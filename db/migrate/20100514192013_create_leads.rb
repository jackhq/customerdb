class CreateLeads < ActiveRecord::Migration
  def self.up
    create_table :leads do |t|
      t.string :name
      t.string :phone
      t.string :email

      t.timestamps
    end
  end

  def self.down
    drop_table :leads
  end
end
