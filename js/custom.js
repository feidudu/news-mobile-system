// JavaScript Document
(function () {
        /*组件初始化js begin*/
        $('#nav').navigator({     //左右都有fix元素
            isScrollToNext: false,      //出现半个tab时，不跳动到下一个tab
            isShowShadow: true       //不显示左右阴影
        });
 })();
$('#slider').slider();

(function () {
	/*组件初始化js begin*/
	$('.ui-refresh').refresh({
		ready: function (dir, type) {
			var me = this;
			$.getJSON('../../data/refresh.php', function (data) {
				var $list = $('.data-list'),
						html = (function (data) {      //数据渲染
							var liArr = [];
							$.each(data, function () {
								liArr.push(this.html);
							});
							return liArr.join('');
						})(data);

				$list[dir == 'up' ? 'prepend' : 'append'](html);
				me.afterDataLoading();    //数据加载完成后改变状态
			});
		}
	});
	/*组件初始化js end*/
})();
$('.panel').panel({
	contentWrap: $('.content')
});

$('#bt_menu').on('click', function () {
	$('.panel').panel('toggle', 'push', 'left');
});







