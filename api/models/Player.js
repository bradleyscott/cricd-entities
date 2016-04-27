/**
* Player.js
*
* @description :: Describes a person who plays cricket for a Team in a Match
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		required: true
  	},
  	dateOfBirth: {
  		type: 'date'
  	},
  	gender: {
  		type: 'string',
  		enum: ['male', 'female']
  	},
  	teams: {
  		collection: 'team',
  		via: 'players'
  	}
  }
};

