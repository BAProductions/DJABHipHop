$(document).ready(function(){
 $('#loadingsScreen').progressbar({
             value: 1
         });
});
var statusTracker;
var percentage = 0;

function checkStatus() {
	percentage = percentage + 5;
    
	$('#loadingsScreen #progressBar').val(percentage);
	$('#loadingsScreen span').text(percentage + "%");
	$('#loadingsScreen span').animate({
        'left': percentage + "%"
    }, 0);
	
    if (percentage == 100) stop();
}
function startProgress(){
    statusTracker = setInterval(checkStatus, 500);
}

function stop() {
	$('#loadingsScreen').animate({
        'opacity': "0%"
    }, 200).delay(400).css({'display': "none"});
	
	$('#fa-icons').animate({
        'opacity': "100%"
    }, 200);
    clearInterval(statusTracker);
}
$(document).ready(startProgress); // JavaScript Document