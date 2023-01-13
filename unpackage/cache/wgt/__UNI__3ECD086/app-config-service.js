
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/home/home","pages/focus/focus","pages/subscribe/subscribe","pages/info/info","pages/detail/detail","pages/focus/info/info","pages/index/index","pages/search/search","pages/phones/phones"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#7A7E83","selectedColor":"#e0228a","borderStyle":"black","backgroundColor":"#F8F8F8","fontSize":"12px","spacing":"5px","height":"60px","list":[{"text":"首页","pagePath":"pages/home/home","iconPath":"static/tabicons/t1_n.png","selectedIconPath":"static/tabicons/t1_a.png"},{"text":"焦点","pagePath":"pages/focus/focus","iconPath":"static/tabicons/t2_n.png","selectedIconPath":"static/tabicons/t2_a.png"},{"text":"预约","pagePath":"pages/phones/phones","iconPath":"static/tabicons/t3_n.png","selectedIconPath":"static/tabicons/t3_a.png"},{"text":"我的","pagePath":"pages/info/info","iconPath":"static/tabicons/t4_n.png","selectedIconPath":"static/tabicons/t4_a.png"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"p1","compilerVersion":"3.6.15","entryPagePath":"pages/home/home","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":false}},{"path":"/pages/focus/focus","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"焦点","enablePullDownRefresh":false}},{"path":"/pages/subscribe/subscribe","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/info/info","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/detail/detail","meta":{},"window":{"navigationBarTitleText":"楼盘详情","enablePullDownRefresh":false}},{"path":"/pages/focus/info/info","meta":{},"window":{"navigationBarTitleText":"文章详情","enablePullDownRefresh":false}},{"path":"/pages/index/index","meta":{},"window":{"navigationBarTitleText":"Home"}},{"path":"/pages/search/search","meta":{},"window":{"navigationBarTitleText":"楼盘列表","enablePullDownRefresh":false}},{"path":"/pages/phones/phones","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"热线列表","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
