
(function(){
  var headerStr = ' <div class="header">'+
  '<div class="header_info">'+
    '<ul>'+
      '<li class="header_user_info">'+
        '<div>'+
          '<span>您好，欢迎来到</span>'+
          '<span>'+
            '广东省公安厅科技信息化处勤务保障科网站'+
          '</span>'+
        '</div>'+
        '<div class="header_data_info">'+
          '<span>2018-12-07</span>'+
          '<span>星期五</span>'+
        '</div>'+
      '</li>'+
      '<li class="header_set_info">'+
        '<span>'+
          '<a href="javascript:(0)">设为首页</a>'+
        '</span>'+
        '<span>'+
          '<a href="javascript:(0)">加入收藏</a>'+
        '</span>'+
      '</li>'+
    '</ul>'+
  '</div>' +
      '<div class="bannerName">' +
        '<img src="img/banner.png" alt="">'+
      '</div>' +
  '<div class="header_nav">'+
    '<ul class="sub_nav">'+
      '<li data-type="1">  <a href="index.html">首页</a></li>'+
      '<li data-type="2"> <a href="javascript:(0)">会议通知</a>  </li>'+
      '<li data-type="3"> <a href="aroundTDList.html">各地动态</a>  </li>'+
      '<li data-type="4"> <a href="javascript:(0)">值班日志</a>  </li>'+
      '<li data-type="5"> <a href="equipmentShow.html">装备展示</a>  </li>'+
      '<li data-type="6"> <a href="departmentAbstract.html">科室简介</a>  </li>'+
      '<li data-type="7"><a href="javascript:(0)">处主页</a>   </li>'+
    '</ul><div class="subBackground"></div><div class="subBackground1" style="left: -1000px"></div>'+
  '</div>'+
'</div>';
  document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend',headerStr);
})();




var left = 140;
var curIndex = 0;
var navIndex = -1;
var configNav=['勤务保障科','会议通知','各地动态','值班日志','装备展示','科室简介','处主页'];
for(var  i = 0;i<configNav.length;i++){
  if(configNav[i] === document.title){
    navIndex = i;
    break;
  }
}
if (navIndex > -1) {
  $('.sub_nav li').eq(navIndex).addClass('sub_nav_active');
  $('.subBackground').css('left',left*navIndex+'px');
} 
$('.sub_nav li').each(function(index,val){
  $(this).hover(function(){
    if (curIndex === index) return ; 
    $('.subBackground1').css('left',left*index+'px');
    curIndex = index;
  },function(){
    $('.subBackground1').css('left','-1000px');
  }).click(function(){
    $(this).addClass('sub_nav_active');
    $('.subBackground').css('left',left*index+'px');
  });
});