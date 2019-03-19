	
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
			if (data.includes("success")){
				// $("#contact-sec").fadeOut(300, function() {
				// 	$("#main").fadeIn(1000);	
				// });
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



// particlesJS("particles-js", {"particles":{"number":{"value":12,"density":{"enable":true,"value_area":1000}},
// 	"color":{"value":"#304ffe"},"shape":{"type":"polygon","stroke":{"width":0,"color":"#304ffe"},"polygon":{"nb_sides":6},"image":{"src":"img/github.svg","width":800,"height":800}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":12,"random":true,"anim":{"enable":true,"speed":2,"size_min":1.6241544246026904,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#304ffe","opacity":0.4,"width":1},"move":{"enable":true,"speed":2,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"window","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update;

// 	 stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;



