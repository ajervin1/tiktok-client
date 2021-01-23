<template>
	<main >
		<div v-if="$store.state.loading">
			<div class="spinner-border text-primary" >
			
			</div>
			<small class="ml-2">Loading</small>
		</div>
	
		<VideoList />
	</main>
</template>

<script>
	import VideoList from '../components/videos/VideoList'
	import NavBar from '../components/NavBar'
	
	export default {
		name: 'Home',
		components: { NavBar, VideoList },
	}
</script>
