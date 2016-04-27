/**
* Match.js
*
* @description :: An instance where 2 Teams get together to play a Match of cricket
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	homeTeam: {
  		model: 'team',
  	},
  	awayTeam: {
  		model: 'team',
  	},
  	startDate: {
  		type: 'datetime',
  		required: true
  	},
  	numberOfInnings: {
  		type: 'integer',
  		required: true
  	},
  	limitedOvers: {
  		type: 'integer'
  	},
  }
};

