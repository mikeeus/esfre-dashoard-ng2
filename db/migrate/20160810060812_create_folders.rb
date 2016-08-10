class CreateFolders < ActiveRecord::Migration[5.0]
  def change
    create_table :folders do |t|
      t.belongs_to :user, foreign_key: true, index: true
      t.string :name
      
      t.timestamps
    end
  end
end
