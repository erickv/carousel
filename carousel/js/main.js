$(document).ready(function(){
	var interval = window.setInterval(rotateSlides, 3000)
	function rotateSlides(){
		var $firstSlide =$('#carousel').find('div:first');
		var width = $firstSlide.width()	

		$firstSlide.animate({marginLeft: -width}, 1000, function(){
			var $lastSlide = $('#carousel').find('div:last')
			$lastSlide.after($firstSlide);
			$firstSlide.css({marginLeft: 0})

		})
	}
})

$('#left-arrow').click(previousSlide);
$('#right-arrow').click(nextSlide);
$('.slide-image').click(nextSlide);

function nextSlide(){
  window.clearInterval(interval);
  var $currentSlide = $('#carousel').find('div:first');
  var width = $currentSlide.width();
  $currentSlide.animate({marginLeft: -width}, 1000, function(){
    var $lastSlide = $('#carousel').find('div:last')
    $lastSlide.after($currentSlide);
    $currentSlide.css({marginLeft: 0})
    interval = window.setInterval(rotateSlides, 3000);
  });
}

function previousSlide(){
  // Go to previous slide
}