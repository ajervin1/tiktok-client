<template>
	<div class="row" v-if="posts.length">
		<div class="col-4 mb-8" v-for="post in posts">
			<VideoItem :key="post.id" :post="post"/>
		</div>
	</div>
</template>

<script>
	import VideoItem from './VideoItem'
	
	export default {
		name: 'VideoList',
		computed: {
			posts () {
				return this.$store.state.posts
			}
		},
		components: { VideoItem },
		
	}
</script>
