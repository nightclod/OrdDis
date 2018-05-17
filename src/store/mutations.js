export default {
	['RECOMMEND_LIST_DATA'](state, data) {
		state.itemData = data
	},
	['LIST_DATA'](state, data) {
		state.itemData = data
	},
	['GET_DATAILS_DATA'](state, data) {
		state.detailsData = data
	},
	['GET_COMMENT_DATA'](state, data) {
		state.commentData = data
	},
	['GET_SHOP_DATA'](state, data) {
		state.shopData = data
	},
	['GET_SITE_DATA'](state, data) {
		state.siteData = data
	}
}