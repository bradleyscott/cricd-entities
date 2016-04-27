# cricd-entities
cricd-entities is a RESTful API build using Sails.js to record cricket players, the teams they play for and the matches they play
It is intended to provide a component to assist the [cricd](https://github.com/ryankscott/cricd) project which is an open platform for cricket scoring

## Running the cricd-entities service in Docker
If you have Docker installed simply run `docker run -d -p 1337:1337 bradleyscott/cricd-entities` in your terminal

Then to access the service you can visit the endpoints at:
`http://localhost:1337/players`
`http://localhost:1337/teams`
`http://localhost:1337/matches`

## Running cricd-entities locally
So long as you have Node.js installed you can run the cricd-entities service locally by:
`git clone [this repository]`
`npm install`
`sails lift`


