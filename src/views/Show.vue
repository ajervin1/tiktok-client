<template>
	<main>
		<article class="card">
			<div class="card-body">
				<div class="row">
					<div class="col-4">
						<video v-if="blogurl" :src="blogurl" class="img-fluid" controls></video>
						<div v-else class="spinner text-primary"></div>
					</div>
					<div class="col-8">
						<div class="d-flex align-items-center">
							<div class="avatar pr-4">
								<img :src="post.authorMeta.avatar" width="60" class="rounded-circle">
							</div>
							<div>
								<h4 class="">{{ post.authorMeta.name }}</h4>
								<div class="font-weight-light">{{ post.authorMeta.nickName}}</div>
							</div>
						
						</div>
						
						
						<hr>
						<div>
							<div class="mb-2">
								<span class="h4">{{ post.musicMeta.musicAuthor }} - </span>
								<span class="h4">{{ post.musicMeta.musicName }}</span>
							</div>
							
							<div class="mb-2"><strong>Play Count: </strong>{{ post.playCount }}</div>
							<a class="badge badge-primary " :href="post.musicMeta.playUrl">Music Url</a>
						</div>
					</div>
				</div>
			</div>

		</article>
	
	
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
		}
	}
</script>
<style>

</style>
