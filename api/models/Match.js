/**
 * Match.js
 *
 * @description :: An instance where 2 Teams get together to play a Match of cricket
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var moment = require('moment');

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
    },

    beforeCreate: function(values, cb) {
        sails.log.debug('Validating Match object before creation');

        Match.find({
            where: {
                homeTeam: [values.homeTeam, values.awayTeam],
                awayTeam: [values.awayTeam, values.homeTeam]
            }
        }).then(function(matches) {
            if (matches.length == 0) {
                sails.log.debug('No Matches between these sides before. Creating Match');
                cb();
            } else {
                var proposedStart = moment(values.startDate);

                var isClash = _(matches).some(function(match) {
                    return proposedStart.isSame(match.startDate, 'day');
                });

                if (isClash) { 
                  var message = 'Can not create Match. These teams have played each other on this date previously';
                  sails.log.debug(message);
                  cb(message); 
                } else { cb(); }
            }
        }).catch(function(error) {
            sails.log.error(error);
            cb(error);
        });
    },
};
