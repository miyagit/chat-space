class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
    	t.string :name,  null: false, default: ""
    	#↑今回グループでグループ名の名前検索は行わないのでindexは貼らない。
    	#indexとはよく検索するカラムにインデックスを貼ることで、検索速度を向上させるもの。多用しすぎると検索が逆に遅くなるので、データベースの設計が重要。
      t.timestamps
    end
  end
end
