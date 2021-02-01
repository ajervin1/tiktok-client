<template>
	<main class="pt-4">
		<NavBar class="mb-8 "/>
		
		<!--Download Buttons-->
		<section class="download-buttons d-flex mb-2">
			<div class="dropdown mb-4 mr-4" v-if="state.videoUrls.length">
				<button data-toggle="dropdown" class="btn btn-secondary">
					Video Downloads
					<i class="ml-2 fas fa-download text-success mb-1"></i>
					<span class="badge badge-primary">{{videoCount }}</span>
				</button>
				<div class="dropdown-menu">
					<div class="dropdown-item" v-for="video in this.$store.state.videoUrls">
						<img :src="video.dynamic" class="pr-2 d-block mx-auto" width="60px"
						     height="60px">
					</div>
				
				</div>
			</div>
			<!--Download Files Button-->
			<div class="mb-4" v-if="videoCount !== 0">
				<button class="btn btn-primary font-weight-bold" @click="downloadVideos">
					<i class="fa fa-file-archive"></i>
					Zip Files
				</button>
			</div>
			<!--Download Button-->
			<div v-if="download_ready">
				<a class="btn btn-success ml-4"
				   href="https://tiktokserver100.herokuapp.com/download"
				   @click="resetDownload">Download Zip Folder
				</a>
			</div>
		</section>
		
		<!--Download Buttons-->
		
		
		<router-view></router-view>
	</main>
</template>

<script>
	import NavBar from './components/NavBar'
	import VideoList from './components/videos/VideoList'
	import axios from 'axios'
	import { downloadDataUrl, downloadVideo } from './helpers'
	
	export default {
		name: 'App',
		data () {
			return {
				download_ready: false
			}
		},
		components: { VideoList, NavBar },
		computed: {
			state () {
				return this.$store.state
			},
			videoCount () {
				return this.$store.state.videoUrls.length
			}
		},
		methods: {
			resetDownload () {
				this.download_ready = false
			},
			async downloadVideos () {
				const payload = {
					videos: this.$store.state.videoUrls.map(v => v.videoUrl),
					cookie: this.$store.state.cookie
				}
				console.log(payload)
				const url = 'https://tiktokserver100.herokuapp.com/zip_videos'
				const { data } = await axios.post(url, payload)
				this.download_ready = true
				this.$store.state.videoUrls = []
				
			}
		},
		
	}
</script>

