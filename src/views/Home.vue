<template>
	<main >
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
