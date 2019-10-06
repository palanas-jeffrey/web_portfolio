

$(document).ready( () => {
	$('#about2,#projects2,#contact2').css("color","#2884f2");


$(".instruction").delay(5000).fadeOut(2000);

$('#home2').click(() =>{
	
	$('#about2,#projects2,#contact2').css("color","#2884f2");
	$('#home2').css("color","#ffffff");
	location.reload().delay(1500);
});

$('#about, #about2').click(() =>{

	$('#home2,#projects2,#contact2').css("color","#2884f2")
	$('#about2').css("color","#ffffff");
});


$('#projects2').click(() =>{
	$('#home2,#about2,#contact2',).css("color","#2884f2")
	$('#projects2').css("color","#ffffff");
});


$('#contact,#contact2').click(() =>{
	$('#home2,#about2,#projects2',).css("color","#2884f2")
	$('#contact2').css("color","#ffffff");
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

function firstpage(){
	document.getElementById('containSection').innerHTML =
	`
		<div id="main" class="col-lg-10 center sec-up">

				<h2 id="a-q" class="text-center mb-3">
				 <span class="letter">G</span>
				 <span class="letter">o</span> 
				 <span class="letter">t</span>
				 <span class="letter">&nbsp</span>
				 <span class="letter">a</span>
				 <span class="letter">s</span>
				 <span class="letter">p</span>
				 <span class="letter">i</span>
				 <span class="letter">r</span>
				 <span class="letter">a</span>
				 <span class="letter">t</span>
				 <span class="letter">i</span>
				 <span class="letter">o</span>
				 <span class="letter">n</span>
				 <span class="letter">s</span>
				 <span class="letter">&nbsp</span>    
				 <span class="letter">l</span>
				 <span class="letter">e</span>
				 <span class="letter">t</span>
				 <span class="letter">&nbsp</span>
				 <span class="letter">u</span>
				 <span class="letter">s</span>
				 <span class="letter">&nbsp</span>
				 <span class="letter">m</span>
				 <span class="letter">a</span>
				 <span class="letter">k</span>
				 <span class="letter">e</span>
				 <span class="letter">&nbsp</span>
				 <span class="letter">a</span>
				 <span class="letter">n</span>
				 <span class="letter">&nbsp</span>
				 <span class="letter">a</span>
				 <span class="letter">c</span>
				 <span class="letter">t</span>
				 <span class="letter">i</span>
				 <span class="letter">o</span>
				 <span class="letter">n</span>
			

				</h2>
				<h2 class="title text-center animated fadeIn ">
					<span class="">
						i'm jeff, a Web Developer
					</span>
				</h2>
		
				<h4 class="center text-center">
					<span class="">
						<button id="g-projects" class="g-projects btn bg-b">
							View My Portfolio <i class="fas fa-arrow-circle-right"></i>
						</button>		
					</span>
				
				</h4>
			</div>
	`;
};

firstpage();


document.getElementById('about2').addEventListener('click', aboutpage);
function aboutpage(){
	document.getElementById('containSection').innerHTML=
		`
			<div id="about-sec" class="row">
					<div  class="col-lg-10 center ">
						<div id="about-con" class="row">
								<div class="col-lg-6 ">
									<img id="profile" class="img-fluid center p-3"  src="app/assets/images/me.jpg" alt="profile-pic">
								</div>
								<div class="col-lg-6">
									<div class="row">
										<div class="col-lg-12 center">
											<h2 class="wite title text-center bg-b">about</h2>
											<p class="wite bg-b ps text-justify">I'm Jeffrey Palanas a web developer/software engineer. A humble graduate of Tuitt Coding Bootcamp. Trained SEO Specialist (Search Engine Optimization Specialist) of SEO Phils. A career shifter from the field of marine engineering. Licensed Marine Engineer and a Graduate of Bachelor of Science in Marine Engineering from Southwestern University Maritime Regiment.</p>
											<!-- <a href="../assets/myresume.docx" class="wite" download>My resume.</a> -->

										</div>
										
									</div>
									
									<div class="row">
										<div class="col-lg-12 mt-3">
											<h2 class="text-center wite bg-b">skills</h2>
										</div>
									</div>
									<div class="row">
										<div class="col-lg-12 t-con-p mb-5 mt-4 bg-b">
											<div class="row">
												<div class=" my-2 col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/bootstrap.jpg">
												</div>
												<div class="my-2 col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/css.png">
												</div>
												<div class="my-2 col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/html.png">
												</div>
												<div class="my-2 col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/Javascript.png">
												</div>	
												<div class="my-2 col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/jquery.jpg">
												</div>	
												<div class="my-2 col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/laravel.png">
												</div>
												<div class="my-2 col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/mongodb.jpg">
												</div>
												<div class="my-2 col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/mysql.png">
												</div>
												<div class="my-2 col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/php.png">
												</div>
												<div class="my-2 col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/node.jpg">
												</div>
												<div class="my-2 col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/git.jpeg">
												</div>				
				

											</div>
											
										</div>	
											
									</div>
						
									
								</div>
						</div>
					</div>
					
				</div>
	`
	};

function projectsShow(){
	$("#containSection").html(`
			<div id="project-sec" class="project-con row">
				<div class="col-lg-10 center">
					<h2 id="portfolio-t" class="wite title text-center bg-b  mt-5">portfolio</h2>
					<div class="row">
						<div class="col-lg-6 img-ex img-s bg-img center">
							<div id="img-i" class="">
								<a href="https://palanas-jeffrey.github.io/marineenjneering77/" target="_blank" >
									<img  class="img-fluid center" src="app/assets/images/marineenjneering.png">
								</a>
							</div>
							
						</div>
						<div class="col-lg-6">
							<h3 class="wite bg-b text-center t-s m-top">Marine Enjneering</h3>
							<p class="wite bg-b ">Marine Enjneering aims to provide information in the field of Marine Engineering to an aspiring Marine Engineering student and officer. It is a dive in discussion to give a brief information to discover the said field.</p>
							<p class="wite bg-b ">Marine Enjneering utilizes Bootstrap4, making it mobile-first and responsive. Made with HTML and with touch of CSS.</p>
							<div class=" bg-b my-1">
								<a href="https://palanas-jeffrey.github.io/marineenjneering77/" target="_blank" class="wite vist-a" >Visit the Site <i class="fas fa-arrow-circle-right" ></i></a>
							</div>
							
						</div>					
					</div>
					
				

					<div class="row">
						<div class="col-lg-6 img-ex img-s bg-img center">
							<div id="img-i" class="">
								<a href="https://mighty-wildwood-39125.herokuapp.com"  target="_blank" >
									<img  class="img-fluid center" src="app/assets/images/alfalaval.png">
								</a>
							</div>
							
						</div>
						<div class="col-lg-6">
							<h3 class="wite bg-b text-center t-s m-top">Alfa Laval Purifier Spares Inventory</h3>
							<p class="wite bg-b ">Alfa Laval Purifier Spares Inventory is an asset management app. It aims to give a convenient way to make requisitions onboard ship while making an efficient way to make the inventory process and requisition even simpler. Providing a productive way to lessen the errors of requested parts.</p>
							<!-- <h4 class="wite bg-b text-center t-s">Technology</h4> -->
							<p class="wite bg-b ">Alfa Laval Purifier Spares Inventory utilizes Laravel, MySQL, Bootstrap, CSS and HTML. Features includes CRUD for users and Admin.</p>
							<div class="wite bg-b my-1 ">
								<a href="https://mighty-wildwood-39125.herokuapp.com"  target="_blank" class=" wite" >Visit the Site <i class="fas fa-arrow-circle-right"></i></a>
							</div>
							
						</div>					
					</div>
				
					<div class="row ">
						<div class="col-lg-6 img-ex img-s bg-img center">
							<div id="img-i" class="">
								<a href="https://whispering-dusk-67095.herokuapp.com" target="_blank">
									<img  class="img-fluid center" src="app/assets/images/hotel.png">
								</a>
							</div>
							
						</div>
						<div class="col-lg-6">
							<h3 class="wite bg-b text-center t-s m-top">Ezzy Hotel</h3>
							<p class="wite bg-b ">Ezzy hotel is a hotel booking website providing a place one can call home.</p>
							<p class="wite bg-b ">Ezzy Hotel utilizes of Express.js and Node.js in the backend while Laravel, Javascript, jQuery, CSS, and Bootstrap in frontend. MongoDB for database. Frontend and backend were at separated concerns, Fetch API plays its role for network request. It also has some CRUD functionality for both user and admin.</p>
							<div class="wite bg-b my-1">
								<a href="https://whispering-dusk-67095.herokuapp.com" target="_blank" class=" wite" >Visit the Site <i class="fas fa-arrow-circle-right"></i></a>
							</div>	
							
						</div>					
					</div>

				</div>
				

			</div>

	`);
	$('#home2,#about2,#contact2').css("color","#2884f2")
	$('#projects2').css("color","#ffffff");
}


document.getElementById('g-projects').addEventListener('click',projectsShow);
document.getElementById('projects2').addEventListener('click',projectsShow);


$("#contact2").click(()=>{
	document.getElementById('containSection').innerHTML =
		`
			<div id="contact-sec" class="row">
				<div class="col-lg-6 center mb-4">
					<h2 class="text-center title wite bg-b">contact</h2>
					
					<form >
						<div class="form-group bg-b">
							<label for="name" class="wite">Name:</label>
							<input id="name" name="name" type="name" class="form-control">
							<span></span>
						</div>
						<div class="form-group bg-b">
							<label for="email" class="wite">Email:</label>
							<input id="email" name="email" type="email" class="form-control">
							<span></span>
						</div>
						<div class="form-group bg-b">
							<label for="topic" name="topic" class="wite">Topic:</label>
							<input id="topic" type="text" name="topic" class="form-control">
							<span></span>
						</div>
						<div class="form-group bg-b">			
							<label for="contactNo" class="wite">Contact:</label>
							<input id="contactNo" name="contactNo" type="number" class="form-control">
							<span></span>
						</div>

						<div class="form-group bg-b">
							<label for="message" class="wite">Message:</label>
							<textarea id="message" name="message" class="form-control" rows="3" placeholder="Message Here"></textarea>
							<span id="reminder"></span>
						</div>
						<h4 id="notification" class="text-center notification"></h4>
						<h4 id="warning" class="text-center warning"></h4>
						<div class="bg-b">
							<button id="submit" type="" class="btn btn-block p-3 my-4" >Submit</button>
						</div>
					</form>
				</div>
				
			</div>	
	`;
});



$('#a-q').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '#a-q .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: function(el, i) {
      return 150 * (i+1)
    }
  }).add({
    targets: '#a-q',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


});



