/**
 *  Services for giving info of Fellows
 * */
 angular.module('bridgeApp')
.service('fellowService1', function () {
       //json data
    var fellow1 = '  { "fellows1": [' + '{"image": "images/Chandan-Krishnan.jpg","email":"https://in.linkedin.com/in/chandan-krishnan-76025077","name":"Chandan Krishnan"},' +
                                       '{"image": "images/Nadimuddin.jpg","email":"https://in.linkedin.com/in/nadimuddin-shaikh-321305113", "name": "Nadimuddin Shaikh"},'+
                                       '{"image": "images/Muhammad-Chhota.jpg","email":"https://in.linkedin.com/in/muhammad-chhota-b4ab09b1", "name": "Muhammad Chhota"},' +
                                       '{"image": "images/priyanka.jpg","email":"https://in.linkedin.com/in/priyanka-bodadkar-428b2b11b", "name": "Priyanka Bodadkar"},'+
                                      '{"image": "images/ippe.jpg","email":"https://in.linkedin.com/in/ippe-venkataswamy-896a49107","name": "Ippe Venkataswamy"},' +
                                    
                                      '{ "image": "images/Mukesh-Sharma.jpg","email":"https://in.linkedin.com/in/mukesh-sharma-b9298bb4","name": "Mukesh Sharma"},' +
                                     '{"image": "images/balram.jpg","email":"https://in.linkedin.com/in/balram-cheryala-7080b659","name": "Balram Cheryala"},'+
                                      '{"image": "images/Prathamesh-Naik.jpg","email":"https://in.linkedin.com/in/prathamesh-naik-986996126","name": "Prathamesh Naik"},' +
                                      '{"image": "images/Pratik-Ranjane.jpg","email":"https://in.linkedin.com/in/pratik-ranjane-79904611a","name": "Pratik Ranjane"},' +
                                      
                                       
                                      
                                      '{"image": "images/Sumeet-Jagtap.jpg","email":"https://in.linkedin.com/in/sumeet-jagtap-22448162", "name": "Sumeet Jagtap"},'+
                                   
                                     '{"image": "images/Jayprakash.jpg","email":"https://in.linkedin.com/in/jayprakash-yadav-45657095","name": "Jayprakash Yadav"},'+
                                  
                                          
                                          '{"image": "images/Vamsee-Vemula.jpg","email":"https://in.linkedin.com/in/vamsee-mohan-krishna-vemula-354b0611b","name": "Vamsee Vemula"},'+
                                          
                                             '{"image": "images/Raju-shinde.jpg","email":"https://in.linkedin.com/in/vamsee-mohan-krishna-vemula-354b0611b", "name": "Raju Shinde"},'+
                                           '{"image": "images/Rahul.jpg","email":"https://in.linkedin.com/in/rahul-tiwari-981979109", "name": "Rahul Tiwari"},'+
                                           '{"image": "images/Nakka-Lakshman.jpg","email":"https://in.linkedin.com/in/nakka-lakshman-318994114", "name": "Nakka Lakshman"},'+
                                             '{"image": "images/habeeb.jpg","email":"https://in.linkedin.com/in/akkar-habeeb-9b2768126", "name": "Akkar Habeeb"},'+
                                      
                                       '{"image": "images/Prachi.jpg","email":"https://in.linkedin.com/in/prachi-sugdare-046601115", "name": "Prachi Sugdare"},'+
                                         '{"image": "images/pranali.jpg","email":"https://in.linkedin.com/in/pranali-patil-7a391345","name": "Pranali Patil"},' +
                                       '{"image": "images/Lokesh.jpg","email":"https://in.linkedin.com/in/lokesh-kumar-pedda-1b3768126", "name": "Lokesh Pedda"}]}';

    //converting json object to string object  
    details1 = JSON.parse(fellow1);
    //returning string object to controller

 return {
            infoFellow1: function ()
             {
              return info(); 
             }
     
          }

function info()
    {
            return details1.fellows1;
    }
});

