//by 20181015
 $(function ($) {
	$(window).on("resize", function (e) {
	if ($(window).width() >= 1025) {
		$("#header-menu").remove();
			menu()
		}else{
			menuMoblie()
			}           
	}).trigger("resize");
		//选中
	$(".header-menu li").each(function(index) {
     	$(this).attr("id", "m" + index);
	});
    $("#m"+m).addClass("aon");
	open_menu()
});

function open_menu() {
	//移动端打开菜单导航
	$("#open_menu").click(function(e) {
		if ($(this).hasClass("open_menu_on")) {
			$(this).removeClass("open_menu_on")
			$("#header-menu").removeClass("header-menu-show");
		} else {
			$(this).addClass("open_menu_on")
			$("#header-menu").addClass("header-menu-show");
		}
	});
	//移动端打开菜单导航 end	
	}
function menu() {
	var window_width = $(window).width();
	var a = $(".header-menu")
	var b = a.find("ul")
	var c = b.find("li")
	//导航总宽度	
	var m_total_width = b.width();
	//栏目总数
	var m_num = c.length
	//栏目宽度px
	var m_li_width = m_total_width / m_num
	//栏目宽度%
	c.width(100 / m_num + "%");
	//判断是否有下拉 加上样式has-sub
	$(".header-menu li").each(function(index) {
		//鼠标经过一级栏目效果
			$(this).bind("mouseover",function(e) {
			$(this).addClass("hover aon");
			$(this).siblings().removeClass("aon");
		});
		$(this).bind("mouseleave",function(e) {
			$(this).removeClass("hover aon");
			$("#m"+m).addClass("aon");
		});
		//
		var sub_num = $(this).find(".sub").length
		if (sub_num > 0) {
			$(this).addClass("has-sub");
			//不同环境判断

			var x = $(this)
			var y = x.find(".sub")
			var z = y.find(".sub-menu")
			var r = z.find("dl")

			//下拉背景不全
			if (a.hasClass("no-fullbground")) {
				x.addClass("relative"); //相对li定位
				$("body").css("overflow-x", "hidden"); //防止滚动条出现
				y.width(window_width);
			}
			//横向
			if (a.hasClass("sub-horizontal")) {
				var r_width = r.width() //二级导航各自宽度
				var r_height = r.height() //二级导航各自高度
				rigth_side = window_width - x.position().left - ((window_width - $(".header").width()) / 2)
				left_side = x.position().left - ((window_width - $(".header").width()) / 2) + x.width()
				//alert(rigth_side)

				if (m_num - x.index() <= 3) {
					if (r_width > rigth_side) { //二级导航总宽度比导航右侧宽度大的时候
						y.addClass("sub-right");
						//判断右侧宽度太大加上宽度
					//	if (r_width > left_side) {
							r.width(left_side).height(r_height)
						//	y.addClass("sub-right-txt-r");
						//}
						//
					} else {
						y.addClass("sub-left");
					}
				} else {
					y.addClass("sub-left");
					r.width(rigth_side).height(r_height)
				}
				//
			}
			//横向End
			//下拉背景不全END

			//下拉全背景
			if (a.hasClass("fullbground")) {
				y.show().width($(".header").width());
				//alert(r.width())
				var halfw=(window_width - $(".header").outerWidth()) / 2 
			    leftw = r.width() / 2 - (x.outerWidth() / 2)
				left_side = x.position().left - halfw
				rigth_side = window_width - x.position().left - halfw - x.outerWidth()
				aa=window_width-$(".header-menu").position().left-$(".header-menu").width()//判断导航右边距离是否等于左右距离（等于右边有无其他模块挡着）
			    bb=window_width-x.position().left-halfw-x.outerWidth()//当前LI在内容$(".header-menu")右边距离
				
				cc=x.position().left//当前LI在内容$(".header-menu")左边距离
				dd=cc-halfw
					  //左边
						if (leftw > left_side) {
							y.css({"left": -left_side});
							} else {
							y.css({"left": -leftw});
						}
					  //左边 end				

				//右边
				if(aa==halfw){
					
					if(leftw> rigth_side) {
						y.css({"left": "auto","right":-bb});
					}else{
					  //左边
						if (leftw > left_side) {
							y.css({"left": -left_side});
							} else {
							y.css({"left": -leftw});
						}
					  //左边 end
						}
					
					}else{
						
					/**/				
					if (m_num - x.index() <= 3) {
					if (leftw > rigth_side) {
						if (bb==0) { //导航菜单右边没有模块
							y.css({"left": "auto","right": -(rigth_side-halfw)});
						}else{
						y.css({"left": "auto","right": -rigth_side});
							}
					} else {
						y.css({
							"left": -leftw
						});
					}
				}
				/**/
						
				}

				//右边 end

               // alert(r.width())
				y.width(r.width()+1);
				//
				x.addClass("relative"); //相对li定位
				x.hover(function(e) {
					var e=$(this).index()
					$(".sub-menu-layer"+e).height(y.outerHeight());
					$(".sub-menu-layer"+e).stop(true,true).slideDown(300);                   
                },function(){
					var e=$(this).index()
					$(".sub-menu-layer"+e).stop(true,true).slideUp(300);
					});
			}
			//下拉全背景END

			//不同环境判断End
		}
	});
	
	if (a.hasClass("fullbground")) {
		
		$(".sub-menu-layer").remove();
		var strs=$(".header-menu li")
		for (var i = 0; i < strs.length; i++) {
			a.append("<div class='sub-menu-layer sub-menu-layer"+[i]+"'></div>");	
            }
			
		 
		}
	//下拉菜单显示

	$(".header-menu .has-sub").each(function() {

		//下拉竖向图文 
		if (a.hasClass("sub-vertical")) {
            var s_halfw=(window_width - $(".header").outerWidth()) / 2
			var sub_width = $(this).find(".sub").outerWidth()
			var leftw = window_width - $(this).position().left - s_halfw
			//alert(leftw)*2
			if (sub_width > leftw) {
				$(this).find(".sub").addClass("sub-position-right");
			}
			var n = $(this).find(".sub-menu").attr("data-level");
			if (n > 0) {
				var sub_width_n = $(this).find(".sub").outerWidth() * n
				if (sub_width_n > leftw) {
					$(this).find(".sub").addClass("sub-position-right");
				}
			}

		}
		//下拉竖向图文 End	
		//多级
		$(this).find(".sub").find(".sub-menu").find("dl").find("dt").each(function() {
			var n = $(this).find("dl").find("dt").length
			if (n >= 1) {
				//$(this).find("i").remove();
				$(this).addClass("sub-has-sub") //.append("<i></i>");
			}
		});

		$(".header-menu .sub-has-sub").hover(function() {
			$(this).children("dl:first").show();
			$(this).addClass("aon");
			$(this).siblings().removeClass("aon");
		}, function() {
			$(this).children("dl:first").hide();
			$(this).removeClass("aon");
		});
		
		/////////////////一级
		//$(this).find(".sub").height("auto"); 

		var subh=$(this).find(".sub").outerHeight()
		$(this).find(".sub").css({"top":-subh});
		$(this).find(".sub").hide();
		//$(this).find(".sub").height(0);

		$(this).mouseDelay(false).hover(function(e) {
			$(this).find(".sub").css({"top":"100%"}).slideDown(300);
		},function(){
			$(this).find(".sub").css({"top":-subh}).slideUp(300);
		});
		
		//end	
	});
}

	//下拉菜单显示End		

function menuMoblie() {
	var html = $(".header-menu").html()
	$("#header-menu").remove();
	$(".header-menu").before("<div id='header-menu'>" + html + "</div>");
	$("#open_menu").removeClass("open_menu_on")

	$("#header-menu li").each(function() {
		$(this).attr("style", " ").removeClass("relative");
		$(this).find(".sub").attr("style", " ");
		$(this).find(".sub dl").attr("style", " ");

		var sub_num = $(this).find(".sub-menu").length
		if (sub_num > 0) {
			$(this).addClass("has-sub");
			$(this).find("em").append("<i class='op'></i>");
		}

		//多级
		$(this).find(".sub").find(".sub-menu").find("dl").find("dt").each(function() {
			var n = $(this).find("dl").find("dt").length
			if (n >= 1) {
				$(this).find("i").remove();
				$(this).addClass("sub-has-sub").append("<i></i>");
			}
		});

	});
	//一级菜单	
	$("#header-menu .has-sub em").bind("click", function() {
		if ($(this).parent().hasClass("clickon")) {
			$(this).parent().removeClass("clickon");
			$(this).next(".sub").stop(true, true).slideUp();
		} else {
			$(this).parent().addClass("clickon");
			$(this).next(".sub").stop(true, true).slideDown();
			$(this).parent().siblings().find(".sub").stop(true, true).slideUp();
			$(this).parent().siblings().removeClass("clickon");
		}
	});

	//多级菜单
	$("#header-menu .sub-has-sub i").bind("click", function() {
		if ($(this).parent().hasClass("clickon")) {
			$(this).parent().removeClass("clickon");
			$(this).parent().children("dl:first").stop(true, true).slideUp();
		} else {
			$(this).parent().addClass("clickon");
			$(this).parent().children("dl:first").stop(true, true).slideDown();
		}
	});

}

/*!
 * jQuery.mouseDelay.js v1.2
 * http://www.planeart.cn/?p=1073
 * Copyright 2011, TangBin
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function ($, plugin) {
	var data = {}, id = 1, etid = plugin + 'ETID';
	
	// 延时构造器
	$.fn[plugin] = function (speed, group) {
		id ++;	
		group = group || this.data(etid) || id;
		speed = speed || 100;
		
		// 缓存分组名称到元素
		if (group === id) this.data(etid, group);
		
		// 暂存官方的hover方法
		this._hover = this.hover;
		
		// 伪装一个hover函数，并截获两个回调函数交给真正的hover函数处理
		this.hover = function (over, out) {
			over = over || $.noop;
			out = out || $.noop;
			this._hover(function (event) {
				var elem = this;
				clearTimeout(data[group]);
				data[group] = setTimeout(function () {
					over.call(elem, event);
				}, speed);
			}, function (event) {
				var elem = this;
				clearTimeout(data[group]);
				data[group] = setTimeout(function () {
					out.call(elem, event);
				}, speed);
			});
			
			return this;
		};
		
		return this;
	};
	
	// 冻结选定元素的延时器
	$.fn[plugin + 'Pause'] = function () {
		clearTimeout(this.data(etid));
		return this;
	};
	
	// 静态方法
	$[plugin] = {
		// 获取一个唯一分组名称
		get: function () {
			return id ++;
		},
		// 冻结指定分组的延时器
		pause: function (group) {
			clearTimeout(data[group]);
		}
	};
	
})(jQuery, 'mouseDelay');