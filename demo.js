$(function(){
	
	$('.roulette').find('img').hover();
	var appendLogMsg = function(msg) {
		$('#msg')
	.append('<p class="muted">' + msg + '</p>')
	.scrollTop(100000000);
	}
	var p = {
		startCallback : function() {
			appendLogMsg('start');
			$('.start').attr('disabled', 'true');
			$('.stop').removeAttr('disabled');
		},
		slowDownCallback : function() {
			appendLogMsg('slowdown');
			$('.stop').attr('disabled', 'true');
		},
		stopCallback : function($stopElm) {
			appendLogMsg('stop');
			$('.start').removeAttr('disabled');
			$('.stop').attr('disabled', 'true');
		}

	}
	var rouletter = $('div.roulette');
	rouletter.roulette(p);	
	$('.stop').click(function(){
		var stopImageNumber = $('.stopImageNumber').val();
		if(stopImageNumber == "") {
			stopImageNumber = null;
		}
		rouletter.roulette('stop');	
	});
	$('.stop').attr('disabled', 'true');
	$('.start').click(function(){
		rouletter.roulette('start');	
	});

	var updateParamater = function(){
		p['stopImageNumber'] = Number($('.stop_image_number_param').eq(0).text());
		rouletter.roulette('option', p);	
	}

});

