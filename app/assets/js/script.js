	
$('#home').click(() =>{
	$("#project-sec, #about-sec, #contact-sec").fadeOut(300, function() {
		$("#main").fadeIn(1000);	
	});
});

$('#about').click(() =>{
	$("#main, #project-sec, #contact-sec").fadeOut(300, function() {
		$("#about-sec").fadeIn(1000);	
	})
	
});

$('#g-projects').click(() =>{
	$("#main, #about-sec, #contact-sec").fadeOut(300, function() {
		$("#project-sec").fadeIn(1000);	
	})
});

$('#projects').click(() =>{
	$("#main, #about-sec, #contact-sec").fadeOut(300, function() {
		$("#project-sec").fadeIn(1000);	
	})
});


$('#contact').click(() =>{
	$("#main, #about-sec, #project-sec").fadeOut(300, function() {
		$("#contact-sec").fadeIn(1000);	
	})
});

function validate_message(){
	let errors = 0;

	var name = $('#name').val();
	var email = $('#email').val();
	var topic = $('#topic').val();
	var contactNo = $('#contactNo').val();
	var message = $('#message').val();

	if(name.length == 0){
		$("#name").next().html("Name is required.");
		$("#name").next().css('color','red');
		$("#name").next().css('background','white');
		errors++;
	}else{
		$("#name").next().html('');
	}
	if(!email.includes("@")){
		$('#email').next().html("Please provide a valid email.");
		$('#email').next().css('color', 'red');
		$('#email').next().css('background', 'white');
		errors++;
	}else{
		$('#email').next().html('');
	}
	if(topic.length == 0){
		$('#topic').next().html("Please include a topic.");
		$('#topic').next().css('color', 'red');
		$('#topic').next().css('background','white');
		errors++;
	}else{
		$('#topic').next().html('');
	}
	if(message.length == 0){
		$('#reminder').html("Please add a message.");
		$('#reminder').css("color", "red");
		$('#reminder').css('background',"white");
		errors++;
	}else{
		$('#reminder').html('');
	}

	if(errors > 0){
		return false;
	}else{
		return true;
	}
 }

$("#submit").click(()=>{

	if(validate_message()){

		var name = $('#name').val();
		var email = $('#email').val();
		var topic = $('#topic').val();
		var contactNo = $('#contactNo').val();
		var message = $('#message').val();

	$.ajax({
		"url":'app/controllers/send_mail.php',
		"method":'POST',
		"data":{
			'name': name,
			'email': email,
			'topic': topic,
			'contactNo': contactNo,
			'message' : message
		},
		"success":(data)=>{
			console.log(data);
			if (data =="success"){
				$('#notification').html( `<span id="sMsg">Your message has been successfully sent.</span>`);
				$('#sMsg').fadeOut(15000);
			}else{		
				$('#warning').html( `<span id="sWng">Message sending failed.</span>`);
				$('#sWng').fadeOut(20000);
			}
		}
	})
	}
})



$(document).ready( () => {



});



