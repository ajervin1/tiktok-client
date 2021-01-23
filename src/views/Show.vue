<template>
	<main>
		<div v-if="blogurl" class="w-25 mx-auto">
			<video :src="blogurl" class="img-fluid" controls preload="auto"></video>
		</div>
		<div v-else class="spinner-border text-primary">
		
		</div>
	
	</main>
</template>

<script>
	import axios from 'axios'
	import { downloadDataUrl } from '../helpers'
	
	export default {
		name: 'Show',
		data () {
			return {
				post: null,
				dataurl: null,
				blogurl: null
			}
		},
		async created () {
			this.post = this.$store.state.posts.find(p => p.id === this.$route.params.id)
			const payload = { video_url: this.post.videoUrl, cookie: this.$store.state.cookie }
			const { data } = await axios.post('https://tiktokserver100.herokuapp.com/video', payload, {
				responseType: 'blob'
			})
			this.blogurl = URL.createObjectURL(data)
			// const dataurl = await downloadDataUrl(data)
			// this.dataurl = dataurl
		}
	}
</script>
