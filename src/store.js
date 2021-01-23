import Vue from 'vue'
import Vuex from 'vuex'
import { getTrending, getVideosByHashTag, getVideosBySong, getVideosByUser } from './api'


Vue.use(Vuex)
// Store
const store = new Vuex.Store({
	state: {
		posts: [],
		cookie: '',
		search_type: 'user'
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
			const { posts, headers } = await getTrending()
			context.state.cookie = headers.cookie
			context.commit('setPosts', posts)
		},
		async fetchUserFeed (context, username) {
			const { posts, headers } = await getVideosByUser(username)
			context.state.cookie = headers.cookie
			context.commit('setPosts', posts)
		},
		async fetchHashTagVideos (context, hashtag) {
			const { posts, headers } = await getVideosByHashTag(hashtag)
			context.state.cookie = headers.cookie
			context.commit('setPosts', posts)
		},
		async fetchMusicVideos (context, music_id) {
			const { posts, headers } = await getVideosBySong(music_id)
			context.state.cookie = headers.cookie
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
	await store.dispatch("fetchTrending")
}
init()

export default store
