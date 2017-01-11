// var mi = {
// 	html: null
// 	,stage1: null
// 	,stage2: null
// 	,stage3: null
// }

$(function() {
	layout();
});

function layout() {
	pageTab();
}

function pageTab() {
	var $li = $('#pageTab ul.clearfix li');

	// 進入時預設點擊第一個頁籤，除了第一個 content 其他 content 隱藏
	$($li.eq(0).addClass('active').find('span').attr('name')).siblings('.content').addClass('hide');
	// $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.content').hide();

	$li.click(function() {
		$($(this).find('span').attr('name')).removeClass('hide').siblings('.content').addClass('hide');
		$($(this).find('a').attr('href')).show().siblings('.content').hide();
		$(this).addClass('active').siblings('.active').removeClass('active');
	});
}
