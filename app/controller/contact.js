
angular.module('bridgeApp').controller('contactCtrl', function ($scope, $http, $templateCache) {
    $scope.codeStatus = "";
    $scope.submit = function () {
        var name = this.name;
        var email = this.email;
        var subject = this.subject;
        var profile = this.profile;
        var message = this.message;
         //calling validation functuin
        Validation(name, email, subject, profile, message);

    }
    /**
     * @param-name-string
     * @param-email-string
     * @param-subject-string
     * @param-profile-string
     * @param-profile-string
     * function for input validation
     */
    function Validation(name, email, subject, profile, message) {
        
        var letters = /^[A-Za-z]+$/;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (name==null || name=="") {
             alert('Username must have alphabet characters only');
          

        } //end of if
        else {
              if (email.match(mailformat)) {
                var formData = {
                    'name': this.name,
                    'email': this.email,
                    'subject': this.subject,
                    'profile': this.profile,
                    'message': this.message
                }
               
                // Accessing the Angular $http Service to send data via REST Communication to Node Server.
                $http.post('https://bridge941.herokuapp.com/setData', formData).success(function (response) {
                    console.log("success"); // Getting Success Response in Callback
                    $scope.codeStatus = response.data;
                        console.log(response)
                }).error(function (response) {
                    console.log("error"); // Getting Error Response in Callback
                    $scope.codeStatus = response || "Request failed";
                    console.log($scope.codeStatus);
                });
                // Calling the list function in Angular Controller to show all current data in HTML
                return false;


            }
            else {
                alert("You have entered an invalid email address!");

            }
           

        }

    }


});