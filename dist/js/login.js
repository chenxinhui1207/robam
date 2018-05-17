;(function(){
	//勾选十天免登陆
	var $check=$(".l-select")
	var $bstop=true;	
	$check.click(function(){
		if($bstop){
			$(this).css({"background-position-y":"-18px"});
			$bstop=false;
		}else{
			$(this).css({"background-position-y":"0px"});
			$bstop=true;
		}
	})
	
	//添加cookie
})()
