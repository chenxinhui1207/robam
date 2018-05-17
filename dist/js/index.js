;(function(){
	//轮播图
	function Swiper(){
		this.banner=$(".swiper-container .swiper-wrapper")
		this.picul=$(".swiper-container .swiper-wrapper ul")
		this.piclist=$(".swiper-container .swiper-wrapper ul li")
		this.btns=$(".pagination ol li")
		this.num=0;
		this.liwidth=this.piclist.eq(0).width();
		this.left=$(".arrow-left")
		this.right=$(".arrow-right")
		this.timer=null;
		this.pagination=$(".pagination")
	}
	
	Swiper.prototype.init=function(){
		var that=this;
		var $firstpic=this.piclist.first().clone();
		var $lastpic=this.piclist.last().clone();
		this.picul.append($firstpic);
		this.picul.prepend($lastpic);
		//重新计算赋值picul长度
		this.piclist=$(".swiper-container .swiper-wrapper ul li");
		this.picul.width(this.liwidth*this.piclist.length).css('left',-this.liwidth);
		for(var i=0;i<this.btns.length;i++){
			this.btns[i].onclick=function(){
				that.num=$(this).index();
				that.tabchange();
			}
		}
		this.banner.hover(function(){
			clearInterval(that.timer)
		},function(){
			that.autoplay();
		});
		
		this.pagination.hover(function(){
			clearInterval(that.timer)
		},function(){
			that.autoplay();
		});
		
		this.left.hover(function(){
			clearInterval(that.timer)
		},function(){
			that.autoplay();
		});
		
		this.right.hover(function(){
			clearInterval(that.timer)
		},function(){
			that.autoplay();
		});
		
		this.right.on('click',function(){
			that.num++;
			if(that.num==that.btns.length){
				that.btns.eq(0).addClass('active').siblings().removeClass('active');
			}
				that.tabchange();			
		});
		this.left.on('click',function(){
			that.num--;
			that.tabchange();
		});
		this.autoplay();
	}
	Swiper.prototype.tabchange=function(){
		var that=this;
		this.btns.eq(this.num).addClass('active').siblings().removeClass('active');
		this.picul.stop(true,true).animate({
			left:-this.liwidth*(this.num+1)
		},200,function(){
			if(parseInt(that.picul.css('left'))==-that.liwidth*(that.btns.length+1)){
				that.picul.css('left',-that.liwidth+'px');
				that.num=0;
			}
			if(parseInt(that.picul.css('left'))==0){
				that.picul.css('left',-that.liwidth*that.btns.length+'px');
				that.num=that.btns.length-1;
			}
		})
	}
	Swiper.prototype.autoplay=function(){
		var that=this;
		that.timer=setInterval(function(){
			that.right.click();
		},2000)
	}
	new Swiper().init();
	
	//侧边栏
	$(".right-list1").hover(function(){
		$(".right-list1 p").stop(true).slideToggle(300);
	},function(){
		$(".right-list1 p").stop(true).slideToggle(300);
	})
	$(".right-list2").hover(function(){
		$(".right-list2 p").stop(true).slideToggle(300);
	},function(){
		$(".right-list2 p").stop(true).slideToggle(300);
	})
	$(".wx-shopping").hover(function(){
		$(".wx-shopping p").stop(true).slideToggle(300);
	},function(){
		$(".wx-shopping p").stop(true).slideToggle(300);
	})

	//回到顶部
	$(".ser-top").click(function(){
		if ($('html').scrollTop()) {
            $('html').animate({ scrollTop: 0 }, 600);
            return false;
        }
        $('body').animate({ scrollTop: 0 }, 600);
            return false;                  
	})
	
	//商品上浮
	$outer=$('.outer');
	$outer.hover(function(){
		$(this).css({
			boxShadow:"0 7px 15px 0 rgba(0,0,0,0.15)",
			marginTop:"-3px"
		})
	},function(){
		$(this).css({
			boxShadow:"none",
			marginTop:"0"
		})
	})
	
	//楼梯效果
	
	$(function() {
		//1.控制楼梯的显示与隐藏
		var $louti=$(".loutinav")
		var $loutili=$(".loutinav ul li")
		var $louceng=$('.main')
		$(window).on('scroll', function() {
			//scrollTop():获取匹配元素相对滚动条顶部的偏移
			var $st = $(window).scrollTop();
			if($st >= 900 && $st <= 4000) {
				$louti.fadeIn("400");
			} else {
				$louti.fadeOut("400");
			}
	
			//4.拖拽滚轮，左侧对应的楼梯添加active
			//获取楼层每一个的top值
			//each(): 类似于for，遍历  ,终止循环 --return false  
			$louceng.each(function(index, element) { //index:元素的索引，element:当前的元素   
				var $top1 = $louceng.eq(index).offset().top + 500;
				if($top1 > $st) { //如果盒子的top值大于滚动条的top值，添加active.
					$loutili.removeClass('active');
					$loutili.eq(index).addClass('active');
					return false;
				}
				//return false;//终止循环
			});
	
		});
	
		//2.给左侧的楼梯添加点击事件，进行位置的跳转
		//offset():盒子的偏移值，返回一个对象，包含left/top
		$loutili.not('.last').on('click', function() {
			var $top = $louceng.eq($(this).index()).offset().top; //当前楼梯li项对应的楼层的top值。
			$('html,body').animate({
				scrollTop: $top
			})
		});
	
		//3.回到顶部
		$('#loutinav ul li.last').on('click', function() {
			$('html,body').animate({
				scrollTop: 0
			});
		});
	});
	
	
	var $cook=$(".cook");
	if($.cookie('UserName')!=""){
		var name=$.cookie('UserName');
		$cook.html("<a href='#'>"+name+"</a>")
	}
})();
