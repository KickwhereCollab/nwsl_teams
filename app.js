(function() {
  var app = angular.module('league', ['teamInfo-directives']);

  app.controller('TeamController', function() {
    this.clubs = teams;
  });

  var teams = [
    {
      teamName: 'Boston Breakers',
      stadium: 'Harvard Stadium',
      manager: 'Tom Durkin',
      headCoach: 'Matt Beard',
      teamLogo: 'http://tinyurl.com/j2ey6y2',
      website: 'http://www.bostonbreakerssoccer.com/',
      roster: [
        {
          playerName: 'Jami Kranich',
          position: 'Goalkeeper',
          jerseyNumber: 2
        },
        {
          playerName: 'Lauren Lazo',
          position: 'Defender',
          jerseyNumber: 3
        },
        {
          playerName: 'Kassey Kallman',
          position: 'Defender',
          jerseyNumber: 5
        },
        {
          playerName: 'Jami Kranich',
          position: 'Goalkeeper',
          jerseyNumber: 2
        },
        {
          playerName: 'Jami Kranich',
          position: 'Goalkeeper',
          jerseyNumber: 2
        },
        {
          playerName: 'Jami Kranich',
          position: 'Goalkeeper',
          jerseyNumber: 2
        },
        {
          playerName: 'Jami Kranich',
          position: 'Goalkeeper',
          jerseyNumber: 2
        },
        {
          playerName: 'Jami Kranich',
          position: 'Goalkeeper',
          jerseyNumber: 2
        }

      ]
    },
    {
      teamName: 'Chicago Red Stars',
      stadium: 'Toyota Park',
      manager: 'Rory Dames',
      headCoach: 'Rory Dames',
      teamLogo: 'http://tinyurl.com/j7voky7',
      website: 'http://chicagoredstars.com/',
      roster: []
    },
    {
      teamName: 'FC Kansas City',
      stadium: 'Swope Soccer Village',
      manager: '',
      headCoach: 'Vlatko Andonovski',
      teamLogo: 'http://tinyurl.com/gr7evmo',
      website: 'http://www.fckansascity.com/',
      roster: []
    },
    {
      teamName: 'Houston Dash',
      stadium: 'BBVA Compass Stadium',
      manager: 'Randy Waldrum',
      headCoach: 'Randy Waldrum',
      teamLogo: 'http://tinyurl.com/je4unzy',
      website: 'http://www.houstondynamo.com/houstondash',
      roster: []
    },
    // {
    //   teamName: 'Orlando Pride',
    //   stadium: ,
    //   manager: ,
    //   headCoach: ,
    //   teamLogo: ,
    //   website: ,
    //   roster: []
    // },
    // {
    //   teamName: 'Portland Thorns FC',
    //   stadium: ,
    //   manager: ,
    //   headCoach: ,
    //   teamLogo: ,
    //   website: ,
    //   roster: []
    // },
    // {
    //   teamName: 'Seattle Reign FC',
    //   stadium: ,
    //   manager: ,
    //   headCoach: ,
    //   teamLogo: ,
    //   website: ,
    //   roster: []
    // },
    // {
    //   teamName: 'Sky Blue FC',
    //   stadium: ,
    //   manager: ,
    //   headCoach: ,
    //   teamLogo: ,
    //   website: ,
    //   roster: []
    // },
    // {
    //   teamName: 'Washington Spirit',
    //   stadium: ,
    //   manager: ,
    //   headCoach: ,
    //   teamLogo: ,
    //   website: ,
    //   roster: []
    // },
    // {
    //   teamName: 'Western New York Flash',
    //   stadium: ,
    //   manager: ,
    //   headCoach: ,
    //   teamLogo: ,
    //   website: ,
    //   roster: []
    // }
  ];


})();
