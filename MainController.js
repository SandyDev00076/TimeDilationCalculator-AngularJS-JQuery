app.controller('MainController', function($scope) {
    console.log('Inside Main Controller');
    $('.userzone').hide();
    $('.userresult').hide();
    
    $('.letsstart').click(() => {
        $('.userzone').slideDown(1000);
        $('.letsstart').fadeOut(500);
    });

    $('.usersubmit').click(() => {
        $('.userzone').slideUp(1000);
        $('.userresult').slideDown(1000);
    });
});