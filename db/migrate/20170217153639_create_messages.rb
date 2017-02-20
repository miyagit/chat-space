class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
    	t.string :body,  null: false, default: ""
    	t.string :image
    	t.references :user, foreign_key: true
    	t.references :group, foreign_key: true
      t.timestamps
    end
  end
end
