;(function(){
	var $password=$(".m_password")
	var $name=$(".m_phone");
	//验证密码强度
	$password.blur(function(){
		let $passwordchar=$(".m_password").val()
		let $level=$(".pass_level")
		let reg1=/\d+/g;
		let reg2=/[a-zA-Z]+/g;
		let reg3=/\W+/g;
		let $count=0;
		if(reg1.test($passwordchar)) {
			$count++;
		}
		if(reg2.test($passwordchar)) {
			$count++;
		}
		if(reg3.test($passwordchar)) {
			$count++;
		}
		switch($count) {
			case 1:
				$level.html("密码强度:弱");
				break;
			case 2:
				$level.html("密码强度:中");
				break;
			case 3:
				$level.html("密码强度:强");
				break;
		}
		if($passwordchar==""){
			$level.html("");
		}
	})
	
	//上传用户名和密码
//	var $btn=$(".registerButton");
//	$btn.click(function(){
//		if($name.val()!=""){
//			$.ajax({
//	            type: "POST",
//	            url: "php/register.php",
//	            cache: false,
//	            data:{
//	                    name:$name.val(),
//	                    pwd:$password.val()
//	            },
//	            success:function(data){
//	                alert("注册成功!");
//	            },
//	            error:function(){
//	                alert('注册失败！');
//	            }
//      	});
//		}	
//	});
	
	
})();
