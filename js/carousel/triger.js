$(document).ready(function(){
					 "use strict";
							
								  $('a[href*=#]:not([href=#])').click(function() {
									if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
									  var target = $(this.hash);
									  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
									  if (target.length) {
										$('html,body').animate({
										  scrollTop: target.offset().top
										}, 1500);
										return false;
									  }
									}
								  });
								
							$(".mapp").hide();
								$(".map-btncl").hide();
								$(".map-btn .dowen").hide();
								$( ".map-btn" ).click(function() {
								$( ".mapp" ).toggle( "slow" );
								
								$(".fa-angle-double-down").hide();
								$(".map-btn .dowen").show();
							});
						
		

							$(".member:nth-child(6n-1)").addClass("column_d");
							$(".member:nth-child(6n)").addClass("column_e");
							$(".member").hover(
								function() {
									var utilityString = $(this).children(".member-content").html();
									var utilityOffset = $(this).offset();
									if ($(this).hasClass("column_d") || $(this).hasClass("column_e")) {
										utilityOffset_left = utilityOffset.left - 384;
									} else {
										utilityOffset_left = utilityOffset.left + 192;
									};
									$("#supplemental").html(utilityString).show().css("left", utilityOffset_left).css("top", utilityOffset.top);
									
								},
								function() {
									$("#supplemental").hide();
									
								}
							);
						
							$(window).scroll(function() {
							  if ($(this).scrollTop() > 80) {
								$(".header").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 0) {
								$(".header3").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header3").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 0) {
								$(".header2").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header2").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 40) {
								$(".header4").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header4").removeAttr("style");
							  }
							  if ($(this).scrollTop() > 0) {
								$(".header5").css({"position": "fixed", "top": 0, "width": "100%"});
							  } else {
								$(".header5").removeAttr("style");
							  }
							});


						  $('.slide-down').toggle(function () {
						$(this).css('background-color', '#fff');
						$('.slide-down a').css('color', '#3498db');
					}, function () {
						$(this).css('background-color', 'transparent');
						$('.slide-down a').css('color', '#fff');
					}).click(function () {
						$('.navbar-drope').slideToggle();
					});
						$("#tabs a").click(function(e){

							e.preventDefault();

							$(this).tab('show');

						});
						$('.collapse-card').paperCollapse();
						$('#sample_goal').goalProgress({
									goalAmount: 100,
									currentAmount: 40,	
									
								});	
						$('#sample_goal2').goalProgress({
									goalAmount: 100,
									currentAmount: 60,	
									
								});	
						$('#sample_goal3').goalProgress({
									goalAmount: 100,
									currentAmount: 30,	
									
								});	
						$('#sample_goal4').goalProgress({
									goalAmount: 100,
									currentAmount: 80,	
									
								});			
						$('#Grid').mixitup();


									/*
									 *  Simple image gallery. Uses default settings
									 */

									$('.fancybox').fancybox();

									/*
									 *  Different effects
									 */

									// Change title type, overlay closing speed
									$(".fancybox-effects-a").fancybox({
										helpers: {
											title : {
												type : 'outside'
											},
											overlay : {
												speedOut : 0
											}
										}
									});
								$("#owl-testimonial-2").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  });		
						$("#owl-testimonial-3").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  });
						$("#owl-testimonial-4").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  }); 
						$("#owl-testimonial-6").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  }); 
						$("#owl-testimonial-7").owlCarousel({
								autoPlay: true, //Set AutoPlay to 3 seconds
								
							  items : 1,
							navigation : true
						  }); 
					if ($(".slider").length > 0) {
  $('.slider').revolution({
        delay: 7000,
        startwidth: 1200,
        startheight: 600,
        autoHeight: "on",
        fullScreen: "off",
        fullWidth: "off",
        fullScreenAlignForce: "off",
        onHoverStop: "on",
        thumbWidth: 100,
        thumbHeight: 50,
        thumbAmount: 3,
        hideThumbsOnMobile: "off",
        hideBulletsOnMobile: "off",
        hideArrowsOnMobile: "off",
        hideThumbsUnderResoluition: 0,
        hideThumbs: 0,
        navigationType: "bullet",
        navigationArrows: "solo",
        navigationStyle: "round",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 30,
        navigationVOffset: 30,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        touchenabled: "off",
        stopAtSlide: -1,
        stopAfterLoops: -1,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        hideSliderAtLimit: 0,
        dottedOverlay: "none",
        forceFullWidth: "off",
        shadow: 0
    });
	}	
						  
 
		});
	