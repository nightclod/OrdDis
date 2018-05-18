export default {
	recommendListData({ commit, state }, id) {
		var data = [];
		if(id == "427123"){
			data = [{
				storeId: 2,
				imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
				name: "美好一天早餐店",
				stars: 0,
				money: "20",
				site: "北京市"
			},{
				storeId: 5,
				imgUrl: "http://clubimg.dbankcdn.com/data/attachment/forum/201610/16/225213glupub5u6u17alkx.jpg",
				name: "早餐店",
				stars: 3,
				money: "28",
				site: "北京市王府井大街"
			},{
				storeId: 6,
				imgUrl: "http://clubimg.dbankcdn.com/data/attachment/forum/201610/16/225213glupub5u6u17alkx.jpg",
				name: "早餐店",
				stars: 4,
				money: "28",
				site: "北京市王府井大街"
			},{
				storeId: 7,
				imgUrl: "http://clubimg.dbankcdn.com/data/attachment/forum/201610/16/225213glupub5u6u17alkx.jpg",
				name: "早餐店",
				stars: 4,
				money: "28",
				site: "北京市王府井大街"
			},{
				storeId: 8,
				imgUrl: "http://clubimg.dbankcdn.com/data/attachment/forum/201610/16/225213glupub5u6u17alkx.jpg",
				name: "早餐店",
				stars: 2,
				money: "28",
				site: "北京市王府井大街"
			},{
				storeId: 11,
				imgUrl: "http://clubimg.dbankcdn.com/data/attachment/forum/201610/16/225213glupub5u6u17alkx.jpg",
				name: "早餐店",
				stars: 3,
				money: "28",
				site: "北京市王府井大街"
			},{
				storeId: 9,
				imgUrl: "http://www.fancai.com//Uploads/MeiShi/2017-08-16/59939b3328d9e.jpg",
				name: "面包",
				stars: 5,
				money: "20",
				site: "北京市王府井大街"
			}]
		}
		commit('RECOMMEND_LIST_DATA', data);
	},
	listData({ commit, state }, id) {
		var data = [];
		if(id == "427123"){
			data = [{
				storeId: 2,
				imgUrl: "http://img.zcool.cn/community/019e025859ddeca801219c773a5821.jpg@2o.jpg",
				name: "风味牛肉",
				stars: 0,
				money: "20",
				site: "北京市"
			},{
				storeId: 5,
				imgUrl: "http://clubimg.dbankcdn.com/data/attachment/forum/201610/16/225213glupub5u6u17alkx.jpg",
				name: "早餐店",
				stars: 3,
				money: "28",
				site: "北京市王府井大街"
			},{
				storeId: 6,
				imgUrl: "http://img.taopic.com/uploads/allimg/120917/219077-12091G11U422.jpg",
				name: "早餐店",
				stars: 4,
				money: "28",
				site: "北京市王府井大街"
			},{
				storeId: 11,
				imgUrl: "http://clubimg.dbankcdn.com/data/attachment/forum/201610/16/225213glupub5u6u17alkx.jpg",
				name: "早餐店",
				stars: 3,
				money: "28",
				site: "北京市王府井大街"
			},{
				storeId: 9,
				imgUrl: "http://www.fancai.com//Uploads/MeiShi/2017-08-16/59939b3328d9e.jpg",
				name: "面包",
				stars: 5,
				money: "20",
				site: "北京市王府井大街"
			}]
		}
		commit('LIST_DATA', data);
	},
	getDatailsData({ commit, state }, info) {
		var data = {} ;
		if(info.id == "427123" && info.num == "5"){
			data = {
				storeId: 5,
				imgUrl: "http://clubimg.dbankcdn.com/data/attachment/forum/201610/16/225213glupub5u6u17alkx.jpg",
				name: "面包店",
				stars: 2,
				site: "北京市王府井大街",
				list: [{
					id: 1,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "小笼包",
					deat: "好吃好吃好吃好吃。。。",
					money: 123,
					number: 1,
					unit: "个"
				},{
					id: 2,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "汉堡",
					deat: "好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0,
					unit: "个"
				},{
					id: 3,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0,
					unit: "个"
				},{
					id: 4,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0,
					unit: "个"
				},{
					id: 5,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0,
					unit: "个"
				},{
					id: 6,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0,
					unit: "个"
				}]
			}
		}else if(info.id == "427123" && info.num == "2"){
			data = {
				storeId: 5,
				imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
				name: "面包水店",
				stars: 2,
				site: "北京市王府井大街",
				list: [{
					id: 7,
					imgUrl: "http://www.fancai.com//Uploads/MeiShi/2017-08-16/59939b3328d9e.jpg",
					name: "小笼包",
					deat: "好吃好吃好吃好吃。。。",
					money: 123,
					number: 0,
					unit: "个"
				},{
					id: 8,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "汉堡",
					deat: "好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0,
					unit: "个"
				},{
					id: 9,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 15,
					number: 0,
					unit: "个"
				}]
			}
		}else if(info.id == "427123" && info.num == "6"){
			data = {
				storeId: 5,
				imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
				name: "面包水店",
				stars: 2,
				site: "北京市王府井大街",
				list: [{
					id: 10,
					imgUrl: "http://www.fancai.com//Uploads/MeiShi/2017-08-16/59939b3328d9e.jpg",
					name: "小笼包",
					deat: "好吃好吃好吃好吃。。。",
					money: 123,
					number: 0,
					unit: "个"
				},{
					id: 11,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "汉堡",
					deat: "好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0,
					unit: "个"
				},{
					id: 12,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 15,
					number: 0,
					unit: "个"
				}]
			}
		}
		commit('GET_DATAILS_DATA', data);
	},
	getcommentData({ commit, state }, id){
		var data = [];
		if(id == 5){
			data = [{
				id : 427123,
				img : "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
				name : "哈撒给",
				stars : 3,
				info : "好吃的紧",
				date : new Date("2018/5/1")
			},{
				id : 427124,
				img : "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
				name : "一库",
				stars : 4,
				info : "好吃的紧",
				date : new Date("2000/1/1")
			}]
		}else if(id == 2){
			data = [{
				id : 427123,
				img : "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
				name : "哈撒给",
				stars : 3,
				info : "好吃的紧",
				date : new Date("2018/5/1")
			},{
				id : 427124,
				img : "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
				name : "一库",
				stars : 4,
				info : "好吃的紧",
				date : new Date("2000/1/1")
			},{
				id : 427125,
				img : "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
				name : "恕瑞玛",
				stars : 5,
				info : "好吃的紧23",
				date : new Date("2000/1/3")
			},{
				id : 427126,
				img : "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
				name : "一库",
				stars : 2,
				info : "好吃的23432紧",
				date : new Date("2000/8/1")
			},{
				id : 427127,
				img : "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
				name : "一库",
				stars : 1,
				info : "好吃的紧3232",
				date : new Date("2000/12/1")
			}]
		}
		commit('GET_COMMENT_DATA', data);
	},
	getShopData({ commit, state }, id){
		var data = [];
		if(id == 5){
			data = [{
				id: 1,
				name: "面包店",
				product: [{
					id: 5,
					name: "汉堡",
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					number: 3,
					money: 15,
					unit: "个"
				},{
					id: 6,
					name: "薯条",
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					number: 1,
					money: 15,
					unit: "包"
				}]
			},{
				id: 2,
				name: "零食店",
				product: [{
					id: 7,
					name: "大葱",
					imgUrl: "https://bbs-fd.zol-img.com.cn/t_s1200x5000/g1/M0B/0E/05/Cg-4jlOtde-Idyg-AAIPr7LlwC4AAOpGwC2CsYAAg_H795.jpg",
					number: 3,
					money: 15,
					unit: "斤"
				},{
					id: 8,
					name: "鸡蛋",
					imgUrl: "https://bbs-fd.zol-img.com.cn/t_s1200x5000/g1/M0B/0E/05/Cg-4jlOtde-Idyg-AAIPr7LlwC4AAOpGwC2CsYAAg_H795.jpg",
					number: 10,
					money: 15,
					unit: "斤"
				}]
			},{
				id: 3,
				name: "五金店",
				product: [{
					id: 9,
					name: "大葱",
					imgUrl: "https://bbs-fd.zol-img.com.cn/t_s1200x5000/g1/M0B/0E/05/Cg-4jlOtde-Idyg-AAIPr7LlwC4AAOpGwC2CsYAAg_H795.jpg",
					number: 3,
					money: 15,
					unit: "斤"
				},{
					id: 11,
					name: "鸡蛋",
					imgUrl: "https://bbs-fd.zol-img.com.cn/t_s1200x5000/g1/M0B/0E/05/Cg-4jlOtde-Idyg-AAIPr7LlwC4AAOpGwC2CsYAAg_H795.jpg",
					number: 10,
					money: 15,
					unit: "斤"
				},{
					id: 10,
					name: "鸡蛋",
					imgUrl: "https://bbs-fd.zol-img.com.cn/t_s1200x5000/g1/M0B/0E/05/Cg-4jlOtde-Idyg-AAIPr7LlwC4AAOpGwC2CsYAAg_H795.jpg",
					number: 10,
					money: 15,
					unit: "斤"
				}]
			}]
		}
		commit('GET_SHOP_DATA', data);
	},
	getSiteData({ commit, state }, id){
		var data = [];
		if(id == 5){
			data = [{
				id: 1,
				name: "小花",
				phone: "17865923008",
				default: true,
				site: {
					province: "山东省",
					city: "济南市",
					county: "市区",
					town: "历下区",
					detail: "梦想小镇5幢301"
				}
			},{
				id: 2,
				name: "李好",
				phone: "17865923008",
				default: false,
				site: {
					province: "山东省",
					city: "德州市",
					county: "临邑县",
					town: "德平镇",
					detail: "梦想小镇5幢301"
				}
			},{
				id: 3,
				name: "红旗",
				phone: "17865923008",
				default: false,
				site: {
					province: "山东省",
					city: "济南市",
					county: "历下区",
					town: "德平镇",
					detail: "梦想小镇5幢301"
				}
			}]
		}
		commit('GET_SITE_DATA', data);
	},
	getSoleSiteData({commit, state}, id){
		var data = {};
		if(id == 1){
			data.phone = "15869105213";
			data.name = "小华";
			data.sex = "男";
			data.siteNum =  ["河北省", "秦皇岛市", "山海关区","南关街道"] ;
			data.siteName = "河北省-秦皇岛市-山海关区";
			data.detail = "狮子头";
		}else if(id == 2){
			data.phone = "15869105213";
			data.name = "小红";
			data.sex = "女";
			data.siteNum =  ["河北省", "秦皇岛市", "山海关区","南关街道"];
			data.siteName = "北京市-市辖区-西城区";
			data.detail = "狮子头";
		}
		commit('GET_SOLE_SITE_DATA', data);
	}
}