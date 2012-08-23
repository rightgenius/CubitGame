$(function(){
	var tan = 0.9656887748
	var end = false
	var count = 0
	$(document).click(function(){
		count += 1
		if(count === 30){
			$('p').append('&nbsp;&nbsp;<a href="#" class="shoot" style="font-size: 13px; font-style: italic;">射不出去？点这里~</a>')
			$('.shoot').click(shoot)
		}
		if(end) return
		var $arrow = $('.arrow')
		$arrow.stop(true)
		$arrow.animate(relDistance(-10, $arrow.position()), {
			easing: 'linear',
			duration: 10,
			complete: function(){
				if($arrow.position().left < -40){
					shoot()
				}else{
					$arrow.animate(absDistance(0), 350)
				}
			}
		})
		//$arrow.animate({top:'100px', left:'100px'})
	})
	function shoot(){
		var $arrow = $('.arrow')
		end = true
		$arrow.animate(relDistance(300, $arrow.position()), {
			complete: function(){
				$('.qq_img').stop(true).fadeOut(function(){
					$('.qq').append('<img src="love/kiss.gif" class="girls" />')
					setTimeout(function(){
						$('.girls').fadeOut(function(){
							$('.girls').attr('src', 'love/girls.gif').show()
							setTimeout(function(){
								$('.girls').fadeOut(function(){
									$('.girls').attr('src', 'love/happy.gif').removeClass('girls').show()
									$('p').fadeOut(function(){
										$(this).html('祝有情人终成眷属！小黑企鹅&#x2665;白富企鹅！&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-size: 13px">——nius</span>')
										$(this).css('left','60px')
										$(this).show()
									})
								})
							}, 1500)
						})
					}, 1500)
				})
				$(this).fadeOut()
			}	
		})
	}
	function absDistance(length){
		return {
			top: (length*tan)+'px',
			left: length+'px'
		}
	}
	function relDistance(length, origin){
		return {
			top: (length*tan + origin.top) + 'px',
			left: (length + origin.left) + 'px'
		}
	}
	var $qq = $('.qq img')
	var walk_d = 110
	var walk_t = 4000
	var walk_function = function walk_function(){
		if(end) return
		$qq.animate({left: (walk_d + $qq.position().left) + 'px'}, walk_t, function(){
			$qq.addClass('fantacy').attr('src', 'love/fantacy.gif')
			setTimeout(function(){
				$qq.removeClass('fantacy').addClass('move_left').attr('src', 'love/move_left.gif')
					.animate({left: ($qq.position().left - walk_d) + 'px'}, walk_t, function(){
					$qq.removeClass('move_left').attr('src', 'love/see.gif')
					setTimeout(function(){
						$qq.attr('src', 'love/move_right.gif')
						walk_function()
					}, 2800)
				})
			}, 1100)
		})
	}
	walk_function()
})
