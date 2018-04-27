export default {
	addNum({ commit, state }, id) {
		//点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
		commit('REMBER_ANSWER', id);
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', 1);
		}
	},
	//初始化信息
	initializeData({ commit }) {
		commit('INITIALIZE_DATA');
	},



	recommendData({ commit, state }, id) {
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
		commit('RECOMMEND_DATA', data);
	},
}