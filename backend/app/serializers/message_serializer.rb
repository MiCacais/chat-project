class MessageSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id, :room_id
end
