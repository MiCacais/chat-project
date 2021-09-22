class RoomChannel < ApplicationCable::Channel

  def subscribed
    if params[:room].present?
      @room = Room.find_by(id: params[:room])
      stream_for @room
    end
  end
end