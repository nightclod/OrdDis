import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)


const state = {
	itemData: [],
	detailsData:{},
	commentData:[]
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})