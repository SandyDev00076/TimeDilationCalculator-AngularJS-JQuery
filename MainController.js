app.controller('MainController', function ($scope) {
    console.log('Inside Main Controller');

    $scope.dist = 0; // dist in KM
    $scope.speed = 0; // speed in KMPH
    $scope.speedOfLight = 1080000000; // speed of light in KMPH

    $scope.timeOnEarth = 0;
    $scope.timeOnSpaceship = 0;
    $scope.dilatedDistance = 0;
    $scope.ageDifference = 0;

    $('.userzone').hide();
    $('.userresult').hide();
    $('.again').hide();

    $('.letsstart').click(() => {
        $('.userzone').slideDown(1000);
        $('.letsstart').fadeOut(500);
    });

    $('.again').click(() => {
        $('.userresult').slideUp(1000);
        $('.userzone').slideDown(1000);
        $('.again').fadeOut(500);
    });

    $('.usersubmit').click(() => {

        if ($('#dist').val() && $('#speed').val()) {
            // writing the logic for time dilation calculation
            var distOption = document.getElementById('du');
            if (distOption.options[distOption.selectedIndex].value === "MILES") {
                $scope.dist = $('#dist').val() * 1.6093;
            } else if (distOption.options[distOption.selectedIndex].value === "LIGHT YEARS") {
                $scope.dist = $('#dist').val() * 9.46 * Math.pow(Math.E, 12);
            } else if (distOption.options[distOption.selectedIndex].value === "ASTRONOMICAL UNITS") {
                $scope.dist = $('#dist').val() * 149597871;
            } else {
                $scope.dist = $('#dist').val();
            }

            var speedOption = document.getElementById('su');
            if (speedOption.options[speedOption.selectedIndex].value === "MILES/HOUR") {
                $scope.speed = $('#speed').val() * 1.6093;
            } else if (speedOption.options[speedOption.selectedIndex].value === "METRE/SEC") {
                $scope.speed = $('#speed').val() * 3.6;
            } else if (speedOption.options[speedOption.selectedIndex].value === "KM/SEC") {
                $scope.speed = $('#speed').val() * 3600;
            } else if (speedOption.options[speedOption.selectedIndex].value === "MILES/SEC") {
                $scope.speed = $('#speed').val() * 1.6093 * 3600;
            } else {
                $scope.speed = $('#speed').val();
            }

            if($scope.speed > $scope.speedOfLight) {
                alert("Speed can't be greater than speed of light!");
                return;
            }

            $scope.timeOnEarth = $scope.dist / $scope.speed;
            $scope.timeOnSpaceship = $scope.timeOnEarth * Math.sqrt(1 - (Math.pow($scope.speed, 2) / Math.pow($scope.speedOfLight, 2)));
            $scope.dilatedDistance = $scope.speed * $scope.timeOnSpaceship;
            $scope.ageDifference = (2 * $scope.timeOnEarth) - (2 * $scope.timeOnSpaceship);

            $scope.$digest();

            console.log('Time Elapsed On Earth - ' + $scope.timeOnEarth);
            console.log('Time Elapsed On SpaceShip - ' + $scope.timeOnSpaceship);
            console.log('Dilated Distance - ' + $scope.dilatedDistance);
            console.log('Age Difference - ' + $scope.ageDifference);

            $('.userzone').slideUp(1000);
            $('.again').fadeIn(500);
            $('.userresult').slideDown(1000);
        }
        else if ($('#dist').val() == 0) {
            alert("Distance can't be zero or null! Sorry!");
        }
        else if ($('#speed').val() == 0) {
            alert("Speed can't be zero or null! Sorry!");
        }
    });
});