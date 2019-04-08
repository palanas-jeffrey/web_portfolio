
<?php $page= "home"; ?>


<?php require_once './app/partials/template.php'; ?>

<?php function get_page_content() { ?>
 
	<div id="body" class="row cont-h" style="margin-left: 0px; margin-right: 0px;">
	
		<div id="planeCon" class="plane-con row ">	
			<div id="plane-nav"  class="plane-nav fixed-bottom">
				<p class="instruction"><span> Click the plane to navigate</span></p>
				<div id="viewsCon" class="views-con collapse" data-toggle="collapse" data-target="#viewsCon">
					<div class="views">
						<p><span id="home2" class="">home</span></p>
						<p><span id="about2" class="">about</span> </p>
						<p><span id="projects2" cslass="">projects</span></p>
						<p><span id="contact2" class="">contact</span></p>
					</div>
				</div>
				<div class="plane-img-con" data-toggle="collapse" data-target="#viewsCon"><img id="planeNav" src="app/assets/images/paper_plane_blue.png" class=""></div>
			</div>
			
		</div>



		<div id="containSection"  class="sec-1 col-lg-12 center">
			
			

			<!-- =========		about -->
			
			

<!-- =============  project -->
			

			<!-- ======================= contact -->
			



					

<!-- ================================end -->

		</div>


<!-- ========================= -->


	
<!-- =================================== -->
			
	</div>




	
<?php }; ?>
