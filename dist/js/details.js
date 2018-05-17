;(function(){
	 var $small=$(".kind-img")
	 var $big=$(".zhanshi")
	 $small.eq(0).hover(function(){
	 	$big.eq(0).css({display:"block"})
	 },function(){
	 	$big.eq(0).css({display:"none"})
	 })
	 $small.eq(1).hover(function(){
	 	$big.eq(1).css({display:"block",background:"#fff"})
	 },function(){
	 	$big.eq(1).css({display:"none"})
	 })
	 


})();
