;(function(){
//  $.ajax({
//      url: "php/banner.php",
//      success: function(result){
//          var $lunbo=JSON.parse(result);
//	        var $swiper=$('.swiper-wrapper ul');
//	        var str="";
//	        $.each($lunbo,function(i){
//	        	str+=`<li><a href="#"><img src="${$lunbo[i][0]}"></a></li>`;
//	        })
////	        for(var i=0;i<$aaa.length;i++){
////	        	str+=`<li><a href="#"><img src="${$aaa[i][0]}"></a></li>`;
////	        }
//	        $swiper.html(str);
//      }
//  })
        
     $.ajax({
        url: "php/shangpin.php",
        success: function(result){
	        var aaa=JSON.parse(result);
	        var $shangpin=$('.commodity-right-top');
	        var str=[];
	        var z=0;
	        for(var j=0;j<$shangpin.length;j++){
                str[j]=`<a href="details.html">
                <img src="${aaa.src[j]}">
                <div class="commodity-right-text">
                <p class="right-title">${aaa.title[j]}</p>
                <p class="right-shadow">${aaa.con[j]}</p>
                <div>¥<span>${aaa.price[j]}</span></div>
                </div>
                </a>`
                $shangpin.eq(z).html(str[j]);
                z++;
           	}
		}
    })
})();