<template>
	<article class="font-size-xs card border" v-if="dataurl">
		<video :src="dataurl" controls></video>
		<div class="card-body">
			<div class="meta-data">
				<div>Views: {{ post.playCount }}</div>
				<div>Shares: {{ post.shareCount }}</div>
				<div>Created: {{ post.createTime }}</div>
			</div>
			<div class="music-info">
				<div>Music Id: {{ post.musicMeta.musicId }}</div>
				<div>{{ post.musicMeta.musicName }}</div>
			
			</div>
			<div class="mb-2 actions">
				<button @click="handleMusic(post.musicMeta.musicId)"
				        class="btn my-2 btn-primary mr-2">
					Get By Musid Id
				</button>
				<button class="btn btn-dark my-2 mr-2" @click="handleUser(post.authorMeta.name)">
					Get User Videos
				</button>
				<div>
					<h6>HashTags</h6>
					<button @click="handleHash(hash.name)"
					        class="badge badge-dark border-0 mb-2 btn-sm mr-2"
					        v-for="hash in post.hashtags">
						{{ hash.name }}
					</button>
				</div>
			
			</div>
			<a class="btn btn-success mt-2" :href="blogurl" download="video.mp4">Download</a>
		</div>
	</article>
	<div class="spinner-border text-primary" role="status" v-else>
		<span class="sr-only">Loading...</span>
	</div>
</template>

<script>
	import { downloadDataUrl, downloadVideo } from '../../helpers'
	import axios from 'axios'
	
	export default {
		name: 'VideoItem',
		props: [ 'post' ],
		data () {
			return {
				blogurl: null,
				dataurl: null,
			}
		},
		methods: {
			async handleMusic (musicId) {
				await this.$store.dispatch('fetchMusicVideos', musicId)
			},
			async handleUser (username) {
				await this.$store.dispatch('fetchUserFeed', username)
			},
			async handleHash (hashtag) {
				await this.$store.dispatch('fetchHashTagVideos', hashtag)
			}
		},
		async created () {
			
			const payload = { video_url: this.post.videoUrl, cookie: this.$store.state.cookie }
			const { data } = await axios.post('http://localhost:4000/video', payload, {
				responseType: 'blob'
			})
			this.blogurl = URL.createObjectURL(data)
			const dataurl = await downloadDataUrl(data)
			this.dataurl = dataurl
	
			
		}
		
	}
</script>
