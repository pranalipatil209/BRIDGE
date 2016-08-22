
/**
 *  Services for giving info of Team
 * */

angular.module('bridgeApp')
.service('teamService', function () {

                //json data
                var team = ' { "Team": [' + '{"image":"images/face-two.jpg","name":"Narayan Mahadevan", "ocupation":"CTO Mauj Mobile Advisor & Technologist","email":"https://in.linkedin.com/in/narayanprofile"},' +
                                            '{"image":"images/ashish.jpg","name": "Ashes Vats","ocupation":"Engineering Head and Founding Member","email":"        https://in.linkedin.com/in/ashes-vats-50734046"},' +
                                            '{"image": "images/vidya.jpg","name": " Shreevidya Ramamurthy ","ocupation":"Relationship Head and Founding Member","email":"https://in.linkedin.com/in/narayanprofile"}]}';

    //converting json object to string object                                          
    detailt = JSON.parse(team);

    //returning string object to controller
    return {
            infoTeam: function ()
             {
              return info();
             }
     
          }

function info()
    {
            return detailt.Team;
    }
});