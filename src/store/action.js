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
					number: 1
				},{
					id: 2,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "汉堡",
					deat: "好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0
				},{
					id: 3,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0
				},{
					id: 4,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0
				},{
					id: 5,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0
				},{
					id: 6,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0
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
					number: 0
				},{
					id: 8,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "汉堡",
					deat: "好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0
				},{
					id: 9,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 15,
					number: 0
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
					number: 0
				},{
					id: 11,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "汉堡",
					deat: "好吃好吃好吃好吃。。。---",
					money: 13,
					number: 0
				},{
					id: 12,
					imgUrl: "http://img06.tooopen.com/images/20180318/tooopen_sy_236443383975.jpg",
					name: "面条",
					deat: "不好吃好吃好吃好吃。。。---",
					money: 15,
					number: 0
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
	}
}