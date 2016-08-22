/**
 *  Services for giving info of Fellows
 * */
 angular.module('bridgeApp')
.service('fellowService', function () {
       //json data
    var fellow = '  { "fellows": [' + '{"image": "images/Naresh-Narsing.jpg","email":"https://www.linkedin.com/in/naresh-narsing-821239110","name": "Naresh Narsing"},' +
                                        '{"image": "images/Priyanka-Kanase.jpg","email":"https://in.linkedin.com/in/priyanka-kanse-6315ab104","name": "Priyanka Kanase"},' +
                                        '{"image": "images/Eshvar-Mali.jpg","email":"https://in.linkedin.com/in/komal-kamble-a231a1112","name": "Komal Kamble"},' +
                                        '{"image": "images/Eshvar-Mali.jpg","email":"https://in.linkedin.com/in/sharvari-shejwal-133452107","name": "Sharvari Shejwal"},' +
                                      '{"image": "images/Mrunal-Desale.jpg","email":"https://in.linkedin.com/in/mrunal-desale-70576aa4","name": "Mrunal Desale"},' +
                                       '{"image": "images/Saurabh-More.jpg","email":"https://in.linkedin.com/in/sourabh-more-303733106", "name": "Saurabh More"},' +
                                     
                                      '{"image": "images/Azhar-Khan.jpg","email":"https://in.linkedin.com/in/azhar-khan-a62a79111","name": "Azhar Khan"},' +
                                      '{"image": "images/Anurag-Singh.jpg","email":"https://in.linkedin.com/in/anurag-singh-2a5a95b4","name": "Anurag Singh"},' +
                                      '{ "image": "images/Vivek-Mishra.jpg","email":"https://in.linkedin.com/in/vivek-mishra-89806561","name": "Vivek Mishra"},' +
                                      
                                      '{"image": "images/Eshvar-Mali.jpg","email":"https://in.linkedin.com/in/ansari-sahel-7222a8a1","name": "Sahel Ansari"},' +
                                      
                                      '{"image": "images/Eshvar-Mali.jpg","email":"https://in.linkedin.com/in/eshvar-mali-7b705386", "name": "Eshvar Mali"}]}';

    //converting json object to string object  
    details = JSON.parse(fellow);
    //returning string object to controller

 return {
            infoFellow: function ()
             {
              return info();
             }
     
          }

function info()
    {
            return details.fellows;
    }
});

