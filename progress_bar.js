$(document).ready(function(){
 $('#progressBar').progressbar({
             value: 1
         });
});
var statusTracker;
var percentage = 0;

function checkStatus() {
    percentage = percentage + 5;
    $('#progressBar').val(percentage);
    if (percentage == 100) stop();
}
function startProgress(){
    statusTracker = setInterval(checkStatus, 500);
}

function stop() {
	$('#progressBar').animate({
        'opacity': "0%"
    }, 200);
	
	$('#fa-icons').animate({
        'opacity': "100%"
    }, 200);
    clearInterval(statusTracker);
}
$(document).ready(startProgress); // JavaScript Document