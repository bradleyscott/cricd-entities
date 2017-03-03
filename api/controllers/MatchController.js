/**
 * MatchController
 *
 * @description :: Server-side logic for managing Matches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var moment = require('moment');

module.exports = {
    create: function(req, res) {
        sails.log.debug('Validating Match object before creation');

        Match.find({
            where: {
                homeTeam: [req.body.homeTeam, req.body.awayTeam],
                awayTeam: [req.body.awayTeam, req.body.homeTeam]
            }
        }).then(function(matches) {
            if(matches.length == 0) {
                sails.log.debug('No Matches between these sides before. Creating Match');
                createMatch(req, res);
            } else {
                var proposedStart = moment(req.body.startDate);

                var isClash = _(matches).find(function(match) {
                    return proposedStart.isSame(match.startDate, 'day');
                });

                if(isClash) {
                    var message = 'Can not create Match. These teams have played each other on this date previously';
                    sails.log.debug(message);
                    return res.ok(isClash);
                } else { createMatch(req, res); }
            }
        }).catch(function(error) {
            sails.log.error(error);
            return res.serverError(error);
        });

    }
};

var createMatch = function(req, res) {
    sails.log.debug('Attempting to create match...');

    Match.create(req.body).exec(function(err, newMatch){
        if(err) {
            sails.log.error(error);
            return res.error(error);
        } else {
            sails.log.debug('Match successfully created');
            return res.created(newMatch);
        }
    });

};

