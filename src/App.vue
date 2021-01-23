<template>
	<main id="app" class="container p-8">
		<NavBar class="mb-8"/>
		<VideoList v-if="state.posts"/>
	</main>
</template>

<script>
	import NavBar from './components/NavBar'
	import VideoList from './components/videos/VideoList'
	import axios from 'axios'
	import { downloadDataUrl, downloadVideo } from './helpers'
	import SearchFilters from './components/SearchFilters'
	
	export default {
		name: 'App',
		data () {
			return {
				video: null
			}
		},
		components: { SearchFilters, VideoList, NavBar },
		computed: {
			state () {
				return this.$store.state
			}
		},
		async mounted () {
		
		}
	}
</script>

