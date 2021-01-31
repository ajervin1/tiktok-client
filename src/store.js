import Vue from 'vue'
import Vuex from 'vuex'
import { getTrending, getVideosByHashTag, getVideosBySong, getVideosByUser } from './api'


Vue.use(Vuex)
// Store
const store = new Vuex.Store({
	state: {
		posts: [],
		cookie: '',
		loading: false,
		videoUrls: [],
	},
	mutations: {
		setPosts (state, newposts) {
			state.posts = newposts
		},
		changeSearchType (state, searchtype) {
			state.search_type = searchtype
		}
	},
	actions: {
		async fetchTrending (context, payload) {
			context.state.loading = true
			const { posts, headers } = await getTrending()
			context.state.loading = false
			context.state.cookie = headers.cookie
			context.commit('setPosts', posts)
		},
		async fetchUserFeed (context, username) {
			context.state.loading = true
			const { posts, headers } = await getVideosByUser(username)
			context.state.cookie = headers.cookie
			context.state.loading = false
			context.commit('setPosts', posts)
		},
	},
	getters: {
		posts (state, getters) {
			return state.posts
		},
		getPostById (state) {
			return function (id) {
				return state.posts.find(post => post.id === id)
			}
		}
	}
})

async function init () {
	await store.dispatch('fetchTrending')
}

init()

export default store
