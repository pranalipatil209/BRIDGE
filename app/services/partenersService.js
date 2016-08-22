/**
 * Services for giving info of Parteners
 * */

angular.module('bridgeApp')
.service('partenerService', function () {
    //json data
    var Partener = ' { "Parteners": [' + '{"image": "images/partners/craftsvilla_logo1.png","email": "http://www.craftsvilla.com/"},' +
        ' {"image":"images/partners/greytiphr-logo.png","email":"https://www.greythr.com/"},' +
        '{"image":"images/partners/TimesofMoney_Logo.png","email":"https://www.timesofmoney.com/TOM/index.html"},' +
        '{"image":"images/partners/zopper.png","email":"https://www.zopper.com/"},' +
        '{"image":"images/partners/meru_logo.jpg","email":"https://www.merucabs.com/" },' +
        '{"image":"images/partners/Clover-Infotech.png","email":"http://www.cloverinfotech.com/"},' +
        '{"image":"images/partners/Hurix%20Logo%20_High%20res.png","email":"https://hurix.com/"},' +
        '{"image":"images/partners/heena.png","email":"https://projectheena.com/"},' +
        '{"image":"images/partners/xpresson.png","email":"http://www.xpressonnet.com/"},' +
        '{ "image":"images/partners/99adventure.png","email":"#"}]}';

     //converting json object to string object   
     detailp = JSON.parse(Partener);
     //returning string object to controller
    
return {
           infoPartener: function ()
             {
              return info();
             }
     
          }

function info()
    {
            return detailp.Parteners;
    }

});