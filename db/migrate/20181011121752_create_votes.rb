class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.belongs_to :user, null: false
      t.belongs_to :post, null: false

      t.timestamps null: false
    end
  end
end
