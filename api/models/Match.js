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
            required: true,
        },
        awayTeam: {
            model: 'team',
            required: true,
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
