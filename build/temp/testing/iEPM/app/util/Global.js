/*
 * @class iMeter.util.Global
 * @desc Tour Global
 */

var mainCtr,projectPhaseCtr,projectPlanCtr,projectDetailCtr;
var Global = {
	/*
	 * _globleParam_countryCode :全局变量 ，记录检查项编码 _globleParam_checkItemCode :全局变量
	 * ，记录检查项编码 _globleParam_floorName :全局变量 ，记录检查点编码 _globleParam_pointCode
	 * :全局变量 ，记录检查点编码 _globleParam_pointName :全局变量 ，记录检查点名称
	 * _globleParam_marketCode :全局变量 ，记录商场ID _globleParam_userName :
	 * 全局变量，记录用户账户名 _globleParam_userToken : 全局变量，记录Token值
	 * _globleParam_checkPointType :
	 * 用于在用户在checkpointview上点击不同的按钮时，取哪一个localstorage的值 _globleParam_telephone :
	 * 商场经理的电话 _globleParam_numberCode : _globleParam_floorCode : 楼层编码
	 * 
	 */
	userAccount : "liuyifei",
	userToken : "R3TWGNeql8k3bamyXzhURhwbbIxi6z56",
	// liuyifei pwd:simon_401a
	userPwd : "",
	appID : '',
	localUserRole : '',
	width : "",
	height : "",
	longitude : 2,
	latitude : 1,
	deviceType : "",
	requestObj : "",
	pushFlag : "",
	language : "zh-cn",
//	domain : "https://miepm.capitaretail.com.cn",
	domain : "https://miepmuat.capitaretail.com.cn",
//	domain : "http://10.36.64.164:90",
	navigationViewId : 'indexNav',
	backBtn : null,
	projectId : 0,
	teamListParent : '',
	planTaskID : 0,
	taskName : '',
	phaseTaskID : 0,
	isKeyTask : false,
	planStatus : '',
	recordStatus : '',
	btnPressCnt : 0,
	/**
	 * 草稿箱编辑模式默认状态为不选中
	 */
	draftsStatus : false,
	/**
	 * 提示语(加载中)配置
	 */
	loadingMsg : {
		"zh-cn" : "数据加载中，请稍候...",
		"en-us" : "Data is loading, please wait..."
	},
	/**
	 * 提示语配置
	 */
	tipsMsg : {
		"hisNoContent" : {
			"zh-cn" : "暂无备注",
			"en-us" : "No note"
		},
		"schedule" : {
			"zh-cn" : "计划",
			"en-us" : "Schedule"
		},
		"minute" : {
			"zh-cn" : "分钟前",
			"en-us" : "min ago"
		},
		"hour" : {
			"zh-cn" : "小时前",
			"en-us" : "hr ago"
		},
		"hours" : {
			"zh-cn" : "小时前",
			"en-us" : "hrs ago"
		},
		"day" : {
			"zh-cn" : "天前",
			"en-us" : "day ago"
		},
		"days" : {
			"zh-cn" : "天前",
			"en-us" : "days ago"
		},
		"workDay" : {
			"zh-cn" : "天",
			"en-us" : "day"
		},
		"workDays" : {
			"zh-cn" : "天",
			"en-us" : "days"
		},
		/**
		 * 数据提交
		 */
		"dataSubmission" : {
			"zh-cn" : "数据提交中，请稍候...",
			"en-us" : "Data submission, please wait..."
		},
		/**
		 * 提交成功
		 */
		"succeedMsg" : {
			"zh-cn" : "数据提交成功.",
			"en-us" : "Data submitted to the success."
		},
		/**
		 * 提交失败
		 */
		"failureMsg" : {
			"zh-cn" : "数据提交失败.",
			"en-us" : "Data submission failed."
		},
		/**
		 * 服务器请求错误
		 */
		"requestErrorMsg" : {
			"zh-cn" : "请求服务器失败，请稍候重试.",
			"en-us" : "Request that the server failed, please try again."
		},
		/**
		 * 空数据
		 */
		"emptyDataMsg" : {
			"zh-cn" : '<span class="defaultFont-style" style="font-size:.8em">没有相关数据.</span>',
			"en-us" : '<span class="defaultFont-style" style="font-size:.8em">No relevant data.</span>'
		},
		/**
		 * 必填项
		 */
		"requiredMsg" : {
			"zh-cn" : "请输入内容.",
			"en-us" : "Please enter the content."
		},
		/**
		 * 无网络连接
		 */
		"nonetworkconnection" : {
			"zh-cn" : "网络连接不可用.",
			"en-us" : "Network connection is unavailable."
		},
		/**
		 * 系统异常错误
		 */
		"abnormalMsg" : {
			"zh-cn" : "系统异常.",
			"en-us" : "System abnormalities."
		},
		/**
		 * 参数错误错误
		 */
		"paramsMsg" : {
			"zh-cn" : "参数错误.",
			"en-us" : "Parameter error."
		},
		/**
		 * 系统错误
		 */
		"systemErrorMsg" : {
			"zh-cn" : "系统错误.",
			"en-us" : "System Error."
		},
		/**
		 * 无权限
		 */
		"permissionsMsg" : {
			"zh-cn" : "无权限.",
			"en-us" : "No permissions."
		},
		/**
		 * 提示
		 */
		"Prompt" : {
			"zh-cn" : "提示",
			"en-us" : "Prompt"
		},
		/**
		 * 确定
		 */
		"OK" : {
			"zh-cn" : "确定",
			"en-us" : "OK"
		},
		/**
		 * 图片上传
		 */
		"picUpload" : {
			"zh-cn" : "附件上传中，请稍候...",
			"en-us" : "Annex upload, please wait..."
		},
		/**
		 * 图片加载
		 */
		"picLoad" : {
			"zh-cn" : "图片加载中，请稍候...",
			"en-us" : "Image loading, please wait..."
		},
		/**
		 * 切换语言提示语
		 */
		"switchLanguage" : {
			"zh-cn" : "设置语言中...",
			"en-us" : "Setting Language..."
		},
		/**
		 * 检查输入项标题
		 */
		"checkInpTitle" : {
			"zh-cn" : "备注",
			"en-us" : "Remarks"
		},
		/**
		 * 显示图片
		 */
		"showPicText" : {
			"zh-cn" : "显示图片",
			"en-us" : "Show picture"
		},
		/**
		 * 新项目注册选择成员为空提示
		 */
		"teamSelectEmpty" : {
			"zh-cn" : "请选择成员.",
			"en-us" : "Please select a member."
		},
		/**
		 * 项目计划提交remark空提示
		 */
		"planFormEmpty" : {
			"zh-cn" : "请输入备注信息.",
			"en-us" : "Please enter the note information."
		},
		/**
		 * 项目注册项目名称为空
		 */
		"proNameEmpty" : {
			"zh-cn" : "请输入项目名称.",
			"en-us" : "Please enter the project name."
		},
		/**
		 * 项目注册项目预算为空
		 */
		"proBudgetEmpty" : {
			"zh-cn" : "请输入项目预算.",
			"en-us" : "Please enter the project budget."
		},
		/**
		 * 项目注册项目预算非数字
		 */
		"proBudgetNotNum" : {
			"zh-cn" : "项目预算必须为数字.",
			"en-us" : "The project budget must be a number."
		},
		/**
		 * 项目注册开始日期为空
		 */
		"proStartTimeEmpty" : {
			"zh-cn" : "请选择开始日期.",
			"en-us" : "Please select a start date."
		},
		/**
		 * 项目注册结束日期为空
		 */
		"proEndTimeEmpty" : {
			"zh-cn" : "请选择结束日期.",
			"en-us" : "Please select the end date."
		},
		/**
		 * 项目注册项目经理为空
		 */
		"proManagerHFEmpty" : {
			"zh-cn" : "请选择项目经理.",
			"en-us" : "Please select a project manager."
		},
		/**
		 * 项目注册业务负责人为空
		 */
		"businessOwnerHFEmpty" : {
			"zh-cn" : "请选择业务负责人.",
			"en-us" : "Please select a business Owner."
		},
		/**
		 * 项目注册团队成员为空
		 */
		"teamMembersHFEmpty" : {
			"zh-cn" : "请选择团队成员.",
			"en-us" : "Please select a team member."
		},
		/**
		 * 月报填报本月完成任务为空
		 */
		"taskThisMonthEmpty" : {
			"zh-cn" : "请输入本月完成任务.",
			"en-us" : "Please input this month to complete the task."
		},
		/**
		 * 月报填报下月计划为空
		 */
		"planforNextMonthEmpty" : {
			"zh-cn" : "请输入下月计划.",
			"en-us" : "Please enter a plan next month."
		},
		/**
		 * 月报填报主要风险为空
		 */
		"mainRiskEmpty" : {
			"zh-cn" : "请输入主要风险.",
			"en-us" : "Please enter the main risk."
		},
		/**
		 * 填报月份为空提示
		 */
		"confirmDateEmpty" : {
			"zh-cn" : "请选择月份.",
			"en-us" : "Please select a month."
		},
		"dateInvalid" : {
			"zh-cn" : "上线时间不能小于开始时间.",
			"en-us" : "Online time is not less than start time."
		},
		/**
		 * 启动
		 */
		"startText" : {
			"zh-cn" : "启动",  
			"en-us" : "Start"
		},
		/**
		 * 完成
		 */
		"completeText" : {       
			"zh-cn" : "完成",
			"en-us" : "Complete"             
		},
		/**
		 * 取消
		 */
		"cancelText" : {
			"zh-cn" : "取消",
			"en-us" : "Cancel"
		},
		/**
		 * 本月任务
		 */
		"taskThisMonthText" : {
			"zh-cn" : "本月任务",
			"en-us" : "This month"
		},
		/**
		 * 主要风险
		 */
		"mainRiskText" : {
			"zh-cn" : "主要风险",
			"en-us" : "MainRisk"
		},
		"monthlyText" : {
			"zh-cn" : "月报",
			"en-us" : "Monthly"
		},
		"lowText" : {
			"zh-cn" : "低",
			"en-us" : "Low"
		},
		"middleText" : {
			"zh-cn" : "中",
			"en-us" : "Middle"
		},
		"highText" : {
			"zh-cn" : "高",
			"en-us" : "High"
		},
		"dialogText" : {
			"zh-cn" : "我的会话",
			"en-us" : "Dialog"
		},
		"monthlyReportText" : {
			"zh-cn" : "月报填报",
			"en-us" : "Mth Update"
		},
		"redText" : {
			"zh-cn" : "红",
			"en-us" : "Red"
		},
		"yellowText" : {
			"zh-cn" : "黄",
			"en-us" : "Yellow"
		},
		"greenText" : {
			"zh-cn" : "绿",
			"en-us" : "Green"
		},
		/**
		 * 业务负责人
		 */
		"responsiblePerson" : {
			"zh-cn" : "业务负责人",
			"en-us" : "BO"
		},
		/**
		 * 项目经理
		 */
		"projectManager" : {
			"zh-cn" : "项目经理",
			"en-us" : "PM"
		}
	},
	/**
	 * 获取LoadingMsg字符
	 * @returns
	 */    
	getLoadingMsg : function() {
		var language = this.language,
		loadingMsg = this.loadingMsg[language];
		
		return loadingMsg;
	},
	/**
	 * 
	 * @param key
	 */
	getTipsMsg : function(key) {
		var language = this.language;
		if (this.tipsMsg[key]) {
			return this.tipsMsg[key][language];
		} else {
			return null;
		}
	}
};

/**
 * string format格式化
 * @param args
 * @returns {String}
 */
String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {    
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                	//var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题，谢谢何以笙箫的指出
                	var reg=new RegExp ("({)"+i+"(})","g"); 
                	result = result.replace(reg, arguments[i]); 
                }
            }
        }
    }
    return result;
}