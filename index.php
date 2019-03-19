
<?php $page= "home"; ?>


<?php require_once './app/partials/template.php'; ?>

<?php function get_page_content() { ?>
 
	<div class="row cont-h" style="margin-left: 0px; margin-right: 0px;">
	
			

		<div id="pane"  class="b-cont col-sm-12" data-toggle="collapse" data-target="#nav-pane">
			<div id="pane-con" class=" col-sm-1 col-lg-1 col-md-1">
				<div class="row btn-con bg-b">
					<div class=" col-sm-12 bg-b">
						<button id="menu" class=" btn bg-b my-2" type="button" data-toggle="collapse" data-target="#nav-pane">
						<i class="fas fa-bars"></i>
						</button>	
					</div>
					<div id="nav-pane" class="bg-b collapse row col-sm-12">
						<div id="home" class="r-90 selection bull-0  my-5 bord ">
							<span data-toggle="collapse" data-target="#nav-pane">home</span>
						</div>
						<div id="about" class="r-90 selection bull-0  my-5 bord">
							<span data-toggle="collapse" data-target="#nav-pane">about</span>
						</div>
						<div id="projects" class="r-90 selection bull-0  my-5 bord ">
							<span data-toggle="collapse" data-target="#nav-pane">portfolio</span>
						</div>
						<div id="contact" class="r-90 selection bull-0  my-5 bord">
							<span data-toggle="collapse" data-target="#nav-pane">contact</span></div>
					</div>
				</div>
			</div>
		</div>

		<!-- <div id="particles-js" class="sec-1 sec-b"></div>  -->	
		<div  class="sec-1 col-lg-12 center">
			<div id="main" class="col-lg-11 center sec-up">

				<h4 id="notification" class="text-center notification"></h4>

				<h2 id="a-q" class="text-center bg-b">
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
				<h2 class="title text-center animated fadeIn bg-b">i'm jeff, a Web Developer</h2>
		
				<h4 class="center text-center bg-b">
				<button id="g-projects" class="btn">View My Portfolio <i class="fas fa-arrow-circle-right"></i>
				</button>
				</h4>
			</div>
			

			<!-- =========		about -->

			<div id="about-sec" class="row">
					<div  class="col-lg-10 center ">
						<div id="about-con" class="row">
								<div class="col-lg-6 ">
									<img id="profile" class="img-fluid center p-3"  src="app/assets/images/profile.jpg" alt="profile-pic">
								</div>
								<div class="col-lg-6">
									<div class="row">
										<div class="col-lg-12">
											<h2 class="wite title text-center bg-b">About</h2>
											<p class="wite bg-b ps text-justify">I'm Jeffrey Palanas a web developer/software engineer. A humble graduate of Tuitt Coding Bootcamp. Trained SEO Specialist (Search Engine Optimization Specialist) of SEO Phils. A career shifter from the field of marine engineering. Liscensed marine engineer and a Graduate of Bachelor of Science in Marine Engineering from Southwestern University Maritime Regiment. <a href="../assets/myresume.docx" class="wite" download>My resume.</a></p>

										</div>
										
									</div>
									
									<div class="row">
										<div class="col-lg-12 mt-3">
											<h2 class="text-center wite bg-b">skills</h2>
										</div>
									</div>
									<div class="row ">
										<div class="col-lg-12 t-con-p mb-5 mt-4">
											<div class="row">
												<div class=" col-lg-2 col-md-2 col-3 sk-i">
													<img class="img-fluid" src="app/assets/images/js.png">
												</div>
												<div class=" col-lg-2 col-md-2 col-3 sk-i">
													<img class="img-fluid" src="app/assets/images/mongodb.png">
												</div>
												<div class=" col-lg-2 col-md-2 col-3 sk-i">
													<img class="img-fluid" src="app/assets/images/mysql.png">
												</div>
												<div class=" col-lg-2 col-md-2 col-3 sk-i">
													<img class="img-fluid" src="app/assets/images/bootstrap.jpg">
												</div>	
												<div class=" col-lg-2 col-md-2 col-3 sk-i">
													<img class="img-fluid" src="app/assets/images/css.png">
												</div>	
												<div class=" col-lg-2 col-md-2 col-3 sk-i">
													<img class="img-fluid" src="app/assets/images/html.png">
												</div>
												<div class=" col-lg-2 col-md-2 col-3">
													<img class="img-fluid" src="app/assets/images/php.png">
												</div>		

											</div>
											
										</div>	
											
									</div>
						
									
								</div>
						</div>
					</div>
					
				</div>

<!-- =============  project -->
			<div id="project-sec" class="project-con row">
				<div class="col-lg-10 center">
					<h2 class="wite title text-center bg-b mt-5">portfolio</h2>
					<div class="row ">
						<div class="col-lg-6 img-s bg-img center">
							<div id="img-i" class="">
								<img  class="img-fluid center" src="app/assets/images/marineenjneering.png">
							</div>
							
						</div>
						<div class="col-lg-6">
							<h3 class="wite bg-b text-center t-s">Marine Enjneering</h3>
							<p class="wite bg-b ">Marine Enjneering aims to provide information in the field of Marine Engineering to an aspiring Marine Engineering student and officer. It is a dive in discussion to give a brief information to discover the said field.</p>
							<!-- <h4 class="wite bg-b text-center t-s">Technology</h4> -->
							<p class="wite bg-b ">Marine Enjneering utilizes Bootstrap4 for moblie-first layout. Made with HTML and customized with CSS.</p>
							<div class=" bg-b my-1">
								<a href="https://palanas-jeffrey.github.io/marineenjneering77/" target="_blank" class="wite vist-a" >Visit the Site <i class="fas fa-arrow-circle-right" ></i></a>
							</div>
							
						</div>					
					</div>
					

					<div class="row ">
						<div class="col-lg-6 img-s bg-img center">
							<div id="img-i" class="">
								<img  class="img-fluid center" src="app/assets/images/hotel.png">
							</div>
							
						</div>
						<div class="col-lg-6">
							<h3 class="wite bg-b text-center t-s">Ezzy Hotel</h3>
							<p class="wite bg-b ">Ezzy hotel is a hotel booking website providing a place one can call home. A place to unwind from troubles and to feel serenity/ shallom. It aims to give a convenient and eazy way to book a hotel room. </p>
							<h4 class="wite bg-b text-center t-s">Technology</h4>
							<p class="wite bg-b ">Ezzy Hotel make use MELN as the backend with Laravel as frontend. Bootstrap4 layout. Made with HTML and customized with CSS.</p>
							<div class="wite bg-b my-1">
								<a href="https://whispering-dusk-67095.herokuapp.com" target="_blank" class=" wite" >Visit the Site <i class="fas fa-arrow-circle-right"></i></a>
							</div>	
							
						</div>					
					</div>

					<div class="row ">
						<div class="col-lg-6 img-s bg-img center">
							<div id="img-i" class="">
								<img  class="img-fluid center" src="app/assets/images/alfalaval.png">
							</div>
							
						</div>
						<div class="col-lg-6">
							<h3 class="wite bg-b text-center t-s">Alfa Laval Purifier Spares Inventory</h3>
							<p class="wite bg-b ">Alfa Laval Purifier Spares Inventory is an asset management app. It aims to give a convenient way to make requisitions onboard ship while making an efficient way to make the inventory process and requisition even simpler. Providing a productive way to lessen the errors of requested parts.</p>
							<h4 class="wite bg-b text-center t-s">Technology</h4>
							<p class="wite bg-b ">Alfa Laval Purifier Spares Inventory utilizes mainly of Laravel.  With some touch of Bootstrap and customized with CSS.</p>
							<div class="wite bg-b my-1 ">
								<a href="https://mighty-wildwood-39125.herokuapp.com"  target="_blank" class=" wite" >Visit the Site <i class="fas fa-arrow-circle-right"></i></a>
							</div>
							
						</div>					
					</div>
				




				</div>
				
					
				
					

			</div>

			<!-- ======================= contact -->
			
			<div id="contact-sec" class="row">
				<div class="col-lg-6 center">
					<h2 class="text-center title wite bg-b">contact</h2>
					<!-- <form class="form-group bg-b" method="POST" action="app/controllers/send_mail.php"> -->
					
					<form>
						<div class="form-group bg-b">
							<label for="name" class="wite bg-b">Name:</label>
							<input id="name" name="name" type="name" class="form-control">
							<span></span>
						</div>
						<div class="form-group bg-b">
							<label for="email" class="wite bg-b">Email:</label>
							<input id="email" name="email" type="email" class="form-control">
							<span></span>
						</div>
						<div class="form-group bg-b">
							<label for="topic" name="topic" class="wite bg-b">Topic:</label>
							<input id="topic" type="text" name="topic" class="form-control">
							<span></span>
						</div>
						<div class="form-group bg-b">			
							<label for="contactNo" class="wite bg-b">Contact:</label>
							<input id="contactNo" name="contactNo" type="number" class="form-control">
							<span></span>
						</div>

						<div class="form-group bg-b">
							<label for="message" class="wite bg-b">Message:</label>
							<textarea id="message" name="message" class="form-control" rows="3" placeholder="Message Here"></textarea>
							<span id="reminder"></span>
						</div>
						<h4 id="warning" class="text-center warning"></h4>
						<button id="submit" type="button" class="btn btn-block p-3 my-4" >Submit</button>			
					</form>
				</div>
				
			</div>


					

<!-- ================================end -->

		</div>


<!-- ========================= -->


	
<!-- =================================== -->
			
	</div>


<script type="text/javascript">
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
</script>


	
<?php }; ?>
