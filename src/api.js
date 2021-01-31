// API


const store = require('./store')
const axios = require('axios').create({
	baseURL: 'https://tiktokserver100.herokuapp.com',
	headers: {
		referer: 'https://www.tiktok.com/',
		
	}
})


// GetTrending
export async function getTrending () {
	const { data } = await axios.get('/trending')
	
	return data
}

// GetUserFeed
export async function getVideosByUser (username) {
	const { data } = await axios.get(`/users/${ username }`)
	return data
}

// GetHashTagVideos
export async function getVideosByHashTag (hashtag) {
	const { data } = await axios.get(`/hashtag/${ hashtag }`)
	
	return data
}

// GetVideosBySong
export async function getVideosBySong (song_id) {
	const { data } = await axios.get(`/songs/${ song_id }`)
	
	return data
}
