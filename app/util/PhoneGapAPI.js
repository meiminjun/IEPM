/**
 * phoneGap js with native api
 * 
 * @author duwei
 * @date 2014-01-17
 */

// Call onDeviceReady when Cordova is loaded.
//
// At this point, the document has loaded but cordova-2.5.0.js has not.
// When Cordova is loaded and talking with the native device,
// it will call the event `deviceready`.
//
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}
/**
 * phoneGap js with native api
 * 
 * @author duwei
 * @date 2013-10-09
 */
function onDeviceReady() {
	// 注册回退按钮事件监听器
	document.addEventListener("backbutton", onBackKeyDown, false);
}

/**
 * android返回键处理
 * 
 * @author duwei
 * @date 2013-10-09
 */
function onBackKeyDown() {
	
	var indexNav = mainCtr.getIndexNav(),
		activeItem = indexNav.getActiveItem(), 
		activeItemType = activeItem.xtype,
		previousItemType = indexNav.getPreviousItem()== undefined ? '' : indexNav.getPreviousItem().xtype;
	
//		console.log('activeItemType: ' + activeItemType);
//		console.log('previousItemType: ' + previousItemType);
		
	if (indexNav) {
		// navigationView parent
		if (indexNav.getInnerItems().length > 1) {
			indexNav.pop();
			// 项目计划返回至项目阶段更新
			if(activeItemType == 'projectPlanList'){
				mainCtr.projectPhaseListLoad();
			// 注册返回首页更新
			}else if(activeItemType == 'registerProject'){
				mainCtr.mainListInitFun();
			// 设置返回首页更新
			}else if(activeItemType == 'settingview'){
				mainCtr.mainListInitFun();
			// 项目阶段返回至首页隐藏action 
			}else if(activeItemType == 'projectPhaseList'){
				mainCtr.mainListInitFun();
				if(!projectPhaseCtr.overlay.getHidden()){
					projectPhaseCtr.overlay.hide();
				}
			}
		} else {
			PhoneGapAPI.exit();
		}
	} else {
		PhoneGapAPI.exit();
	}
}

var PhoneGapAPI = {
	/**
	 * 退出程序
	 */
	exit : function() {
		Cordova.exec(null, null, "Application", "exit", [ Global.inboxUnreadCnt, -1, "no", Global.appID ]);
		// 此处加上退出App的逻辑 ， 待API提供中
		// window.localStorage.clear();
	},
	/**
	 * 获取登录用户信息
	 * @param callback
	 */
	getLoginUserInfo : function(callback) {
		Cordova.exec(function(result){
			Global.userAccount = result.userName;
			Global.userToken = result.userToken;
			Global.userPwd = result.userPassword;
			Global.appID = result.appID;
			Global.deviceType = result.device;
			Global.longitude = result.longitude;
			Global.latitude = result.latitude;
			Global.width = result.width;
			Global.height = result.height;
			Global.pushFlag = result.pushFlag;
			
			// callback fun
			callback();
		}, null, "UserInfo", "GetUserInfo", []);
	},
	/**
	 * 检测网络状态
	 */
	checkConnection : function(){
		var networkState = navigator.network.connection.type;

		var states = {};
		states[Connection.UNKNOWN] = 'Unknownconnection';
		states[Connection.ETHERNET] = 'Ethernetconnection';
		states[Connection.WIFI] = 'WiFiconnection';
		states[Connection.CELL_2G] = 'Cell2Gconnection';
		states[Connection.CELL_3G] = 'Cell3Gconnection';
		states[Connection.CELL_4G] = 'Cell4Gconnection';
		states[Connection.NONE] = 'Nonetworkconnection';

		return states[networkState];
	},
	/**
	 * 存储缓冲
	 * @param key
	 * @param val
	 */
	WriteCacheInfo : function(key,val){
//		return null;
		Cordova.exec(function(result){
//			 alert('写入缓存成功'+val);
			 console.log("写入本地缓存成功:" + (new Date()).getTime());
		},null,"UserInfo", "WriteApplicationCacheInfo",[key,val,'iEPM']);
	},
	/**
	 * 获取缓冲
	 * @param key
	 */
	GetCacheInfo : function(key,callback){
//		var str = "{\"result\":true,\"ErrorCode\":\"0\",\"rows\":[{\"TypeName\":\"M & E\",\"TypeCode\":\"Mod_CS\",\"TypeDescription\":\"Mechanical & Electrical\"},{\"TypeName\":\"C & S\",\"TypeCode\":\"Mod1\",\"TypeDescription\":\"Civil & Structure\"},{\"TypeName\":\"TestNewTemplate\",\"TypeCode\":\"58820f97-0d35-4447-bc1f-76ebc736ab33\",\"TypeDescription\":\"TestNewTemplate\"},{\"TypeName\":\"测试测试测试测\",\"TypeCode\":\"14b6302c-43c0-4abf-b6e5-187155cb6604\",\"TypeDescription\":\"测试测试测试测试测试\"}]}";
//		callback(str);
		Cordova.exec(function(result){
//			alert('获取缓存成功'+result);
			console.log("获取本地缓存成功:" + (new Date()).getTime());
			callback(result);
		},null,"UserInfo", "GetApplicationCacheInfo",[key,'iEPM']);
	}
};