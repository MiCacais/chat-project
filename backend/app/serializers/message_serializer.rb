class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :room_id

  attribute :user_name do
    User.find(object.user_id).name
  end
end
