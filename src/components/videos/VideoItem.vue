<template>
	<article class="font-size-xs card border bg-light">
		<div class="image-container w-50 mx-auto">
			<img :src="post.covers.dynamic" class="img-fluid">
		</div>
		<!--Post Details-->
		<div class="card-body py-2 pb-3">
			<p class="my-2">{{ post.text }}</p>
			<div class=""><strong>Views: </strong> {{ post.playCount }}</div>
		</div>
		<!--Actions-->
		<div class="card-footer py-3">
			<!--Post Actions-->
			<div class="post-actions">
				<button class="btn btn-success btn-sm small mr-4" @click="addFileToZip(post)">
					Add To Zip
				</button>
				<router-link :to="`/videos/${post.id}`" class="btn btn-primary btn-sm small">
					View Video
				</router-link>
			</div>
		
		</div>
	
	</article>

</template>

<script>
	/*
	 Attach Actions Buttons To Video
	 Get Single Video
	 * */
	import { downloadDataUrl } from '../../helpers'
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
			async handleUser (username) {
				await this.$store.dispatch('fetchUserFeed', username)
			},
			addFileToZip (video) {
				const { videoUrl, covers: { dynamic }, id, text } = video
				this.$store.state.videoUrls.push({ videoUrl, dynamic, id, text })
			}
		},
		async created () {
			// const payload = { video_url: this.post.videoUrl, cookie: this.$store.state.cookie }
			// const { data } = await axios.post('https://tiktokserver100.herokuapp.com/video', payload, {
			// 	responseType: 'blob'
			// })
			// this.blogurl = URL.createObjectURL(data)
			
		}
		
	}
</script>
