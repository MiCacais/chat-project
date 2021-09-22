class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :uid, :name
  has_many :messages
  has_many :rooms, through: :messages
end
