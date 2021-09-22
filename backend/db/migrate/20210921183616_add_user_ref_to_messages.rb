class AddUserRefToMessages < ActiveRecord::Migration[6.1]
  def change
    add_reference :messages, :user, foreign_key: true
    add_reference :messages, :room, foreign_key: true
  end
end
