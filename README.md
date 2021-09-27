# chat-project
This is a chat project with sockets, ruby and react &lt;3

## Install
The back-end uses Ruby 2.5.5 and Rails 6. The front-end uses node 16.9.1. Make sure you have them installed in your machine before proceding. Clone the project or download it, then follow these steps:

### Back-end
Once you have it locally, install the gems `bundle install` and make the migrations `rake db:migrate`. Second thing you need to do is to create rooms, once it is not possible to create it with the front. Open the terminal and type `rails c`, then create the room with the following string: `Room.create!(title: "<YOUR TITLE>")`. To start it, you need to type `rails s`, then the app is going to operate in the default port of the rails applications, most likely `http://localhost:3000`.

### Front-end
You only need to have it locally and then install the dependences `npm install`. To start the app, type `npm start` and it's going to be available in the browser in the address `http://localhost:8080`.
