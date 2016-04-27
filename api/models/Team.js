/**
* Team.js
*
* @description :: A group of players who play in a Match against another Team
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		required: 'true'
  	},
  	players: {
  		collection: 'player',
  		via: 'teams'
  	}
  }
};

