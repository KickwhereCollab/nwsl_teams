(function() {
  var app = angular.module('league', ['teamInfo-directives']);

  app.controller('TeamController', function() {
    this.clubs = teams;
  });

  var teams = [
    {
      teamName: 'Boston Breakers',
      stadium: 'Jordan Field',
      owner: 'Boston Women\'s Soccer, LLC',
      headCoach: 'Matt Beard',
      teamLogo: 'http://tinyurl.com/j2ey6y2',
      website: 'http://www.bostonbreakerssoccer.com/',
      roster: []
    },
    {
      teamName: 'Chicago Red Stars',
      stadium: 'Toyota Park',
      owner: 'Amim Whisler',
      headCoach: 'Rory Dames',
      teamLogo: 'http://tinyurl.com/j7voky7',
      website: 'http://chicagoredstars.com/',
      roster: []
    },
    {
      teamName: 'FC Kansas City',
      stadium: 'Swope Soccer Village',
      owner: 'Brian Budzinski, Chris Likens, Brad Likens, Greg Likens',
      headCoach: 'Vlatko Andonovski',
      teamLogo: 'http://tinyurl.com/gr7evmo',
      website: 'http://www.fckansascity.com/',
      roster: []
    },
    {
      teamName: 'Houston Dash',
      stadium: 'BBVA Compass Stadium',
      owner: 'Gabriel Brener, Oscar De La Hoya, Jake Silverstein, Ben Guill',
      headCoach: 'Randy Waldrum',
      teamLogo: 'http://tinyurl.com/je4unzy',
      website: 'http://www.houstondynamo.com/houstondash',
      roster: []
    },
    {
      teamName: 'Orlando Pride',
      stadium: 'Citrus Bowl',
      owner: 'Flávio Augusto da Silva, Phil Rawlins',
      headCoach: 'Tom Sermanni',
      teamLogo: 'http://tinyurl.com/h32b4ae',
      website: 'http://orlando-pride.com/',
      roster: []
    },
    {
      teamName: 'Portland Thorns FC',
      stadium: 'Providence Park',
      owner: 'Merritt Paulson',
      headCoach: 'Mark Parsons',
      teamLogo: 'http://tinyurl.com/zrer66r',
      website: 'http://www.timbers.com/thornsfc',
      roster: []
    },
    {
      teamName: 'Seattle Reign FC',
      stadium: 'Memorial Stadium',
      owner: 'Bill Predmore, Teresa Predmore',
      headCoach: 'Laura Harvey',
      teamLogo: 'http://tinyurl.com/gvnmbuo',
      website: 'http://seattlereignfc.com/',
      roster: []
    },
    {
      teamName: 'Sky Blue FC',
      stadium: 'Yurcak Field',
      owner: 'Philip D. Murphy, Steven H. Temares',
      headCoach: 'Christy Holly',
      teamLogo: 'http://tinyurl.com/gsbnghe',
      website: 'http://skybluefc.com/',
      roster: []
    },
    {
      teamName: 'Washington Spirit',
      stadium: 'Maryland SoccerPlex',
      owner: 'Bill Lynch ',
      headCoach: 'Jim Gabarra',
      teamLogo: 'http://tinyurl.com/hj6dpol',
      website: 'http://washingtonspirit.com/',
      roster: []
    },
    {
      teamName: 'Western New York Flash',
      stadium: 'Sahlen\'s Stadium',
      owner: 'Joe Sahlen',
      headCoach: 'Paul Riley',
      teamLogo: 'http://tinyurl.com/hbatwz8',
      website: 'http://www.wnyflash.com/',
      roster: []
    }
  ];


})();
